import React, { useState } from 'react';
import { 
  Mic, 
  Volume2, 
  CheckCircle2, 
  Sparkles, 
  Info, 
  Layers, 
  RotateCcw,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { 
  MANDARIN_TONES, 
  TONE_SANDHI_RULES, 
  TONE_PAIRS 
} from '../data/tones';
import { AudioButton } from './AudioButton';
import { SpeechMicButton } from './SpeechMicButton';
import { useApp } from '../context/AppContext';

export const PronunciationTrainer: React.FC = () => {
  const { addXP } = useApp();
  const [selectedToneNum, setSelectedToneNum] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'tones' | 'sandhi' | 'pairs' | 'tester'>('tones');

  // Custom tone speech tester state
  const [customTestPhrase, setCustomTestPhrase] = useState<string>('你好');

  const selectedTone = MANDARIN_TONES.find(t => t.number === selectedToneNum) || MANDARIN_TONES[0];

  const testPhrases = [
    { hanzi: '你好', pinyin: 'nǐ hǎo', english: 'Hello' },
    { hanzi: '谢谢', pinyin: 'xièxie', english: 'Thank you' },
    { hanzi: '中国', pinyin: 'Zhōngguó', english: 'China' },
    { hanzi: '早上好', pinyin: 'zǎoshang hǎo', english: 'Good morning' },
    { hanzi: '再见', pinyin: 'zàijiàn', english: 'Goodbye' },
    { hanzi: '我要一杯奶茶', pinyin: 'Wǒ yào yì bēi nǎichá', english: 'I want a cup of milk tea' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400">
            Acoustic & Tonal Mastery
          </span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            Mandarin Pronunciation & Tone Lab
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Visual pitch curves, tone sandhi transformations, and speech recognition testing.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 self-start">
          <button
            onClick={() => setActiveTab('tones')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'tones'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            The 4 Tones
          </button>
          <button
            onClick={() => setActiveTab('sandhi')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'sandhi'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Tone Sandhi Rules
          </button>
          <button
            onClick={() => setActiveTab('pairs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pairs'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Tone Pairs
          </button>
          <button
            onClick={() => setActiveTab('tester')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'tester'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Mic Speech Tester
          </button>
        </div>
      </div>

      {/* Honest Scientific Transparency Notice */}
      <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs sm:text-sm text-blue-900 dark:text-blue-200 flex items-start gap-3">
        <Info size={20} className="shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold">Linguistic Note on Browser Speech Recognition:</span> The Web Speech API evaluates recognized Chinese words (characters) against your speech. While excellent for matching vocabulary and sentence cadence, consumer browser speech engines do not acoustically analyze raw F0 pitch contours. Train your ear with the visual pitch graphs below and practice the minimal pair audio drills!
        </div>
      </div>

      {/* ==================================================== */}
      {/* TAB 1: THE 4 TONES VISUALIZER */}
      {/* ==================================================== */}
      {activeTab === 'tones' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-scale-up">
          {/* Tone Selector Pills */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">
              Select a Tone to Inspect:
            </h3>

            <div className="space-y-2">
              {MANDARIN_TONES.map((t) => {
                const isSelected = selectedToneNum === t.number;
                return (
                  <button
                    key={t.number}
                    onClick={() => setSelectedToneNum(t.number)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? `${t.colorClass} shadow-md ring-2 ring-red-400/30 font-bold`
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t.name}</span>
                      <span className="text-xs font-chinese opacity-80">{t.chineseName}</span>
                    </div>
                    <div className="text-xs opacity-75 mt-0.5">
                      Pitch Contour: {t.pitchContour}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tone Deep Dive Card with Visual Pitch Curve */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                  Pitch Level: {selectedTone.pitchContour}
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                  {selectedTone.name}
                </h2>
                <div className="font-chinese text-slate-500 font-semibold text-sm">
                  {selectedTone.chineseName}
                </div>
              </div>

              {/* Pitch Visualizer SVG Canvas */}
              <div className="w-40 h-24 bg-slate-50 dark:bg-slate-900 rounded-2xl p-2 border border-slate-200 dark:border-slate-700 relative flex items-center justify-center">
                {/* 5-Level Pitch grid lines */}
                <div className="absolute inset-x-2 inset-y-2 flex flex-col justify-between opacity-20 pointer-events-none">
                  <div className="border-b border-slate-500 text-[8px] text-right">5 High</div>
                  <div className="border-b border-slate-500" />
                  <div className="border-b border-slate-500" />
                  <div className="border-b border-slate-500" />
                  <div className="text-[8px] text-right">1 Low</div>
                </div>

                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                  <path
                    d={selectedTone.wavePath}
                    fill={selectedTone.number === 5 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth={selectedTone.number === 5 ? '1' : '6'}
                    strokeLinecap="round"
                    className="text-red-600 dark:text-red-400"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm">
                <span className="font-bold text-slate-800 dark:text-slate-200">How to produce: </span>
                <span className="text-slate-600 dark:text-slate-300">{selectedTone.description}</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-sm">
                <span className="font-bold text-amber-900 dark:text-amber-200">English Analogy: </span>
                <span className="text-amber-800 dark:text-amber-300">{selectedTone.englishAnalogy}</span>
              </div>
            </div>

            {/* Audio Syllable Examples for this Tone */}
            <div>
              <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 mb-3">
                Listen & Practice Minimal Pairs for this Tone:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedTone.exampleSyllables.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-between text-center gap-2 hover:border-red-300 transition-all"
                  >
                    <span className="text-3xl font-black font-chinese text-slate-900 dark:text-white">
                      {s.hanzi}
                    </span>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">
                      {s.pinyin}
                    </span>
                    <span className="text-xs text-slate-500">
                      {s.english}
                    </span>
                    <AudioButton text={s.audio} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 2: TONE SANDHI RULES */}
      {/* ==================================================== */}
      {activeTab === 'sandhi' && (
        <div className="space-y-6 animate-scale-up">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Tone Sandhi (变调) — The Secret to Natural Chinese Flow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              In real connected Mandarin speech, tones naturally shift when syllables are placed together so your vocal cords can flow smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TONE_SANDHI_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {rule.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {rule.rule}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-amber-900 dark:text-amber-200">
                      Example:
                    </span>
                    <AudioButton text={rule.audio} size="sm" />
                  </div>
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                    {rule.example}
                  </div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 italic">
                    💡 {rule.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: TONE PAIRS */}
      {/* ==================================================== */}
      {activeTab === 'pairs' && (
        <div className="space-y-6 animate-scale-up">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Tone Pair Drills (双音节练习)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Over 80% of spoken Chinese words are two syllables! Practicing tone combinations gives your speech authentic rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TONE_PAIRS.map((pair, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between hover:border-red-300 transition-all"
              >
                <div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400">
                    {pair.name}
                  </span>
                  <div className="text-2xl font-black font-chinese text-slate-900 dark:text-white mt-1">
                    {pair.hanzi}
                  </div>
                  <div className="text-xs font-bold text-red-600 dark:text-red-400">
                    {pair.pinyin}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {pair.english}
                  </div>
                </div>

                <AudioButton text={pair.audio} size="md" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4: MIC SPEECH TESTER */}
      {/* ==================================================== */}
      {activeTab === 'tester' && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div className="text-center max-w-md mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Interactive Speech Practice
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select a phrase below, listen to the native model, tap the mic, and speak!
            </p>
          </div>

          {/* Quick Phrase Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {testPhrases.map((phrase, i) => (
              <button
                key={i}
                onClick={() => setCustomTestPhrase(phrase.hanzi)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  customTestPhrase === phrase.hanzi
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-red-400'
                }`}
              >
                {phrase.hanzi} ({phrase.pinyin})
              </button>
            ))}
          </div>

          {/* Practice Card */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center space-y-3 max-w-md mx-auto">
            <div className="text-3xl sm:text-4xl font-chinese font-black text-slate-900 dark:text-white">
              {customTestPhrase}
            </div>

            <div className="flex justify-center">
              <AudioButton text={customTestPhrase} size="lg" />
            </div>

            <div className="pt-2">
              <SpeechMicButton
                targetText={customTestPhrase}
                onSuccess={() => addXP(15)}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
