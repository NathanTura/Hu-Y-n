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
  ChevronRight,
  Flame,
  Lightbulb,
  Compass
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
    { level: 1, title: 'Level 1: Absolute Beginner', subtitle: 'Tones, Pinyin, Greetings, Numbers & Basic Grammar', tag: 'A1 Foundations' },
    { level: 2, title: 'Level 2: Everyday Conversations', subtitle: 'Ordering Boba, Bargaining, Asking Directions & Hobbies', tag: 'A2 Practical' },
    { level: 3, title: 'Level 3: Building Real Sentences', subtitle: 'Time Expressions, Opinions, Plans, Descriptions & Slang', tag: 'B1 Fluent Sentences' },
    { level: 4, title: 'Level 4: Conversational Fluency', subtitle: 'Complex Connectors, Storytelling, Clarifications & Roleplay', tag: 'B2 Spoken Mastery' },
  ];

  const currentLevelLessons = LESSONS.filter(l => l.level === selectedLevel);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 animate-fade-in pb-24 xl:pb-12">
      
      {/* ReactBits Style Hero Banner with Ambient Glow & Floating Seals */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600/95 via-rose-700/90 to-amber-600/95 text-white shadow-2xl p-6 sm:p-10 border border-white/10">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-red-500/30 rounded-full blur-3xl pointer-events-none" />

        {/* Large Decorative Chinese Calligraphy Watermark */}
        <div className="absolute -right-6 -bottom-8 select-none opacity-10 font-chinese text-8xl sm:text-9xl font-black pointer-events-none tracking-widest">
          学汉语
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-amber-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-amber-300" />
            <span>100% Free • Interactive Speech • Zero Paywalls</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Speak Mandarin Chinese Confidently.
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Prioritize speaking out loud, native listening comprehension, and conversational fluency with interactive Web Speech feedback, tone training, and spaced repetition.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => startLesson(nextLesson.id)}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-extrabold text-sm shadow-xl hover:bg-amber-50 active:scale-95 transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={13} className="fill-white translate-x-0.5" />
              </div>
              <span>
                {progress.completedLessonIds.includes(nextLesson.id) 
                  ? 'Review Latest Lesson' 
                  : `Continue: ${nextLesson.title}`}
              </span>
            </button>

            <button
              onClick={openDailyPractice}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-black/30 hover:bg-black/40 text-white font-bold text-sm backdrop-blur-md border border-white/20 active:scale-95 transition-all"
            >
              <Sparkles size={16} className="text-amber-300" />
              <span>Daily 10m Session</span>
            </button>
          </div>
        </div>

        {/* Hero Progress Metrics Pill Grid */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/95">
          <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black flex items-center gap-1.5">
              <span>{progress.streak}</span>
              <span className="text-sm font-semibold opacity-80">Days</span>
            </div>
            <div className="text-xs text-amber-200 font-semibold mt-0.5">Daily Streak 🔥</div>
          </div>
          <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black">
              {totalCompleted} <span className="text-sm font-semibold opacity-70">/ {LESSONS.length}</span>
            </div>
            <div className="text-xs text-amber-200 font-semibold mt-0.5">Lessons Mastered ✅</div>
          </div>
          <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black text-amber-300">{progress.xp}</div>
            <div className="text-xs text-amber-200 font-semibold mt-0.5">Total XP Earned ⚡</div>
          </div>
          <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black">{progressPercent}%</div>
            <div className="text-xs text-amber-200 font-semibold mt-0.5">Course Progress 🚀</div>
          </div>
        </div>
      </div>

      {/* ReactBits Spotlight Cards: 4 Interactive Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Tones & Speaking */}
        <div 
          onClick={() => setActiveView('pronunciation')}
          className="group p-5 rounded-3xl bg-slate-900/80 border border-white/[0.08] hover:border-red-500/50 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer transition-all duration-200"
        >
          <div className="w-12 h-12 rounded-2xl bg-red-500/15 text-red-400 border border-red-500/25 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
            <Mic size={22} />
          </div>
          <h3 className="font-bold text-slate-100 text-base flex items-center justify-between">
            Tones & Speaking
            <ArrowRight size={16} className="text-slate-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Visual pitch curves, tone sandhi rules, and speech recognition testing.
          </p>
        </div>

        {/* Conversation Simulator */}
        <div 
          onClick={() => startConversation()}
          className="group p-5 rounded-3xl bg-slate-900/80 border border-white/[0.08] hover:border-amber-500/50 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer transition-all duration-200"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/25 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
            <MessageSquare size={22} />
          </div>
          <h3 className="font-bold text-slate-100 text-base flex items-center justify-between">
            Conversation Simulator
            <ArrowRight size={16} className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Branching dialogues: boba ordering, night market bargaining, directions.
          </p>
        </div>

        {/* Listening Lab */}
        <div 
          onClick={() => setActiveView('listening')}
          className="group p-5 rounded-3xl bg-slate-900/80 border border-white/[0.08] hover:border-emerald-500/50 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer transition-all duration-200"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
            <Headphones size={22} />
          </div>
          <h3 className="font-bold text-slate-100 text-base flex items-center justify-between">
            Listening Lab
            <ArrowRight size={16} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Native audio comprehension drills at normal (1.0x) and slow (0.75x) speeds.
          </p>
        </div>

        {/* Spaced Review (SRS) */}
        <div 
          onClick={() => setActiveView('review')}
          className="group p-5 rounded-3xl bg-slate-900/80 border border-white/[0.08] hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer transition-all duration-200 relative overflow-hidden"
        >
          {dueWords.length > 0 && (
            <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-black">
              {dueWords.length} due
            </span>
          )}
          <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/25 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
            <Layers size={22} />
          </div>
          <h3 className="font-bold text-slate-100 text-base flex items-center justify-between">
            SRS Vocab Review
            <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Flashcards, tone ID drills, and sentence unscramblers.
          </p>
        </div>
      </div>

      {/* Main Roadmap Section */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-100 tracking-tight">
              Learning Roadmap & Lessons
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Structured progressive modules designed for spoken communication.
            </p>
          </div>

          {/* Level Switcher Floating Pill Bar */}
          <div className="flex p-1 bg-slate-900/90 rounded-2xl border border-white/[0.08] self-start">
            {[1, 2, 3, 4].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Level {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Level Header Capsule */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 mr-2">
              {levelInfo[selectedLevel - 1].tag}
            </span>
            <span className="font-bold text-slate-200 text-sm">
              {levelInfo[selectedLevel - 1].title}
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              {levelInfo[selectedLevel - 1].subtitle}
            </p>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {currentLevelLessons.map((lesson) => {
            const isCompleted = progress.completedLessonIds.includes(lesson.id);
            const isCurrent = lesson.id === nextLesson.id;

            return (
              <div
                key={lesson.id}
                onClick={() => startLesson(lesson.id)}
                className={`group relative p-6 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-slate-900/70 border-emerald-500/30 hover:border-emerald-500/60 hover:bg-slate-800/80'
                    : isCurrent
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-red-950/30 border-red-500/60 shadow-lg shadow-red-500/10 ring-2 ring-red-500/20'
                    : 'bg-slate-900/70 border-white/[0.08] hover:border-white/20 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/[0.06] text-slate-300">
                      Lesson {lesson.order}
                    </span>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle2 size={12} /> Completed
                      </span>
                    ) : isCurrent ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 bg-red-500/15 px-2.5 py-0.5 rounded-full border border-red-500/30 animate-pulse">
                        <Zap size={12} /> Up Next
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-500">
                        {lesson.durationMin} mins
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-slate-100 text-lg leading-snug group-hover:text-red-400 transition-colors">
                    {lesson.title}
                  </h3>

                  <div className="font-chinese font-semibold text-slate-400 text-sm mt-0.5">
                    {lesson.chineseTitle}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {lesson.subtitle}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {lesson.durationMin}m
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Zap size={13} /> +{lesson.xpReward} XP
                    </span>
                  </div>

                  <button
                    className={`px-3.5 py-1.5 rounded-xl font-bold text-xs inline-flex items-center gap-1 transition-all ${
                      isCompleted
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : isCurrent
                        ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                        : 'bg-white/[0.08] text-slate-300 hover:bg-white/[0.12] hover:text-white'
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
      <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4 text-amber-200">
        <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0">
          <Lightbulb size={24} />
        </div>
        <div>
          <h4 className="font-bold text-amber-300 text-base">
            Language Learning Insight: Tones Are Muscle Memory
          </h4>
          <p className="text-xs sm:text-sm text-amber-200/80 mt-1 leading-relaxed">
            Native Mandarin speakers don't analyze tone numbers consciously—they feel the pitch in their throat and musical cadence. When learning a new word, speak it out loud 5 times at full volume with an exaggerated pitch curve!
          </p>
        </div>
      </div>
    </div>
  );
};
