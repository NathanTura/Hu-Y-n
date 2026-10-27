import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, VocabWord, SavedLessonProgress } from '../types';
import { INITIAL_VOCABULARY } from '../data/vocabulary';
import { LESSONS } from '../data/lessons';
import { updateSRSWord } from '../utils/srs';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'huayin_mandarin_academy_progress_v2';

export type ActiveView = 
  | 'dashboard'
  | 'lesson'
  | 'conversation'
  | 'pronunciation'
  | 'listening'
  | 'vocab'
  | 'review';

interface AppContextType {
  progress: UserProgress;
  activeView: ActiveView;
  currentLessonId: string | null;
  currentScenarioId: string | null;
  isDailyPracticeOpen: boolean;
  isSettingsOpen: boolean;
  setActiveView: (view: ActiveView) => void;
  startLesson: (lessonId: string, resumeSaved?: boolean) => void;
  startConversation: (scenarioId?: string) => void;
  completeLesson: (lessonId: string, xpBonus?: number) => void;
  saveLessonStep: (lessonId: string, step: number, exerciseIndex: number, speakingPassed?: boolean) => void;
  resetLessonStep: (lessonId: string) => void;
  markWordsAsLearned: (words: VocabWord[], lessonId?: string) => void;
  addXP: (amount: number) => void;
  reviewWord: (word: VocabWord, rating: 'again' | 'hard' | 'good' | 'easy') => void;
  toggleMasteredWord: (wordId: string) => void;
  toggleLearnedWord: (wordId: string) => void;
  updateSettings: (settings: Partial<UserProgress['settings']>) => void;
  openDailyPractice: () => void;
  closeDailyPractice: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  resetProgress: () => void;
  triggerCelebration: () => void;
}

// Helper: Format local date YYYY-MM-DD
function getLocalDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Calculate accurate consecutive streak days
function calculateAccurateStreak(dates: string[], todayStr: string): number {
  if (!dates || dates.length === 0) return 1;
  const dateSet = new Set(dates);
  
  let current = new Date();
  let streak = 0;

  // Check if practiced today
  if (dateSet.has(todayStr)) {
    while (dateSet.has(getLocalDateString(current))) {
      streak++;
      current.setDate(current.getDate() - 1);
    }
  } else {
    // Check if practiced yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = getLocalDateString(yesterday);
    if (dateSet.has(yesterdayStr)) {
      current = yesterday;
      while (dateSet.has(getLocalDateString(current))) {
        streak++;
        current.setDate(current.getDate() - 1);
      }
    } else {
      streak = 1; // start new streak
    }
  }

  return Math.max(1, streak);
}

// Pre-register starter words from lesson 1 as learned
const starterLesson1Words = LESSONS[0]?.vocabulary || [];
const initialLearnedIds = starterLesson1Words.map(w => w.id);

const todayInitial = getLocalDateString();

