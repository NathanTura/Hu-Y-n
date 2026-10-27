import React from 'react';
import { X, Volume2, Mic, Eye, Sun, Moon, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { speakChinese, isSpeechRecognitionSupported } from '../utils/speech';

export const SettingsModal: React.FC = () => {
  const { isSettingsOpen, closeSettings, progress, updateSettings, resetProgress } = useApp();

  if (!isSettingsOpen) return null;

  const recognitionSupported = isSpeechRecognitionSupported();

  const handleTestSpeech = () => {
    speakChinese('你好，欢迎来到华音中文口语学院！', progress.settings.speechRate);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <h2 className="font-extrabold text-base text-slate-900 dark:text-white">
            Settings & Audio Configuration
          </h2>
          <button
            onClick={closeSettings}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Audio Playback Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800 dark:text-slate-200">
                Default Voice Speed
              </label>
              <span className="text-xs font-bold text-red-600 dark:text-red-400">
                {progress.settings.speechRate}x
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0.7"
                max="1.2"
                step="0.05"
                value={progress.settings.speechRate}
                onChange={(e) => updateSettings({ speechRate: parseFloat(e.target.value) })}
                className="flex-1 accent-red-600 cursor-pointer"
              />
              <button
                onClick={handleTestSpeech}
                className="px-3 py-1.5 rounded-xl bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-200 text-xs font-bold flex items-center gap-1"
              >
                <Volume2 size={14} /> Test
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              0.75x is great for beginners parsing individual tones; 1.0x matches natural Beijing/Shanghai speech cadence.
            </p>
          </div>

          {/* Speech Recognition Diagnostics */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Mic size={15} />
                Browser Speech Recognition (zh-CN)
              </span>
              {recognitionSupported ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 size={12} /> Supported
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <AlertCircle size={12} /> Unavailable
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {recognitionSupported
                ? 'Your browser supports the Web Speech API with zh-CN recognition. Ensure microphone permissions are allowed.'
                : 'Your current browser lacks Web Speech Recognition. You can still practice with manual input and self-verification! Chrome, Edge, and Safari are recommended.'}
            </p>
          </div>

          {/* Visibility Toggles */}
          <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
              Display & Immersion Preferences
            </h3>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Show Pinyin</div>
                <div className="text-[11px] text-slate-400">Display romanized pronunciation guide with tone marks</div>
              </div>
              <input
                type="checkbox"
                checked={progress.settings.showPinyin}
                onChange={(e) => updateSettings({ showPinyin: e.target.checked })}
                className="w-4 h-4 accent-red-600 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Show English Translations</div>
                <div className="text-[11px] text-slate-400">Turn off for an advanced immersion challenge</div>
              </div>
              <input
                type="checkbox"
                checked={progress.settings.showEnglish}
                onChange={(e) => updateSettings({ showEnglish: e.target.checked })}
                className="w-4 h-4 accent-red-600 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Auto-Play Conversation Audio</div>
                <div className="text-[11px] text-slate-400">Speak partner sentences immediately in simulator</div>
              </div>
              <input
                type="checkbox"
                checked={progress.settings.autoPlayAudio}
                onChange={(e) => updateSettings({ autoPlayAudio: e.target.checked })}
                className="w-4 h-4 accent-red-600 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Theme selector */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
            <label className="font-bold text-slate-800 dark:text-slate-200">
              Appearance Theme
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => updateSettings({ theme: 'light' })}
                className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs ${
                  progress.settings.theme === 'light'
                    ? 'border-red-600 bg-red-50 text-red-700'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <Sun size={16} /> Light Mode
              </button>
              <button
                onClick={() => updateSettings({ theme: 'dark' })}
                className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs ${
                  progress.settings.theme === 'dark'
                    ? 'border-red-600 bg-red-950 text-red-300'
                    : 'border-slate-700 text-slate-400'
                }`}
              >
                <Moon size={16} /> Dark Mode
              </button>
            </div>
          </div>

          {/* Reset progress */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
            <button
              onClick={resetProgress}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5"
            >
              <Trash2 size={14} />
              <span>Reset All Progress & Streaks</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
