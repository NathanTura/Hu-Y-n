import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Headphones, 
  ArrowRight,
  Zap,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getDueWords } from '../utils/srs';
import { VocabWord } from '../types';
import { AudioButton } from './AudioButton';

export const ReviewCenter: React.FC = () => {
  const { progress, reviewWord, addXP, triggerCelebration } = useApp();

  const [activeReviewMode, setActiveReviewMode] = useState<'flashcards' | 'listening' | 'tone-id' | 'scramble'>('flashcards');

  // Flashcards state
  const dueWords = getDueWords(progress.vocabSRS);
  const wordsToReview = dueWords.length > 0 ? dueWords : Object.values(progress.vocabSRS).slice(0, 15);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Listening quiz state
  const [listeningIndex, setListeningIndex] = useState<number>(0);
  const [listeningSelected, setListeningSelected] = useState<string | null>(null);
  const [listeningChecked, setListeningChecked] = useState<boolean>(false);

  // Tone ID quiz state
  const [toneIndex, setToneIndex] = useState<number>(0);
  const [toneSelected, setToneSelected] = useState<number | null>(null);
  const [toneChecked, setToneChecked] = useState<boolean>(false);

  // Current cards
  const currentCard: VocabWord | undefined = wordsToReview[cardIndex % wordsToReview.length];

  // Flashcard Rating Handler
  const handleRateCard = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;
    reviewWord(currentCard, rating);
    setIsFlipped(false);
    if (cardIndex < wordsToReview.length - 1) {
      setCardIndex(prev => prev + 1);
    } else {
      triggerCelebration();
      setCardIndex(0);
    }
  };

  // Generate 4 multiple choice options for listening quiz
  const allVocabList = Object.values(progress.vocabSRS);
  const currentListeningWord = allVocabList[listeningIndex % allVocabList.length];
  const listeningDistractors = allVocabList
    .filter(w => w.id !== currentListeningWord?.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.english);

  const listeningOptions = [currentListeningWord?.english, ...listeningDistractors].sort();

  // Tone ID syllable pool
  const tonePool = [
    { syllable: 'mā', tone: 1, hanzi: '妈' },
    { syllable: 'má', tone: 2, hanzi: '麻' },
    { syllable: 'mǎ', tone: 3, hanzi: '马' },
    { syllable: 'mà', tone: 4, hanzi: '骂' },
    { syllable: 'bā', tone: 1, hanzi: '八' },
    { syllable: 'bá', tone: 2, hanzi: '拔' },
    { syllable: 'bǎ', tone: 3, hanzi: '把' },
    { syllable: 'bà', tone: 4, hanzi: '爸' },
    { syllable: 'shī', tone: 1, hanzi: '师' },
    { syllable: 'shí', tone: 2, hanzi: '十' },
    { syllable: 'shǐ', tone: 3, hanzi: '使' },
    { syllable: 'shì', tone: 4, hanzi: '是' },
  ];
  const currentToneItem = tonePool[toneIndex % tonePool.length];

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-6 animate-fade-in pb-24 xl:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400">
            Active Recall & SRS
          </span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            Spaced Repetition Practice Center
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Review difficult items more frequently and solidify conversational reflexes.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 self-start">
          <button
            onClick={() => setActiveReviewMode('flashcards')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeReviewMode === 'flashcards'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setActiveReviewMode('listening')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeReviewMode === 'listening'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Listening Quiz
          </button>
          <button
            onClick={() => setActiveReviewMode('tone-id')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeReviewMode === 'tone-id'
                ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Tone ID
          </button>
        </div>
      </div>

      {/* ==================================================== */}
      {/* MODE 1: SMART FLASHCARDS WITH SRS INTERVALS */}
      {/* ==================================================== */}
      {activeReviewMode === 'flashcards' && currentCard && (
        <div className="space-y-6 animate-scale-up">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Card {cardIndex + 1} of {wordsToReview.length}</span>
            <span className="flex items-center gap-1 text-amber-600">
              <Zap size={14} /> SRS Box {currentCard.srsBox || 1} of 5
            </span>
          </div>

          {/* Flashcard Body */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[320px] p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-md hover:border-red-400 dark:hover:border-red-700 cursor-pointer transition-all flex flex-col items-center justify-center text-center space-y-4 select-none"
          >
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              {currentCard.category || 'Vocabulary'}
            </span>

            {/* Front: Hanzi */}
            <div className="text-6xl sm:text-7xl font-chinese font-black text-slate-900 dark:text-white">
              {currentCard.hanzi}
            </div>

            <div onClick={(e) => e.stopPropagation()}>
              <AudioButton text={currentCard.hanzi} size="lg" />
            </div>

            {/* Flipped: Reveal Pinyin & English */}
            {isFlipped ? (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 w-full max-w-md space-y-2 animate-fade-in">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {currentCard.pinyin}
                </div>
                <div className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  {currentCard.english}
                </div>

                {currentCard.exampleHanzi && (
                  <div className="text-xs text-slate-500 pt-2 italic">
                    "{currentCard.exampleHanzi}" ({currentCard.exampleEnglish})
                  </div>
                )}
              </div>
            ) : (
              <div className="text-xs text-slate-400 font-semibold pt-4">
                Click anywhere to flip and reveal translation...
              </div>
            )}
          </div>

          {/* SRS Grading Buttons */}
          {isFlipped ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in">
              <button
                onClick={() => handleRateCard('again')}
                className="p-3.5 rounded-2xl bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border border-red-200 dark:border-red-800 font-bold text-xs hover:bg-red-100 transition-all"
              >
                <div>Forgot</div>
                <div className="text-[10px] font-normal opacity-80">Reset to 1d</div>
              </button>

              <button
                onClick={() => handleRateCard('hard')}
                className="p-3.5 rounded-2xl bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-bold text-xs hover:bg-amber-100 transition-all"
              >
                <div>Hard</div>
                <div className="text-[10px] font-normal opacity-80">Review in 3d</div>
              </button>

              <button
                onClick={() => handleRateCard('good')}
                className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-all"
              >
                <div>Good</div>
                <div className="text-[10px] font-normal opacity-80">Review in 7d</div>
              </button>

              <button
                onClick={() => handleRateCard('easy')}
                className="p-3.5 rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold text-xs hover:bg-blue-100 transition-all"
              >
                <div>Easy</div>
                <div className="text-[10px] font-normal opacity-80">Master in 14-30d</div>
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setIsFlipped(true)}
                className="px-8 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm shadow-md"
              >
                Reveal Answer
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* MODE 2: LISTENING QUIZ */}
      {/* ==================================================== */}
      {activeReviewMode === 'listening' && currentListeningWord && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Question {listeningIndex + 1}
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Listen to the Chinese word. What does it mean?
            </h2>

            <div className="flex justify-center pt-2">
              <AudioButton text={currentListeningWord.hanzi} size="lg" />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {listeningOptions.map((opt, i) => {
              const isSelected = listeningSelected === opt;
              const isCorrectOpt = opt === currentListeningWord.english;

              let btnClass = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200';
              if (listeningChecked) {
                if (isCorrectOpt) btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 font-bold';
                else if (isSelected) btnClass = 'border-red-500 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200';
              } else if (isSelected) {
                btnClass = 'border-red-600 bg-red-50 text-red-900 dark:bg-red-950/50 dark:text-red-200';
              }

              return (
                <button
                  key={i}
                  disabled={listeningChecked}
                  onClick={() => setListeningSelected(opt)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-semibold flex items-center justify-between ${btnClass}`}
                >
                  <span>{opt}</span>
                  {listeningChecked && isCorrectOpt && <CheckCircle2 size={18} className="text-emerald-600" />}
                </button>
              );
            })}
          </div>

          {listeningChecked && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between animate-fade-in">
              <div>
                <span className="font-chinese font-bold text-lg text-slate-900 dark:text-white">
                  {currentListeningWord.hanzi}
                </span>
                <span className="text-xs font-semibold text-red-600 dark:text-red-400 ml-2">
                  {currentListeningWord.pinyin}
                </span>
              </div>
              <AudioButton text={currentListeningWord.hanzi} size="sm" />
            </div>
          )}

          <div className="flex justify-end pt-2">
            {!listeningChecked ? (
              <button
                disabled={!listeningSelected}
                onClick={() => {
                  setListeningChecked(true);
                  if (listeningSelected === currentListeningWord.english) {
                    addXP(10);
                  }
                }}
                className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md disabled:opacity-40"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={() => {
                  setListeningChecked(false);
                  setListeningSelected(null);
                  setListeningIndex(prev => prev + 1);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md"
              >
                <span>Next Question</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* MODE 3: TONE IDENTIFICATION QUIZ */}
      {/* ==================================================== */}
      {activeReviewMode === 'tone-id' && currentToneItem && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Tone Ear Training
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Listen to the syllable. Which tone was it?
            </h2>
            <p className="text-xs text-slate-500">
              Tone 1 (Flat), Tone 2 (Rising), Tone 3 (Dipping), or Tone 4 (Falling)?
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <AudioButton text={currentToneItem.hanzi} size="lg" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto pt-4">
            {[1, 2, 3, 4].map((t) => {
              const isSelected = toneSelected === t;
              const isCorrectTone = t === currentToneItem.tone;

              let btnClass = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200';
              if (toneChecked) {
                if (isCorrectTone) btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-bold ring-2 ring-emerald-400';
                else if (isSelected) btnClass = 'border-red-500 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200';
              } else if (isSelected) {
                btnClass = 'border-red-600 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200 font-bold';
              }

              return (
                <button
                  key={t}
                  disabled={toneChecked}
                  onClick={() => setToneSelected(t)}
                  className={`p-4 rounded-2xl border transition-all text-sm flex flex-col items-center gap-1 ${btnClass}`}
                >
                  <span className="text-lg font-black">Tone {t}</span>
                  <span className="text-[11px] opacity-75">
                    {t === 1 && 'High Flat'}
                    {t === 2 && 'Rising'}
                    {t === 3 && 'Dipping'}
                    {t === 4 && 'Falling'}
                  </span>
                </button>
              );
            })}
          </div>

          {toneChecked && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 max-w-sm mx-auto animate-fade-in text-xs">
              <span className="text-slate-500">Target Syllable: </span>
              <span className="font-bold text-base text-red-600 dark:text-red-400 font-chinese ml-1">
                {currentToneItem.hanzi} ({currentToneItem.syllable})
              </span>
              <span className="text-slate-500 ml-2">— Tone {currentToneItem.tone}</span>
            </div>
          )}

          <div className="flex justify-center pt-2">
            {!toneChecked ? (
              <button
                disabled={toneSelected === null}
                onClick={() => {
                  setToneChecked(true);
                  if (toneSelected === currentToneItem.tone) {
                    addXP(10);
                  }
                }}
                className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md disabled:opacity-40"
              >
                Check Tone
              </button>
            ) : (
              <button
                onClick={() => {
                  setToneChecked(false);
                  setToneSelected(null);
                  setToneIndex(prev => prev + 1);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md"
              >
                <span>Next Tone Drill</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
