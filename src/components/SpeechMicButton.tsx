import React, { useState, useRef } from 'react';
import { Mic, MicOff, RefreshCw, CheckCircle2, AlertCircle, Info, Keyboard } from 'lucide-react';
import { 
  createSpeechRecognizer, 
  evaluateChineseSpeech, 
  isSpeechRecognitionSupported,
  SpeechMatchResult 
} from '../utils/speech';

interface SpeechMicButtonProps {
  targetText: string;
  onSuccess?: (score: number) => void;
  size?: 'md' | 'lg';
  className?: string;
}

export const SpeechMicButton: React.FC<SpeechMicButtonProps> = ({
  targetText,
  onSuccess,
  size = 'lg',
  className = ''
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [result, setResult] = useState<SpeechMatchResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualText, setManualText] = useState('');

  const recognizerRef = useRef<any>(null);
  const supported = isSpeechRecognitionSupported();

  const handleStartRecording = () => {
    setErrorMessage(null);
    setResult(null);
    setLiveTranscript('');

    if (!supported) {
      setErrorMessage('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari, or use the manual check below.');
      return;
    }

    try {
      const recognizer = createSpeechRecognizer(
        (text, isFinal) => {
          setLiveTranscript(text);
          if (isFinal) {
            const evalResult = evaluateChineseSpeech(text, targetText);
            setResult(evalResult);
            setIsRecording(false);
            if (evalResult.matched && onSuccess) {
              onSuccess(evalResult.score);
            }
          }
        },
        (error) => {
          setErrorMessage(error);
          setIsRecording(false);
        },
        () => {
          setIsRecording(false);
        }
      );

      if (recognizer) {
        recognizerRef.current = recognizer;
        recognizer.start();
        setIsRecording(true);
      }
    } catch (e: any) {
      setErrorMessage('Could not access microphone: ' + (e.message || 'unknown error'));
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    if (recognizerRef.current) {
      try {
        recognizerRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    setIsRecording(false);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualText.trim()) return;
    const evalResult = evaluateChineseSpeech(manualText, targetText);
    setResult(evalResult);
    if (evalResult.matched && onSuccess) {
      onSuccess(evalResult.score);
    }
  };

  const handleSelfVerify = () => {
    const evalResult: SpeechMatchResult = {
      matched: true,
      score: 95,
      recognizedText: targetText,
      expectedText: targetText,
      matchedChars: targetText.split(''),
      missingChars: [],
      extraChars: [],
      feedback: 'Self-verified pronunciation! Excellent practice.'
    };
    setResult(evalResult);
    if (onSuccess) onSuccess(95);
  };

  return (
    <div className={`flex flex-col items-center gap-3 w-full ${className}`}>
      {/* Mic trigger button */}
      <div className="flex items-center gap-3">
        <button
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          className={`relative group flex items-center justify-center rounded-full transition-all duration-200 shadow-md active:scale-95 ${
            size === 'lg' ? 'w-16 h-16' : 'w-12 h-12'
          } ${
            isRecording
              ? 'bg-red-600 text-white ring-8 ring-red-200 animate-pulse dark:ring-red-900/50'
              : result?.matched
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg'
          }`}
          title={isRecording ? 'Click to stop recording' : 'Click and speak in Mandarin'}
        >
          {isRecording ? (
            <div className="flex items-center justify-center">
              <span className="w-5 h-5 bg-white rounded-sm animate-pulse" />
            </div>
          ) : result?.matched ? (
            <CheckCircle2 size={size === 'lg' ? 32 : 24} />
          ) : (
            <Mic size={size === 'lg' ? 30 : 22} />
          )}

          {isRecording && (
            <span className="absolute -bottom-7 text-xs font-semibold text-red-600 whitespace-nowrap dark:text-red-400">
              Listening... Speak now!
            </span>
          )}
        </button>

        {/* Retry or Manual options */}
        {result && (
          <button
            onClick={handleStartRecording}
            title="Try speaking again"
            className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 transition-colors"
          >
            <RefreshCw size={18} />
          </button>
        )}

        <button
          onClick={() => setShowManualInput(!showManualInput)}
          title="Type or manual verification"
          className="p-2.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 transition-colors"
        >
          <Keyboard size={18} />
        </button>
      </div>

      {/* Live transcript during speech */}
      {isRecording && liveTranscript && (
        <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm px-4 py-2 rounded-xl animate-fade-in border border-slate-200 dark:border-slate-700">
          Hearing: <span className="font-semibold text-red-600 dark:text-red-400">{liveTranscript}</span>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs p-3 rounded-xl max-w-md animate-fade-in">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{errorMessage}</p>
            <button
              onClick={handleSelfVerify}
              className="mt-2 text-xs font-bold underline hover:text-amber-900 dark:hover:text-amber-100"
            >
              I spoke it aloud, mark as practiced!
            </button>
          </div>
        </div>
      )}

      {/* Manual verification modal / input */}
      {showManualInput && (
        <form onSubmit={handleManualSubmit} className="flex flex-col gap-2 w-full max-w-sm mt-1 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
            <span>Manual Verification</span>
            <button
              type="button"
              onClick={handleSelfVerify}
              className="text-emerald-600 hover:underline font-semibold"
            >
              Self-Verify (Spoke Aloud)
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={manualText}
              onChange={(e) => setManualText(e.target.value)}
              placeholder="Type Chinese or Pinyin..."
              className="flex-1 px-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700"
            >
              Check
            </button>
          </div>
        </form>
      )}

      {/* Result Card */}
      {result && (
        <div
          className={`w-full max-w-md p-3.5 rounded-2xl border text-sm transition-all animate-scale-up ${
            result.matched
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200'
              : 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold flex items-center gap-1.5">
              {result.matched ? (
                <>
                  <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                  Pronunciation Recognized!
                </>
              ) : (
                <>
                  <AlertCircle size={18} className="text-amber-600 dark:text-amber-400" />
                  Keep Practicing!
                </>
              )}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                result.matched
                  ? 'bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                  : 'bg-amber-200 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
              }`}
            >
              {result.score}% Match
            </span>
          </div>

          <div className="text-xs space-y-1 mb-2">
            <div>
              <span className="text-slate-500 dark:text-slate-400">Heard: </span>
              <span className="font-semibold">{result.recognizedText || '(Nothing heard)'}</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400">Expected: </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{result.expectedText}</span>
            </div>
          </div>

          <p className="text-xs font-medium opacity-90">{result.feedback}</p>

          {!result.matched && (
            <div className="mt-2 pt-2 border-t border-amber-200 dark:border-amber-800 flex items-center justify-between text-xs">
              <span className="text-amber-700 dark:text-amber-400">Browser tone accuracy caveat:</span>
              <button
                onClick={handleSelfVerify}
                className="font-bold underline text-amber-800 dark:text-amber-200 hover:text-amber-950"
              >
                I said it with good tones!
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
