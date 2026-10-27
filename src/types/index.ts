export type ToneNumber = 1 | 2 | 3 | 4 | 5;

export interface VocabWord {
  id: string;
  hanzi: string;
  pinyin: string;
  english: string;
  level: number; // 1, 2, 3, 4
  category: string; // e.g. "Greetings", "Food", "Numbers"
  exampleHanzi?: string;
  examplePinyin?: string;
  exampleEnglish?: string;
  audioKey?: string;
  // SRS properties
  srsBox?: number; // 1 to 5
  nextReview?: string; // ISO date string
  intervalDays?: number;
  timesReviewed?: number;
  timesCorrect?: number;
  mastered?: boolean;
  learned?: boolean;
  learnedAt?: string;
  lessonId?: string;
}

export type ExerciseType = 
  | 'multiple-choice'
  | 'sentence-order'
  | 'fill-in-blank'
  | 'listening-choice'
  | 'speaking-challenge';

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptChinese?: string;
  promptPinyin?: string;
  audioText?: string;
  options?: string[]; // for multiple-choice and listening
  correctAnswer: string | string[]; // string for choice/fill, string[] for sentence-order chips
  explanation?: string;
  hint?: string;
}

export interface ConversationTurn {
  speaker: 'partner' | 'user';
  name: string;
  avatar?: string;
  hanzi: string;
  pinyin: string;
  english: string;
  audioText?: string;
  tips?: string;
}

export interface Lesson {
  id: string;
  level: number;
  order: number;
  title: string;
  chineseTitle: string;
  subtitle: string;
  durationMin: number;
  xpReward: number;
  intro: {
    overview: string;
    culturalNote?: string;
    grammarRule?: string;
    keyTakeaway: string;
  };
  vocabulary: VocabWord[];
  conversationSample?: ConversationTurn[];
  pronunciationFocus?: {
    title: string;
    pinyinRule: string;
    targetWords: { hanzi: string; pinyin: string; english: string; toneTip: string }[];
  };
  exercises: Exercise[];
  speakingChallenge: {
    targetHanzi: string;
    targetPinyin: string;
    targetEnglish: string;
    phoneticGuide: string;
    tip: string;
  };
  summary: string[];
}

export interface DialogueNode {
  id: string;
  speaker: string;
  speakerRole: 'partner' | 'system';
  avatar: string;
  hanzi: string;
  pinyin: string;
  english: string;
  audioText?: string;
  culturalTip?: string;
  userOptions: {
    textHanzi: string;
    textPinyin: string;
    textEnglish: string;
    feedback?: string;
    nextNodeId: string;
    xpBonus?: number;
  }[];
}

export interface ConversationScenario {
  id: string;
  title: string;
  chineseTitle: string;
  difficulty: 'Beginner' | 'Elementary' | 'Intermediate';
  category: string;
  description: string;
  location: string;
  targetRole: string;
  partnerRole: string;
  partnerAvatar: string;
  initialNodeId: string;
  nodes: Record<string, DialogueNode>;
}

export interface SavedLessonProgress {
  lessonId: string;
  currentStep: number; // 0 to 6
  exerciseIndex: number;
  speakingPassed?: boolean;
  updatedAt: string;
  completed?: boolean;
}

export interface UserProgress {
  xp: number;
  streak: number;
  streakDates: string[]; // YYYY-MM-DD dates with activity
  lastActiveDate: string; // YYYY-MM-DD
  dailyGoalXp: number;
  todayXp: number;
  xpHistory: Record<string, number>; // date -> XP earned that day
  completedLessonIds: string[];
  lessonProgress: Record<string, SavedLessonProgress>; // lessonId -> saved step
  learnedWordIds: string[]; // IDs of words user has encountered & learned
  vocabSRS: Record<string, VocabWord>;
  unlockedLevel: number;
  badges: string[];
  settings: {
    speechRate: number; // 0.8 for slow, 1.0 for normal
    showPinyin: boolean;
    showEnglish: boolean;
    autoPlayAudio: boolean;
    theme: 'light' | 'dark' | 'system';
  };
}