const defaultProgress: UserProgress = {
  xp: 40,
  streak: 1,
  streakDates: [todayInitial],
  lastActiveDate: todayInitial,
  dailyGoalXp: 50,
  todayXp: 40,
  xpHistory: { [todayInitial]: 40 },
  completedLessonIds: [],
  lessonProgress: {},
  learnedWordIds: initialLearnedIds,
  vocabSRS: INITIAL_VOCABULARY.reduce((acc, word) => {
    const isStarter = initialLearnedIds.includes(word.id);
    acc[word.id] = {
      ...word,
      learned: isStarter,
      learnedAt: isStarter ? new Date().toISOString() : undefined,
      lessonId: isStarter ? 'l1-1' : word.lessonId,
      srsBox: word.srsBox || 1,
      nextReview: new Date().toISOString()
    };
    return acc;
  }, {} as Record<string, VocabWord>),
  unlockedLevel: 1,
  badges: ['welcome_cadet'],
  settings: {
    speechRate: 1.0,
    showPinyin: true,
    showEnglish: true,
    autoPlayAudio: true,
    theme: 'dark', // Auto dark mode by default
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('huayin_mandarin_academy_progress_v1');
      const todayStr = getLocalDateString();

      if (stored) {
        const parsed = JSON.parse(stored);

        // Ensure streak dates array exists
        const streakDates: string[] = Array.isArray(parsed.streakDates) 
          ? parsed.streakDates 
          : [parsed.lastActiveDate || todayStr];

        // Fresh todayXp calculation
        let todayXp = parsed.todayXp || 0;
        if (parsed.lastActiveDate !== todayStr) {
          todayXp = 0; // reset for new calendar day
        }

        const streak = calculateAccurateStreak(streakDates, todayStr);

        // Auto dark mode default if not manually overridden
        const theme = localStorage.getItem('huayin_theme_manual_override') 
          ? (parsed.settings?.theme || 'dark') 
          : 'dark';

        // Merge lesson progress and learned words
        const lessonProgress = parsed.lessonProgress || {};
        const learnedWordIds = Array.isArray(parsed.learnedWordIds) && parsed.learnedWordIds.length > 0
          ? parsed.learnedWordIds
          : initialLearnedIds;

        // Merge vocabulary bank
        const vocabSRS = parsed.vocabSRS && Object.keys(parsed.vocabSRS).length > 0
          ? parsed.vocabSRS
          : defaultProgress.vocabSRS;

        return {
          ...defaultProgress,
          ...parsed,
          streak,
          streakDates,
          todayXp,
          lastActiveDate: todayStr,
          lessonProgress,
          learnedWordIds,
          vocabSRS,
          settings: {
            ...defaultProgress.settings,
            ...parsed.settings,
            theme
          }
        };
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return defaultProgress;
  });

  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [currentScenarioId, setCurrentScenarioId] = useState<string | null>(null);
  const [isDailyPracticeOpen, setIsDailyPracticeOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  // Handle theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (progress.settings.theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [progress.settings.theme]);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  /**
   * Accurate XP & Streak System
   */
  const addXP = (amount: number) => {
    const todayStr = getLocalDateString();
    setProgress(prev => {
      const isNewDay = prev.lastActiveDate !== todayStr;
      const baseToday = isNewDay ? 0 : prev.todayXp;
      const newTodayXp = baseToday + amount;
      const newTotalXp = prev.xp + amount;

      // Update streak dates if not already marked for today
      const streakDates = prev.streakDates.includes(todayStr)
        ? prev.streakDates
        : [...prev.streakDates, todayStr];

      const newStreak = calculateAccurateStreak(streakDates, todayStr);

      const xpHistory = {
        ...prev.xpHistory,
        [todayStr]: ((isNewDay ? 0 : prev.xpHistory[todayStr]) || 0) + amount
      };

      const badges = [...prev.badges];
      if (newTotalXp >= 100 && !badges.includes('xp_100')) badges.push('xp_100');
      if (newTotalXp >= 250 && !badges.includes('xp_250')) badges.push('xp_250');
      if (newTotalXp >= 500 && !badges.includes('xp_500')) badges.push('xp_500');
      if (newStreak >= 3 && !badges.includes('streak_3')) badges.push('streak_3');
      if (newStreak >= 7 && !badges.includes('streak_7')) badges.push('streak_7');

      return {
        ...prev,
        xp: newTotalXp,
        todayXp: newTodayXp,
        streak: newStreak,
        streakDates,
        lastActiveDate: todayStr,
        xpHistory,
        badges
      };
    });
  };

  /**
   * Start or resume lesson
   */
  const startLesson = (lessonId: string, resumeSaved: boolean = true) => {
    setCurrentLessonId(lessonId);
    setActiveView('lesson');
    
    // Automatically register lesson words as learned when lesson begins
    const targetLesson = LESSONS.find(l => l.id === lessonId);
    if (targetLesson) {
      markWordsAsLearned(targetLesson.vocabulary, lessonId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Save stopping point in a lesson so the user can continue anytime
   */
  const saveLessonStep = (
    lessonId: string, 
    step: number, 
    exerciseIndex: number, 
    speakingPassed: boolean = false
  ) => {
    setProgress(prev => ({
      ...prev,
      lessonProgress: {
        ...prev.lessonProgress,
        [lessonId]: {
          lessonId,
          currentStep: step,
          exerciseIndex,
          speakingPassed,
          updatedAt: new Date().toISOString()
        }
      }
    }));
  };

  /**
   * Reset lesson back to step 0 if user wants to restart
   */
  const resetLessonStep = (lessonId: string) => {
    setProgress(prev => {
      const updated = { ...prev.lessonProgress };
      delete updated[lessonId];
      return {
        ...prev,
        lessonProgress: updated
      };
    });
  };

  /**
   * Track words as learned to review later
   */
  const markWordsAsLearned = (words: VocabWord[], lessonId?: string) => {
    if (!words || words.length === 0) return;
    
    setProgress(prev => {
      const learnedIdsSet = new Set(prev.learnedWordIds);
      const updatedVocab = { ...prev.vocabSRS };
      const nowStr = new Date().toISOString();

      words.forEach(w => {
        learnedIdsSet.add(w.id);
        const existing = updatedVocab[w.id] || w;
        updatedVocab[w.id] = {
          ...existing,
          learned: true,
          learnedAt: existing.learnedAt || nowStr,
          lessonId: lessonId || existing.lessonId || 'l1-1',
          srsBox: existing.srsBox || 1,
          nextReview: existing.nextReview || nowStr,
        };
      });

      return {
        ...prev,
        learnedWordIds: Array.from(learnedIdsSet),
        vocabSRS: updatedVocab
      };
    });
  };

  const startConversation = (scenarioId?: string) => {
    if (scenarioId) {
      setCurrentScenarioId(scenarioId);
    }
    setActiveView('conversation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completeLesson = (lessonId: string, xpBonus: number = 30) => {
    triggerCelebration();
    const targetLesson = LESSONS.find(l => l.id === lessonId);
    if (targetLesson) {
      markWordsAsLearned(targetLesson.vocabulary, lessonId);
    }

    setProgress(prev => {
      const alreadyCompleted = prev.completedLessonIds.includes(lessonId);
      const updatedLessons = alreadyCompleted 
        ? prev.completedLessonIds 
        : [...prev.completedLessonIds, lessonId];
      
      const newUnlockedLevel = Math.max(
        prev.unlockedLevel,
        updatedLessons.length >= 6 ? 2 : 1,
        updatedLessons.length >= 12 ? 3 : 1,
        updatedLessons.length >= 17 ? 4 : 1
      );

      // Mark lesson progress as finished
      const updatedProgressMap = {
        ...prev.lessonProgress,
        [lessonId]: {
          lessonId,
          currentStep: 6,
          exerciseIndex: 0,
          completed: true,
          updatedAt: new Date().toISOString()
        }
      };

      const badges = [...prev.badges];
      if (!badges.includes('first_lesson')) badges.push('first_lesson');
      if (updatedLessons.length >= 6 && !badges.includes('level_1_master')) {
        badges.push('level_1_master');
      }

      return {
        ...prev,
        xp: prev.xp + xpBonus,
        todayXp: prev.todayXp + xpBonus,
        completedLessonIds: updatedLessons,
        lessonProgress: updatedProgressMap,
        unlockedLevel: newUnlockedLevel,
        badges
      };
    });
  };

  const reviewWord = (word: VocabWord, rating: 'again' | 'hard' | 'good' | 'easy') => {
    const updated = updateSRSWord(word, rating);
    setProgress(prev => ({
      ...prev,
      vocabSRS: {
        ...prev.vocabSRS,
        [word.id]: {
          ...updated,
          learned: true
        }
      }
    }));
    addXP(5);
  };

  const toggleMasteredWord = (wordId: string) => {
    setProgress(prev => {
      const current = prev.vocabSRS[wordId];
      if (!current) return prev;
      const isMastered = !current.mastered;
      return {
        ...prev,
        vocabSRS: {
          ...prev.vocabSRS,
          [wordId]: {
            ...current,
            mastered: isMastered,
            srsBox: isMastered ? 5 : 1
          }
        }
      };
    });
  };

  const toggleLearnedWord = (wordId: string) => {
    setProgress(prev => {
      const isLearned = prev.learnedWordIds.includes(wordId);
      const newLearnedIds = isLearned
        ? prev.learnedWordIds.filter(id => id !== wordId)
        : [...prev.learnedWordIds, wordId];

      const current = prev.vocabSRS[wordId];
      const updatedVocab = current ? {
        ...prev.vocabSRS,
        [wordId]: {
          ...current,
          learned: !isLearned,
          learnedAt: !isLearned ? new Date().toISOString() : undefined
        }
      } : prev.vocabSRS;

      return {
        ...prev,
        learnedWordIds: newLearnedIds,
        vocabSRS: updatedVocab
      };
    });
  };

  const updateSettings = (newSettings: Partial<UserProgress['settings']>) => {
    if (newSettings.theme) {
      try {
        localStorage.setItem('huayin_theme_manual_override', 'true');
      } catch (e) {
        // ignore
      }
    }
    setProgress(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...newSettings
      }
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your progress, streaks, saved checkpoints, and vocabulary?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('huayin_mandarin_academy_progress_v1');
      localStorage.removeItem('huayin_theme_manual_override');
      setProgress(defaultProgress);
      setActiveView('dashboard');
    }
  };

  return (
    <AppContext.Provider
      value={{
        progress,
        activeView,
        currentLessonId,
        currentScenarioId,
        isDailyPracticeOpen,
        isSettingsOpen,
        setActiveView,
        startLesson,
        startConversation,
        completeLesson,
        saveLessonStep,
        resetLessonStep,
        markWordsAsLearned,
        addXP,
        reviewWord,
        toggleMasteredWord,
        toggleLearnedWord,
        updateSettings,
        openDailyPractice: () => setIsDailyPracticeOpen(true),
        closeDailyPractice: () => setIsDailyPracticeOpen(false),
        openSettings: () => setIsSettingsOpen(true),
        closeSettings: () => setIsSettingsOpen(false),
        resetProgress,
        triggerCelebration
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
