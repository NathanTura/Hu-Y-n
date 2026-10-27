import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Sparkles, 
  MessageSquare, 
  Mic, 
  Layers, 
  ArrowRight,
  Headphones,
  Award,
  ChevronRight,
  Flame,
  Lightbulb
} from 'lucide-react';
import { LESSONS } from '../data/lessons';
import { useApp } from '../context/AppContext';
import { getDueWords } from '../utils/srs';

export const Dashboard: React.FC = () => {
  const { 
    progress, 
    startLesson, 
    startConversation, 
    setActiveView, 
    openDailyPractice 
  } = useApp();

  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  // Find next uncompleted lesson
  const nextLesson = LESSONS.find(l => !progress.completedLessonIds.includes(l.id)) || LESSONS[0];
  const dueWords = getDueWords(progress.vocabSRS);
  const totalCompleted = progress.completedLessonIds.length;
  const progressPercent = Math.round((totalCompleted / LESSONS.length) * 100);

  const levelInfo = [
    { level: 1, title: 'Level 1: Absolute Beginner', subtitle: 'Tones, Pinyin, Greetings, Numbers & Basic Grammar', tag: 'A1 Beginner' },
    { level: 2, title: 'Level 2: Everyday Conversations', subtitle: 'Ordering Boba, Bargaining, Asking Directions & Hobbies', tag: 'A2 Elementary' },
    { level: 3, title: 'Level 3: Building Real Sentences', subtitle: 'Time Expressions, Opinions, Plans, Descriptions & Slang', tag: 'B1 Intermediate' },
    { level: 4, title: 'Level 4: Conversational Fluency', subtitle: 'Complex Connectors, Storytelling, Clarifications & Roleplay', tag: 'B2 Fluency' },
  ];

  const currentLevelLessons = LESSONS.filter(l => l.level === selectedLevel);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Hero Learning Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 text-white shadow-xl p-6 sm:p-10">
        {/* Background decorative watermark */}
        <div className="absolute -right-8 -bottom-10 select-none opacity-10 font-chinese text-9xl font-black pointer-events-none">
          学汉语
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>100% Free • No Subscriptions • Natural Mandarin</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Speak Mandarin Chinese Confidently.
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Prioritize speaking out loud, native listening comprehension, and conversational fluency with interactive Web Speech feedback, tone training, and spaced repetition.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => startLesson(nextLesson.id)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-red-600 font-extrabold text-sm shadow-lg hover:bg-amber-50 active:scale-95 transition-all"
            >
              <Play size={18} className="fill-red-600" />
              <span>
                {progress.completedLessonIds.includes(nextLesson.id) 
                  ? 'Review Latest Lesson' 
                  : `Continue: ${nextLesson.title}`}
              </span>
            </button>

            <button
              onClick={openDailyPractice}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              <Sparkles size={16} />
              <span>Start 10-Min Daily Session</span>
            </button>
          </div>
        </div>

        {/* Quick progress pill stats at bottom */}
        <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/95">
          <div>
            <div className="text-2xl font-black">{progress.streak} <span className="text-sm font-normal opacity-80">Days</span></div>
            <div className="text-xs text-amber-200 font-medium">Daily Streak 🔥</div>
          </div>
          <div>
            <div className="text-2xl font-black">{totalCompleted} / {LESSONS.length}</div>
            <div className="text-xs text-amber-200 font-medium">Lessons Mastered</div>
          </div>
          <div>
            <div className="text-2xl font-black">{progress.xp}</div>
            <div className="text-xs text-amber-200 font-medium">Total XP Earned ⚡</div>
          </div>
          <div>
            <div className="text-2xl font-black">{progressPercent}%</div>
            <div className="text-xs text-amber-200 font-medium">Curriculum Progress</div>
          </div>
        </div>
      </div>

      {/* Quick Action Hub: 4 Interactive Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pronunciation & Tones */}
        <div 
          onClick={() => setActiveView('pronunciation')}
          className="group p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-red-400 hover:shadow-md cursor-pointer transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Mic size={24} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center justify-between">
            Tones & Speaking
            <ArrowRight size={16} className="text-slate-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Visual pitch curves, tone sandhi rules, and speech recognition testing.
          </p>
        </div>

        {/* Conversation Simulator */}
        <div 
          onClick={() => startConversation()}
          className="group p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:shadow-md cursor-pointer transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <MessageSquare size={24} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center justify-between">
            Conversation Simulator
            <ArrowRight size={16} className="text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Branching dialogues: boba ordering, night market bargaining, directions.
          </p>
        </div>

        {/* Listening Lab */}
        <div 
          onClick={() => setActiveView('listening')}
          className="group p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Headphones size={24} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center justify-between">
            Listening Lab
            <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Native audio comprehension drills at normal (1.0x) and slow (0.75x) speeds.
          </p>
        </div>

        {/* Spaced Review (SRS) */}
        <div 
          onClick={() => setActiveView('review')}
          className="group p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:shadow-md cursor-pointer transition-all relative overflow-hidden"
        >
          {dueWords.length > 0 && (
            <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-red-500 text-white text-[11px] font-bold">
              {dueWords.length} due
            </span>
          )}
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Layers size={24} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center justify-between">
            SRS Vocab Review
            <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Flashcards, tone ID drills, and sentence unscramblers.
          </p>
        </div>
      </div>

      {/* Main Roadmap Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Learning Roadmap & Lessons
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Structured progressive modules designed for spoken communication.
            </p>
          </div>

          {/* Level Switcher Tabs */}
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            {[1, 2, 3, 4].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Level {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Level Header */}
        <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 mr-2">
              {levelInfo[selectedLevel - 1].tag}
            </span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {levelInfo[selectedLevel - 1].title}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {levelInfo[selectedLevel - 1].subtitle}
            </p>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentLevelLessons.map((lesson) => {
            const isCompleted = progress.completedLessonIds.includes(lesson.id);
            const isCurrent = lesson.id === nextLesson.id;

            return (
              <div
                key={lesson.id}
                onClick={() => startLesson(lesson.id)}
                className={`group relative p-6 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-white dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800/60 hover:shadow-md'
                    : isCurrent
                    ? 'bg-gradient-to-b from-white to-red-50/30 dark:from-slate-800 dark:to-red-950/20 border-red-300 dark:border-red-800/80 shadow-md ring-2 ring-red-400/30'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      Lesson {lesson.order}
                    </span>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 size={13} /> Completed
                      </span>
                    ) : isCurrent ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800 animate-pulse">
                        <Zap size={13} /> Up Next
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-400">
                        {lesson.durationMin} mins
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {lesson.title}
                  </h3>

                  <div className="font-chinese font-semibold text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                    {lesson.chineseTitle}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {lesson.subtitle}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {lesson.durationMin}m
                    </span>
                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={13} /> +{lesson.xpReward} XP
                    </span>
                  </div>

                  <button
                    className={`px-3.5 py-1.5 rounded-xl font-bold text-xs inline-flex items-center gap-1 transition-all ${
                      isCompleted
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200'
                        : isCurrent
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
                        : 'bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-600 dark:bg-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {isCompleted ? 'Review' : 'Start'}
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cultural Wisdom Card */}
      <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0">
          <Lightbulb size={24} />
        </div>
        <div>
          <h4 className="font-bold text-amber-900 dark:text-amber-200 text-base">
            Language Learning Insight: Tones Are Muscle Memory
          </h4>
          <p className="text-xs sm:text-sm text-amber-800/90 dark:text-amber-300/80 mt-1 leading-relaxed">
            Native Mandarin speakers don't analyze tone numbers consciously—they feel the pitch in their throat and musical cadence. When learning a new word, speak it out loud 5 times at full volume with an exaggerated pitch curve!
          </p>
        </div>
      </div>
    </div>
  );
};
