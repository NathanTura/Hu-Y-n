import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Volume2, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Check, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VocabWord } from '../types';
import { AudioButton } from './AudioButton';
import { isWordDue } from '../utils/srs';

export const VocabNotebook: React.FC = () => {
  const { progress, toggleMasteredWord, setActiveView } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'due' | 'learning' | 'mastered'>('all');

  const words = Object.values(progress.vocabSRS);

  // Filter words
  const filteredWords = words.filter(word => {
    // Search match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      word.hanzi.includes(q) || 
      word.pinyin.toLowerCase().includes(q) || 
      word.english.toLowerCase().includes(q) ||
      (word.category && word.category.toLowerCase().includes(q));

    // Level match
    const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;

    // Status match
    let matchesStatus = true;
    if (selectedStatus === 'due') {
      matchesStatus = isWordDue(word);
    } else if (selectedStatus === 'learning') {
      matchesStatus = !word.mastered;
    } else if (selectedStatus === 'mastered') {
      matchesStatus = !!word.mastered;
    }

    return matchesSearch && matchesLevel && matchesStatus;
  });

  const dueCount = words.filter(isWordDue).length;
  const masteredCount = words.filter(w => w.mastered).length;

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-6 animate-fade-in pb-24 xl:pb-12 w-full max-w-full overflow-x-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
            Vocabulary Bank & SRS
          </span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            Vocabulary Notebook
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Personal vocabulary dictionary with audio playback, example sentences, and spaced repetition tracking.
          </p>
        </div>

        {/* Quick Launch SRS Review Button */}
        <button
          onClick={() => setActiveView('review')}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-extrabold text-xs shadow-md hover:brightness-105 active:scale-95 transition-all self-start"
        >
          <Sparkles size={16} />
          <span>Launch SRS Review ({dueCount} Due)</span>
        </button>
      </div>

      {/* Stats Summary Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-black text-slate-900 dark:text-white">{words.length}</div>
          <div className="text-xs text-slate-500">Total Words in Bank</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-black text-red-600 dark:text-red-400">{dueCount}</div>
          <div className="text-xs text-slate-500">Words Due for Review</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{masteredCount}</div>
          <div className="text-xs text-slate-500">Mastered Words (Box 5)</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
            {Math.round((masteredCount / Math.max(1, words.length)) * 100)}%
          </div>
          <div className="text-xs text-slate-500">Mastery Rate</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-3 items-center justify-between">
        
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Hanzi, Pinyin, English..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900 dark:text-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Level Filter */}
          <div className="flex p-0.5 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            {(['all', 1, 2, 3, 4] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  selectedLevel === lvl
                    ? 'bg-white dark:bg-slate-800 text-red-600 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {lvl === 'all' ? 'All Lvls' : `L${lvl}`}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex p-0.5 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            {(['all', 'due', 'learning', 'mastered'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-2.5 py-1 rounded-lg capitalize transition-all ${
                  selectedStatus === st
                    ? 'bg-white dark:bg-slate-800 text-red-600 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map((word) => {
          const isDue = isWordDue(word);
          return (
            <div
              key={word.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                word.mastered
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      Level {word.level}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {word.category}
                    </span>
                  </div>

                  {/* SRS Box indicator */}
                  <div className="flex items-center gap-1" title={`SRS Box ${word.srsBox || 1} of 5`}>
                    {[1, 2, 3, 4, 5].map((box) => (
                      <span
                        key={box}
                        className={`w-2 h-2 rounded-full ${
                          (word.srsBox || 1) >= box
                            ? 'bg-amber-500'
                            : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-black font-chinese text-slate-900 dark:text-white">
                      {word.hanzi}
                    </span>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">
                      {word.pinyin}
                    </span>
                  </div>

                  <AudioButton text={word.hanzi} size="sm" />
                </div>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">
                  {word.english}
                </p>

                {word.exampleHanzi && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 text-xs space-y-0.5">
                    <div className="font-chinese font-semibold text-slate-800 dark:text-slate-200">
                      {word.exampleHanzi}
                    </div>
                    <div className="text-[11px] text-red-500">
                      {word.examplePinyin}
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      {word.exampleEnglish}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Mastered Toggle & Review Status */}
              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                {isDue ? (
                  <span className="text-[11px] font-bold text-red-600 dark:text-red-400">
                    ⏰ Due for Review
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">
                    Next in {word.intervalDays || 1}d
                  </span>
                )}

                <button
                  onClick={() => toggleMasteredWord(word.id)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all flex items-center gap-1 ${
                    word.mastered
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-700 dark:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Check size={12} />
                  <span>{word.mastered ? 'Mastered' : 'Mark Learned'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-16 text-slate-400 text-sm">
          No vocabulary words found matching your query.
        </div>
      )}

    </div>
  );
};
