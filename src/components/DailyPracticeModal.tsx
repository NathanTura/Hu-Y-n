import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Headphones, 
  Mic, 
  Layers, 
  MessageSquare, 
  Flame, 
  Clock,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AudioButton } from './AudioButton';
import { SpeechMicButton } from './SpeechMicButton';

export const DailyPracticeModal: React.FC = () => {
  const { 
    isDailyPracticeOpen, 
    closeDailyPractice, 
    addXP, 
    triggerCelebration,
    progress 
  } = useApp();

  const [duration, setDuration] = useState<5 | 10 | 15>(10);
  const [phase, setPhase] = useState<number>(0);
  // 0: Selection / Intro
  // 1: Listening Drill
  // 2: Speaking Challenge
  // 3: Quick Vocabulary Review
  // 4: Mini Conversation Dialogue
  // 5: Complete & Bonus XP

  // Phase 1 (Listening) State
  const [listenAnswer, setListenAnswer] = useState<string | null>(null);
  const [listenChecked, setListenChecked] = useState(false);

  // Phase 2 (Speaking) State
  const [spokenDone, setSpokenDone] = useState(false);

  // Phase 3 (Vocab) State
  const [vocabCardIdx, setVocabCardIdx] = useState(0);

  if (!isDailyPracticeOpen) return null;

  const handleCompleteDaily = () => {
    const bonusXp = duration === 5 ? 25 : duration === 10 ? 50 : 80;
    addXP(bonusXp);
    triggerCelebration();
    closeDailyPractice();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-800 w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-red-100 dark:bg-red-950 text-red-600">
              <Sparkles size={16} />
            </div>
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">
              Daily Practice Routine ({duration} min)
            </span>
          </div>

          <button
            onClick={closeDailyPractice}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Dots across 4 phases */}
        {phase > 0 && phase < 5 && (
          <div className="px-6 pt-3 flex items-center justify-between text-xs font-bold text-slate-400">
            <span className={phase === 1 ? 'text-red-600' : ''}>1. Listening</span>
            <span className={phase === 2 ? 'text-red-600' : ''}>2. Speaking</span>
            <span className={phase === 3 ? 'text-red-600' : ''}>3. Vocab</span>
            <span className={phase === 4 ? 'text-red-600' : ''}>4. Conversation</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* PHASE 0: CHOOSE DURATION & START */}
          {phase === 0 && (
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg">
                <Flame size={32} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Keep Your {progress.streak}-Day Streak Alive!
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                  A high-intensity, balanced routine blending listening, speaking, vocabulary recall, and dialogue.
                </p>
              </div>

              {/* Duration Selector */}
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto pt-2">
                {[5, 10, 15].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setDuration(mins as 5 | 10 | 15)}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      duration === mins
                        ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <Clock size={16} />
                    <span>{mins} Mins</span>
                    <span className="text-[10px] font-normal opacity-70">
                      {mins === 5 ? 'Quick Spark' : mins === 10 ? 'Standard' : 'Immersion'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setPhase(1)}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-extrabold text-sm shadow-lg hover:brightness-105 active:scale-95 transition-all"
                >
                  Start Daily Routine (+50 XP)
                </button>
              </div>
            </div>
          )}

          {/* PHASE 1: LISTENING DRILL (3 min) */}
          {phase === 1 && (
            <div className="space-y-4 animate-scale-up">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <Headphones size={16} />
                <span>Phase 1: Listening Comprehension</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-3">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  Listen to the native sentence:
                </h3>
                <div className="flex justify-center">
                  <AudioButton text="请问，地铁站在哪儿？一直走吗？" size="lg" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  What is the speaker asking?
                </p>
                {[
                  'Excuse me, where is the subway? Walk straight?',
                  'How much does the bus ticket cost?',
                  'What time does the train arrive?',
                  'Where can I order boba milk tea?'
                ].map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setListenAnswer(opt);
                      setListenChecked(true);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all ${
                      listenAnswer === opt
                        ? opt.startsWith('Excuse me, where')
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                          : 'bg-red-50 border-red-500 text-red-900'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {listenChecked && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setPhase(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700"
                  >
                    <span>Next: Speaking Drill</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* PHASE 2: SPEAKING CHALLENGE (3 min) */}
          {phase === 2 && (
            <div className="space-y-4 animate-scale-up text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                <Mic size={16} />
                <span>Phase 2: Speaking Out Loud</span>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-3xl font-chinese font-black text-slate-900 dark:text-white">
                  太贵了，便宜一点吧！
                </div>
                <div className="text-sm font-bold text-red-600 dark:text-red-400">
                  Tài guì le, piányi yìdiǎn ba!
                </div>
                <div className="text-xs text-slate-500">
                  "Too expensive, make it a bit cheaper!"
                </div>
                <div className="pt-2">
                  <AudioButton text="太贵了，便宜一点吧！" size="md" />
                </div>
              </div>

              <div className="pt-2">
                <SpeechMicButton
                  targetText="太贵了便宜一点吧"
                  onSuccess={() => setSpokenDone(true)}
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setPhase(3)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700"
                >
                  <span>Next: Vocab Recall</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* PHASE 3: QUICK VOCABULARY REVIEW (3 min) */}
          {phase === 3 && (
            <div className="space-y-4 animate-scale-up text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <Layers size={16} />
                <span>Phase 3: Spaced Vocab Flash</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-4xl font-chinese font-black text-slate-900 dark:text-white">
                  {vocabCardIdx === 0 ? '珍珠奶茶' : vocabCardIdx === 1 ? '认识你很高兴' : '没问题'}
                </div>
                <div className="text-sm font-bold text-red-600 dark:text-red-400">
                  {vocabCardIdx === 0 ? 'zhēnzhū nǎichá' : vocabCardIdx === 1 ? 'rènshi nǐ hěn gāoxìng' : 'méi wèntí'}
                </div>
                <div className="text-xs text-slate-500">
                  {vocabCardIdx === 0 ? 'Pearl milk tea' : vocabCardIdx === 1 ? 'Nice to meet you' : 'No problem'}
                </div>
                <div className="pt-2">
                  <AudioButton
                    text={vocabCardIdx === 0 ? '珍珠奶茶' : vocabCardIdx === 1 ? '认识你很高兴' : '没问题'}
                    size="md"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setVocabCardIdx(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      vocabCardIdx === idx ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Card {idx + 1}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setPhase(4)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700"
                >
                  <span>Next: Mini Dialogue</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* PHASE 4: MINI CONVERSATION DIALOGUE (3 min) */}
          {phase === 4 && (
            <div className="space-y-4 animate-scale-up">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <MessageSquare size={16} />
                <span>Phase 4: Spoken Mini Conversation</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex gap-3 items-start">
                <div className="text-2xl">👩‍💼</div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Partner asks:</div>
                  <div className="text-base font-chinese font-bold text-slate-900 dark:text-white">
                    你周末喜欢做什么？
                  </div>
                  <div className="text-xs text-red-600">Nǐ zhōumò xǐhuan zuò shénme?</div>
                  <div className="text-xs text-slate-500">What do you like to do on weekends?</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Choose your response:
                </div>
                {[
                  { hanzi: '我周末喜欢看电影和听音乐。', pinyin: 'Wǒ zhōumò xǐhuan kàn diànyǐng hé tīng yīnyuè.', en: 'I like watching movies and listening to music on weekends.' },
                  { hanzi: '我特别喜欢运动和旅游！', pinyin: 'Wǒ tèbié xǐhuan yùndòng hé lǚyóu!', en: 'I especially love sports and traveling!' }
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setPhase(5)}
                    className="w-full text-left p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-red-500 transition-all space-y-0.5"
                  >
                    <div className="font-chinese font-bold text-sm text-slate-900 dark:text-white">
                      {item.hanzi}
                    </div>
                    <div className="text-xs text-red-600">{item.pinyin}</div>
                    <div className="text-[11px] text-slate-500">{item.en}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PHASE 5: COMPLETION CELEBRATION */}
          {phase === 5 && (
            <div className="text-center space-y-4 py-4 animate-scale-up">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Daily Practice Completed!
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  You completed all 4 core pillars today! Streak protected 🔥
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 max-w-sm mx-auto text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center justify-center gap-2">
                <Flame size={18} className="text-amber-500 fill-amber-500" />
                <span>+50 XP Bonus Added to Daily Goal!</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCompleteDaily}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-extrabold text-sm shadow-lg hover:brightness-105 active:scale-95 transition-all"
                >
                  Collect Reward & Finish
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
