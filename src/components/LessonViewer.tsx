import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Zap, 
  BookOpen, 
  MessageSquare, 
  Mic, 
  Check, 
  RotateCcw,
  Clock,
  HelpCircle
} from 'lucide-react';
import { LESSONS } from '../data/lessons';
import { useApp } from '../context/AppContext';
import { AudioButton } from './AudioButton';
import { SpeechMicButton } from './SpeechMicButton';
import { Exercise } from '../types';

export const LessonViewer: React.FC = () => {
  const { currentLessonId, setActiveView, startLesson, completeLesson, addXP, progress } = useApp();

  const lesson = LESSONS.find(l => l.id === currentLessonId) || LESSONS[0];
  const nextLesson = LESSONS.find(l => l.order === lesson.order + 1);

  // Stepper state:
  // 0: Intro & Cultural Note
  // 1: Vocabulary Bank
  // 2: Realistic Dialogue
  // 3: Pronunciation Focus
  // 4: Interactive Exercises
  // 5: Speaking Challenge
  // 6: Summary & Completion
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Interactive Exercises State
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [orderedChips, setOrderedChips] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  // Speaking challenge state
  const [speakingPassed, setSpeakingPassed] = useState<boolean>(false);

  const totalSteps = 7;
  const currentExercise: Exercise | undefined = lesson.exercises[exerciseIndex];

  // Navigation handlers
  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Exercise Handlers
  const handleCheckAnswer = () => {
    if (!currentExercise) return;

    let correct = false;
    if (currentExercise.type === 'sentence-order') {
      const target = currentExercise.correctAnswer as string[];
      correct = orderedChips.length === target.length && 
        orderedChips.every((chip, i) => chip === target[i]);
    } else {
      correct = selectedAnswer === currentExercise.correctAnswer;
    }

    setIsAnswerChecked(true);
    setIsAnswerCorrect(correct);

    if (correct) {
      addXP(10);
    }
  };

  const handleNextExercise = () => {
    setSelectedAnswer(null);
    setOrderedChips([]);
    setIsAnswerChecked(false);
    setIsAnswerCorrect(false);

    if (exerciseIndex < lesson.exercises.length - 1) {
      setExerciseIndex(prev => prev + 1);
    } else {
      // Completed all exercises, proceed to speaking challenge
      setCurrentStep(5);
    }
  };

  const handleChipClick = (chip: string) => {
    if (orderedChips.includes(chip)) {
      setOrderedChips(orderedChips.filter(c => c !== chip));
    } else {
      setOrderedChips([...orderedChips, chip]);
    }
  };

  const handleFinishLesson = () => {
    completeLesson(lesson.id, lesson.xpReward);
    if (nextLesson) {
      startLesson(nextLesson.id);
      setCurrentStep(0);
      setExerciseIndex(0);
      setSelectedAnswer(null);
      setOrderedChips([]);
      setIsAnswerChecked(false);
      setSpeakingPassed(false);
    } else {
      setActiveView('dashboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8 animate-fade-in space-y-4 sm:space-y-6 pb-24 xl:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* Top Header & Back */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveView('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Roadmap</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400">
            Level {lesson.level} • Lesson {lesson.order}
          </span>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <Zap size={14} /> +{lesson.xpReward} XP
          </span>
        </div>
      </div>

      {/* Lesson Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300 rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step Indicator Tabs */}
      <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider overflow-x-auto pb-1">
        <span className={currentStep === 0 ? 'text-red-600 dark:text-red-400' : ''}>1. Overview</span>
        <span className={currentStep === 1 ? 'text-red-600 dark:text-red-400' : ''}>2. Vocab</span>
        <span className={currentStep === 2 ? 'text-red-600 dark:text-red-400' : ''}>3. Dialogue</span>
        <span className={currentStep === 3 ? 'text-red-600 dark:text-red-400' : ''}>4. Tones</span>
        <span className={currentStep === 4 ? 'text-red-600 dark:text-red-400' : ''}>5. Exercises</span>
        <span className={currentStep === 5 ? 'text-red-600 dark:text-red-400' : ''}>6. Speaking</span>
        <span className={currentStep === 6 ? 'text-red-600 dark:text-red-400' : ''}>7. Summary</span>
      </div>

      {/* ==================================================== */}
      {/* STEP 0: OVERVIEW & GRAMMAR RULE */}
      {/* ==================================================== */}
      {currentStep === 0 && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div>
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              Lesson {lesson.order}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {lesson.title}
            </h1>
            <div className="font-chinese text-base font-semibold text-slate-500 dark:text-slate-400">
              {lesson.chineseTitle}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {lesson.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center gap-2">
              <BookOpen size={16} className="text-red-600" />
              Lesson Explanation
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {lesson.intro.overview}
            </p>
          </div>

          {lesson.intro.grammarRule && (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50">
              <h3 className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1.5 flex items-center gap-2">
                <Sparkles size={16} className="text-amber-600" />
                Spoken Grammar Rule
              </h3>
              <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed">
                {lesson.intro.grammarRule}
              </p>
            </div>
          )}

          {lesson.intro.culturalNote && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50">
              <h3 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm mb-1.5 flex items-center gap-2">
                <HelpCircle size={16} className="text-emerald-600" />
                Cultural Fluency Note
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-300/90 leading-relaxed">
                {lesson.intro.culturalNote}
              </p>
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleNextStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md transition-all"
            >
              <span>Learn New Vocabulary</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* STEP 1: VOCABULARY BANK */}
      {/* ==================================================== */}
      {currentStep === 1 && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Target Vocabulary
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Click the audio buttons to hear normal and slow native pronunciation. Speak each word out loud!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lesson.vocabulary.map((word) => (
              <div
                key={word.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40 flex flex-col justify-between hover:border-red-300 dark:hover:border-red-800 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {word.category}
                    </span>
                    <AudioButton text={word.hanzi} size="sm" />
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-chinese">
                      {word.hanzi}
                    </span>
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                      {word.pinyin}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {word.english}
                  </p>
                </div>

                {word.exampleHanzi && (
                  <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800 text-xs">
                    <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                      <span className="font-chinese font-semibold text-slate-800 dark:text-slate-200">
                        {word.exampleHanzi}
                      </span>
                      <AudioButton text={word.exampleHanzi} size="sm" showSlowOption={false} />
                    </div>
                    <div className="text-[11px] text-red-500 font-medium">
                      {word.examplePinyin}
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      {word.exampleEnglish}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={handlePrevStep}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md"
            >
              <span>See Realistic Dialogue</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* STEP 2: REALISTIC CONVERSATION */}
      {/* ==================================================== */}
      {currentStep === 2 && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Spoken Dialogue in Context
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Listen to how native speakers use these words in natural, flowing conversation.
            </p>
          </div>

          <div className="space-y-4">
            {lesson.conversationSample?.map((turn, idx) => (
              <div
                key={idx}
                className={`flex gap-3 p-4 rounded-2xl border ${
                  turn.speaker === 'user'
                    ? 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/60 ml-4 sm:ml-8'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 mr-4 sm:mr-8'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                  {turn.speaker === 'user' ? '🧑' : '🇨🇳'}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {turn.name}
                    </span>
                    <AudioButton text={turn.audioText || turn.hanzi} size="sm" />
                  </div>

                  <div className="font-chinese font-bold text-lg text-slate-900 dark:text-white">
                    {turn.hanzi}
                  </div>

                  <div className="text-xs font-semibold text-red-600 dark:text-red-400">
                    {turn.pinyin}
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    {turn.english}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={handlePrevStep}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md"
            >
              <span>Pronunciation & Tones</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* STEP 3: PRONUNCIATION FOCUS */}
      {/* ==================================================== */}
      {currentStep === 3 && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Sound Mastery
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {lesson.pronunciationFocus?.title || 'Tone & Phonetic Drill'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
              {lesson.pronunciationFocus?.pinyinRule}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lesson.pronunciationFocus?.targetWords.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black font-chinese text-slate-900 dark:text-white">
                      {item.hanzi}
                    </span>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">
                      {item.pinyin}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.english}</div>
                  <div className="text-xs text-amber-700 dark:text-amber-400 font-medium mt-1">
                    💡 {item.toneTip}
                  </div>
                </div>

                <AudioButton text={item.hanzi} size="md" />
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={handlePrevStep}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md"
            >
              <span>Interactive Quizzes ({lesson.exercises.length})</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* STEP 4: INTERACTIVE EXERCISES */}
      {/* ==================================================== */}
      {currentStep === 4 && currentExercise && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Exercise {exerciseIndex + 1} of {lesson.exercises.length}
            </span>
            <span className="text-xs text-slate-400 font-semibold">
              Type: {currentExercise.type.replace('-', ' ')}
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              {currentExercise.prompt}
            </h2>

            {currentExercise.audioText && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60">
                <AudioButton text={currentExercise.audioText} size="lg" />
                <span className="text-xs text-red-700 dark:text-red-300 font-medium">
                  Click to listen to the audio prompt at normal and slow speeds.
                </span>
              </div>
            )}
          </div>

          {/* Exercise Types Rendering */}
          {/* Sentence Order Chips */}
          {currentExercise.type === 'sentence-order' && (
            <div className="space-y-4">
              <div className="min-h-16 p-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 flex flex-wrap gap-2 items-center">
                {orderedChips.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">
                    Click the chips below to build the sentence in order...
                  </span>
                ) : (
                  orderedChips.map((chip, i) => (
                    <button
                      key={i}
                      onClick={() => handleChipClick(chip)}
                      className="px-3.5 py-2 rounded-xl bg-red-600 text-white font-chinese font-bold text-base shadow-sm hover:bg-red-700 transition-all"
                    >
                      {chip}
                    </button>
                  ))
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {currentExercise.options?.map((chip, i) => {
                  const isUsed = orderedChips.includes(chip);
                  return (
                    <button
                      key={i}
                      disabled={isUsed || isAnswerChecked}
                      onClick={() => handleChipClick(chip)}
                      className={`px-4 py-2.5 rounded-xl font-chinese font-bold text-base border transition-all ${
                        isUsed
                          ? 'opacity-30 bg-slate-200 border-slate-300 cursor-not-allowed'
                          : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-red-500 shadow-sm'
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Multiple Choice & Listening & Fill in Blank */}
          {(currentExercise.type === 'multiple-choice' || 
            currentExercise.type === 'listening-choice' || 
            currentExercise.type === 'fill-in-blank') && (
            <div className="space-y-3">
              {currentExercise.options?.map((opt, i) => {
                const isSelected = selectedAnswer === opt;
                return (
                  <button
                    key={i}
                    disabled={isAnswerChecked}
                    onClick={() => setSelectedAnswer(opt)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-semibold flex items-center justify-between ${
                      isSelected
                        ? 'border-red-600 bg-red-50 text-red-900 dark:bg-red-950/50 dark:text-red-200 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <Check size={18} className="text-red-600 dark:text-red-400" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* Feedback & Result Card */}
          {isAnswerChecked && (
            <div
              className={`p-4 rounded-2xl border text-sm animate-scale-up ${
                isAnswerCorrect
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200'
                  : 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold mb-1">
                {isAnswerCorrect ? (
                  <>
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    太棒了！Correct! (+10 XP)
                  </>
                ) : (
                  <>
                    <AlertCircle size={18} className="text-red-600" />
                    Not quite!
                  </>
                )}
              </div>
              <p className="text-xs leading-relaxed opacity-90">
                {currentExercise.explanation}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => {
                if (exerciseIndex > 0) {
                  setExerciseIndex(prev => prev - 1);
                  setIsAnswerChecked(false);
                } else {
                  setCurrentStep(3);
                }
              }}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-100"
            >
              Previous
            </button>

            {!isAnswerChecked ? (
              <button
                disabled={
                  (currentExercise.type === 'sentence-order' && orderedChips.length === 0) ||
                  (currentExercise.type !== 'sentence-order' && !selectedAnswer)
                }
                onClick={handleCheckAnswer}
                className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNextExercise}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md"
              >
                <span>{exerciseIndex < lesson.exercises.length - 1 ? 'Next Question' : 'Go to Speaking Challenge'}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* STEP 5: SPEAKING CHALLENGE */}
      {/* ==================================================== */}
      {currentStep === 5 && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up">
          <div className="text-center max-w-lg mx-auto space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Speaking Challenge
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Speak Out Loud
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Listen to the model phrase, tap the microphone, and say the Chinese phrase clearly!
            </p>
          </div>

          {/* Target Phrase Display Card */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center space-y-3">
            <div className="text-3xl sm:text-4xl font-chinese font-black text-slate-900 dark:text-white tracking-wide">
              {lesson.speakingChallenge.targetHanzi}
            </div>

            <div className="text-base sm:text-lg font-bold text-red-600 dark:text-red-400">
              {lesson.speakingChallenge.targetPinyin}
            </div>

            <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
              "{lesson.speakingChallenge.targetEnglish}"
            </div>

            <div className="pt-2">
              <AudioButton text={lesson.speakingChallenge.targetHanzi} size="lg" />
            </div>

            <div className="text-xs text-slate-500 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
              <div className="font-semibold text-slate-700 dark:text-slate-300">Phonetic Guide:</div>
              <div>{lesson.speakingChallenge.phoneticGuide}</div>
              <div className="text-amber-600 dark:text-amber-400 mt-1 font-medium">💡 Tip: {lesson.speakingChallenge.tip}</div>
            </div>
          </div>

          {/* Interactive Speech Recognition Component */}
          <div className="pt-2">
            <SpeechMicButton
              targetText={lesson.speakingChallenge.targetHanzi}
              onSuccess={(score) => {
                setSpeakingPassed(true);
                addXP(20);
              }}
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(4)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-md"
            >
              <span>Lesson Summary</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* STEP 6: SUMMARY & LESSON COMPLETION */}
      {/* ==================================================== */}
      {currentStep === 6 && (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 animate-scale-up text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
            <Sparkles size={32} />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Lesson Complete! 太棒了！
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              You earned <span className="font-bold text-amber-600 dark:text-amber-400">+{lesson.xpReward} XP</span> and practiced speaking Mandarin!
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-left max-w-lg mx-auto space-y-2">
            <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
              What You Learned Today:
            </div>
            {lesson.summary.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleFinishLesson}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-extrabold text-sm shadow-lg hover:brightness-105 active:scale-95 transition-all"
            >
              <span>{nextLesson ? `Continue to Lesson ${nextLesson.order}` : 'Finish to Dashboard'}</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setActiveView('conversation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-200 transition-all"
            >
              <MessageSquare size={16} />
              <span>Practice in Conversation Simulator</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
