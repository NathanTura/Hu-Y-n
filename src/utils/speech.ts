// SpeechSynthesis & SpeechRecognition utilities for Mandarin Chinese (zh-CN)

// Cache voices
let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

/**
 * Find the best available Mandarin (zh-CN or zh) voice
 */
export function getMandarinVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  
  if (cachedVoices.length === 0) {
    cachedVoices = window.speechSynthesis.getVoices();
  }

  // Priority search for high quality Chinese voices
  const zhCNVoices = cachedVoices.filter(v => v.lang.toLowerCase() === 'zh-cn' || v.lang.toLowerCase().startsWith('zh'));
  
  // Prefer natural or online voices
  const preferred = zhCNVoices.find(v => 
    v.name.includes('Natural') || 
    v.name.includes('Xiaoxiao') || 
    v.name.includes('Yunxi') || 
    v.name.includes('Tingting') || 
    v.name.includes('Google') ||
    v.name.includes('Chinese')
  );

  return preferred || zhCNVoices[0] || null;
}

/**
 * Speak a Chinese phrase with optional rate override (e.g. 0.75 for slow, 1.0 for normal)
 */
export function speakChinese(text: string, rate: number = 1.0): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is not supported in this browser.');
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending utterance

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = Math.max(0.5, Math.min(1.5, rate));
      utterance.pitch = 1.0;

      const voice = getMandarinVoice();
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (e) => {
        console.warn('Speech synthesis error:', e);
        resolve(); // resolve anyway so UI doesn't hang
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis failed:', err);
      resolve();
    }
  });
}

/**
 * Check if Web Speech Recognition is supported
 */
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
}

/**
 * Clean text for character-level Chinese comparison
 */
export function normalizeChineseText(text: string): string {
  return text
    .replace(/[，。！？、；：“”‘’（）《》\s.,!?:;'"()\[\]{}]/g, '')
    .trim()
    .toLowerCase();
}

export interface SpeechMatchResult {
  matched: boolean;
  score: number; // 0 to 100
  recognizedText: string;
  expectedText: string;
  matchedChars: string[];
  missingChars: string[];
  extraChars: string[];
  feedback: string;
}

/**
 * Compare recognized Chinese text against the expected prompt
 */
export function evaluateChineseSpeech(recognized: string, expected: string): SpeechMatchResult {
  const normRecognized = normalizeChineseText(recognized);
  const normExpected = normalizeChineseText(expected);

  if (!normRecognized) {
    return {
      matched: false,
      score: 0,
      recognizedText: recognized,
      expectedText: expected,
      matchedChars: [],
      missingChars: normExpected.split(''),
      extraChars: [],
      feedback: 'No speech recognized. Please speak clearly into your microphone.'
    };
  }

  if (normRecognized === normExpected) {
    return {
      matched: true,
      score: 100,
      recognizedText: recognized,
      expectedText: expected,
      matchedChars: normExpected.split(''),
      missingChars: [],
      extraChars: [],
      feedback: '太棒了！(Excellent!) Perfect pronunciation match.'
    };
  }

  // Calculate character overlap
  const expectedChars = normExpected.split('');
  const recognizedChars = normRecognized.split('');

  const matchedChars: string[] = [];
  const missingChars: string[] = [];

  const recPool = [...recognizedChars];

  for (const char of expectedChars) {
    const idx = recPool.indexOf(char);
    if (idx !== -1) {
      matchedChars.push(char);
      recPool.splice(idx, 1);
    } else {
      missingChars.push(char);
    }
  }

  const extraChars = recPool;
  const matchRatio = expectedChars.length > 0 ? (matchedChars.length / expectedChars.length) : 0;
  const score = Math.round(matchRatio * 100);
  const matched = score >= 75;

  let feedback = '';
  if (matched) {
    feedback = score === 100 ? '太棒了！(Perfect!)' : '很好！(Very good!) Clear pronunciation with slight variation.';
  } else if (score >= 50) {
    feedback = `Good attempt (${score}%), but some characters like ${missingChars.slice(0, 3).join(', ')} were unclear. Try again!`;
  } else {
    feedback = `Recognized "${recognized}". Keep practicing! Try listening to the native audio again.`;
  }

  return {
    matched,
    score,
    recognizedText: recognized,
    expectedText: expected,
    matchedChars,
    missingChars,
    extraChars,
    feedback
  };
}

/**
 * Create a speech recognition instance with zh-CN
 */
export function createSpeechRecognizer(
  onResult: (text: string, isFinal: boolean) => void,
  onError: (error: string) => void,
  onEnd: () => void
) {
  if (!isSpeechRecognitionSupported()) {
    onError('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari, or use manual typing.');
    return null;
  }

  // @ts-expect-error Browser prefix compatibility
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'zh-CN';
  recognition.interimResults = true;
  recognition.maxAlternatives = 3;
  recognition.continuous = false;

  recognition.onresult = (event: any) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    if (finalTranscript) {
      onResult(finalTranscript, true);
    } else if (interimTranscript) {
      onResult(interimTranscript, false);
    }
  };

  recognition.onerror = (event: any) => {
    let msg = 'Recognition error';
    if (event.error === 'not-allowed') {
      msg = 'Microphone permission was denied. Please allow microphone access in your browser settings.';
    } else if (event.error === 'no-speech') {
      msg = 'No speech was detected. Please try again.';
    } else if (event.error === 'network') {
      msg = 'Network error during speech recognition.';
    }
    onError(msg);
  };

  recognition.onend = () => {
    onEnd();
  };

  return recognition;
}
