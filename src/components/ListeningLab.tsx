import React, { useState } from 'react';
import { 
  Headphones, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  RotateCcw,
  Play,
  ArrowRight
} from 'lucide-react';
import { AudioButton } from './AudioButton';
import { useApp } from '../context/AppContext';

interface ListeningDrill {
  id: string;
  audioPrompt: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hanziReveal: string;
  pinyinReveal: string;
}

const LISTENING_DRILLS: ListeningDrill[] = [
  {
    id: 'ld-1',
    audioPrompt: '我要一杯珍珠奶茶，半糖少冰。',
    question: 'What customization did the customer request for their boba?',
    options: ['Half sugar, less ice', 'Full sugar, extra ice', 'No sugar, warm', 'Normal sweetness, no ice'],
    correctAnswer: 'Half sugar, less ice',
    explanation: '半糖 (bàn táng) = half sugar; 少冰 (shǎo bīng) = less ice.',
    hanziReveal: '我要一杯珍珠奶茶，半糖少冰。',
    pinyinReveal: 'Wǒ yào yì bēi zhēnzhū nǎichá, bàn táng shǎo bīng.'
  },
  {
    id: 'ld-2',
    audioPrompt: '向前一直走，到了路口向左拐。',
    question: 'Which direction should you turn at the intersection?',
    options: ['Turn left', 'Turn right', 'Go straight', 'Take the bridge'],
    correctAnswer: 'Turn left',
    explanation: '向左拐 (xiàng zuǒ guǎi) = turn left.',
    hanziReveal: '向前一直走，到了路口向左拐。',
    pinyinReveal: 'Xiàng qián yìzhí zǒu, dào le lùkǒu xiàng zuǒ guǎi.'
  },
  {
    id: 'ld-3',
    audioPrompt: '太贵了！八十块可以吗？便宜一点吧！',
    question: 'What is the speaker trying to do?',
    options: ['Bargain the price down to 80 kuai', 'Order 80 plates of food', 'Ask where the bank is', 'Compliment the seller'],
    correctAnswer: 'Bargain the price down to 80 kuai',
    explanation: '太贵了 (too expensive) + 八十块可以吗 (is 80 okay) + 便宜一点吧 (make it cheaper).',
    hanziReveal: '太贵了！八十块可以吗？便宜一点吧！',
    pinyinReveal: 'Tài guì le! Bāshí kuài kěyǐ ma? Piányi yìdiǎn ba!'
  },
  {
    id: 'ld-4',
    audioPrompt: '昨天我去了超市，明天我会去见朋友。',
    question: 'When will the speaker meet their friend?',
    options: ['Tomorrow', 'Yesterday', 'Today', 'Next week'],
    correctAnswer: 'Tomorrow',
    explanation: '明天 (míngtiān = tomorrow) + 我会去见朋友 (I will go meet friends).',
    hanziReveal: '昨天我去了超市，明天我会去见朋友。',
    pinyinReveal: 'Zuótiān wǒ qù le chāoshì, míngtiān wǒ huì qù jiàn péngyou.'
  },
  {
    id: 'ld-5',
    audioPrompt: '这家餐厅又好吃又便宜，我很喜欢！',
    question: 'Why does the speaker like this restaurant?',
    options: ['It is both delicious and cheap', 'It is very close to their home', 'They have free wifi', 'It has live music'],
    correctAnswer: 'It is both delicious and cheap',
    explanation: '又好吃又便宜 = both delicious and cheap.',
    hanziReveal: '这家餐厅又好吃又便宜，我很喜欢！',
    pinyinReveal: 'Zhè jiā cāntīng yòu hǎochī yòu piányi, wǒ hěn xǐhuan!'
  }
];

export const ListeningLab: React.FC = () => {
  const { addXP } = useApp();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [scoreCount, setScoreCount] = useState<number>(0);

  const drill = LISTENING_DRILLS[currentIndex];
  const isCorrect = selectedOption === drill.correctAnswer;

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    if (isCorrect) {
      setScoreCount(prev => prev + 1);
      addXP(15);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    if (currentIndex < LISTENING_DRILLS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all
      setCurrentIndex(0);
      setScoreCount(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-6 animate-fade-in pb-24 xl:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* Header */}
      <div>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
          Listening Comprehension
        </span>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
          Mandarin Listening Lab
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Train your ear to decode spoken Mandarin at normal native speed and 0.75x slow speed.
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
        <span>Drill {currentIndex + 1} of {LISTENING_DRILLS.length}</span>
        <span>Score: {scoreCount} / {LISTENING_DRILLS.length}</span>
      </div>

      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / LISTENING_DRILLS.length) * 100}%` }}
        />
      </div>

      {/* Main Listening Card */}
      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        
        {/* Audio Player Hub */}
        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-3 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-md">
            <Headphones size={32} />
          </div>

          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
            Listen carefully to the native spoken phrase:
          </h3>

          <div className="flex items-center gap-3">
            <AudioButton text={drill.audioPrompt} size="lg" label="Play Audio" />
          </div>
          <span className="text-[11px] text-slate-400">
            Use the snail button to hear slower 0.75x articulation if needed.
          </span>
        </div>

        {/* Question */}
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            {drill.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {drill.options.map((opt, i) => {
            const isSelected = selectedOption === opt;
            return (
              <button
                key={i}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(opt)}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-semibold flex items-center justify-between ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{opt}</span>
                {isSelected && <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />}
              </button>
            );
          })}
        </div>

        {/* Result & Transcript Reveal */}
        {isSubmitted && (
          <div
            className={`p-5 rounded-2xl border text-sm animate-scale-up space-y-3 ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200'
                : 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {isCorrect ? (
                <>
                  <CheckCircle2 size={20} className="text-emerald-600" />
                  听得真准！Accurate Listening! (+15 XP)
                </>
              ) : (
                <>
                  <AlertCircle size={20} className="text-red-600" />
                  Incorrect! Review the spoken transcript below:
                </>
              )}
            </div>

            {/* Spoken Transcript Reveal */}
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white space-y-0.5">
              <div className="text-base font-chinese font-bold">
                {drill.hanziReveal}
              </div>
              <div className="text-xs font-semibold text-red-600 dark:text-red-400">
                {drill.pinyinReveal}
              </div>
            </div>

            <p className="text-xs opacity-90">{drill.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="pt-2 flex justify-end">
          {!isSubmitted ? (
            <button
              disabled={!selectedOption}
              onClick={handleSubmit}
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md disabled:opacity-40"
            >
              Confirm Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm shadow-md"
            >
              <span>{currentIndex < LISTENING_DRILLS.length - 1 ? 'Next Drill' : 'Restart Drills'}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
