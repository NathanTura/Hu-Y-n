import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, VocabWord } from '../types';
import { INITIAL_VOCABULARY } from '../data/vocabulary';
import { updateSRSWord } from '../utils/srs';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'huayin_mandarin_academy_progress_v1';

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
  startLesson: (lessonId: string) => void;
  startConversation: (scenarioId?: string) => void;
  completeLesson: (lessonId: string, xpBonus?: number) => void;
  addXP: (amount: number) => void;
  reviewWord: (word: VocabWord, rating: 'again' | 'hard' | 'good' | 'easy') => void;
  toggleMasteredWord: (wordId: string) => void;
  updateSettings: (settings: Partial<UserProgress['settings']>) => void;
  openDailyPractice: () => void;
  closeDailyPractice: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  resetProgress: () => void;
  triggerCelebration: () => void;
}

const defaultProgress: UserProgress = {
  xp: 40, // starter XP for starting Lesson 1
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyGoalXp: 50,
  todayXp: 40,
  completedLessonIds: [],
  vocabSRS: INITIAL_VOCABULARY.reduce((acc, word) => {
    acc[word.id] = word;
    return acc;
  }, {} as Record<string, VocabWord>),
  unlockedLevel: 1,
  badges: ['welcome_cadet'],
  settings: {
    speechRate: 1.0,
    showPinyin: true,
    showEnglish: true,
    autoPlayAudio: true,
    theme: 'dark', // Auto Dark Mode by default!
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure todayXp and streak calculation is fresh
        const todayStr = new Date().toISOString().split('T')[0];
        if (parsed.lastActiveDate !== todayStr) {
          const lastDate = new Date(parsed.lastActiveDate);
          const today = new Date(todayStr);
          const diffDays = Math.round((today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
          
          if (diffDays === 1) {
            parsed.streak = (parsed.streak || 1) + 1;
          } else if (diffDays > 1) {
            parsed.streak = 1; // reset streak if missed a day
          }
          parsed.todayXp = 0;
          parsed.lastActiveDate = todayStr;
        }
        // Auto dark mode: if theme isn't explicitly overridden by user, ensure it defaults to dark
        if (!parsed.settings) {
          parsed.settings = defaultProgress.settings;
        } else if (!parsed.settings.theme || !localStorage.getItem('huayin_theme_manual_override')) {
          parsed.settings.theme = 'dark';
        }

        // Merge missing vocab if updated
        if (!parsed.vocabSRS || Object.keys(parsed.vocabSRS).length === 0) {
          parsed.vocabSRS = defaultProgress.vocabSRS;
        }
        return parsed;
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

  // Handle theme class
  useEffect(() => {
    const root = document.documentElement;
    if (progress.settings.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
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
      // fallback if confetti blocked
    }
  };

  const addXP = (amount: number) => {
    setProgress(prev => {
      const newTodayXp = prev.todayXp + amount;
      const newTotalXp = prev.xp + amount;
      const badges = [...prev.badges];

      if (newTotalXp >= 100 && !badges.includes('xp_100')) {
        badges.push('xp_100');
      }
      if (newTotalXp >= 500 && !badges.includes('xp_500')) {
        badges.push('xp_500');
      }

      return {
        ...prev,
        xp: newTotalXp,
        todayXp: newTodayXp,
        badges
      };
    });
  };

  const startLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setActiveView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        [word.id]: updated
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
    if (window.confirm('Are you sure you want to reset all your progress, streaks, and saved vocabulary?')) {
      localStorage.removeItem(STORAGE_KEY);
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
        addXP,
        reviewWord,
        toggleMasteredWord,
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
