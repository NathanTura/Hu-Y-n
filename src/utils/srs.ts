import { VocabWord } from '../types';

export const SRS_INTERVALS = [1, 3, 7, 14, 30]; // in days

/**
 * Check if a vocab word is due for review
 */
export function isWordDue(word: VocabWord): boolean {
  if (!word.nextReview) return true; // not reviewed yet
  const now = new Date();
  const nextDate = new Date(word.nextReview);
  return now >= nextDate;
}

/**
 * Get all words due for review from the user's vocabulary bank
 */
export function getDueWords(vocabMap: Record<string, VocabWord>): VocabWord[] {
  return Object.values(vocabMap).filter(isWordDue);
}

/**
 * Update a vocab item based on user response
 * rating: 'again' (forgot), 'hard' (struggled), 'good' (recalled), 'easy' (instant)
 */
export function updateSRSWord(
  word: VocabWord,
  rating: 'again' | 'hard' | 'good' | 'easy'
): VocabWord {
  let currentBox = word.srsBox || 1;
  let interval = 1;
  let mastered = word.mastered || false;

  const timesReviewed = (word.timesReviewed || 0) + 1;
  let timesCorrect = word.timesCorrect || 0;

  if (rating === 'again') {
    currentBox = 1;
    interval = 1;
    mastered = false;
  } else if (rating === 'hard') {
    currentBox = Math.max(1, currentBox - 1);
    interval = SRS_INTERVALS[currentBox - 1];
    timesCorrect += 1;
  } else if (rating === 'good') {
    currentBox = Math.min(5, currentBox + 1);
    interval = SRS_INTERVALS[currentBox - 1];
    timesCorrect += 1;
    if (currentBox >= 5) mastered = true;
  } else if (rating === 'easy') {
    currentBox = Math.min(5, currentBox + 2);
    interval = SRS_INTERVALS[currentBox - 1] * 1.5;
    timesCorrect += 1;
    if (currentBox >= 4) mastered = true;
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + Math.round(interval));

  return {
    ...word,
    srsBox: currentBox,
    intervalDays: Math.round(interval),
    nextReview: nextDate.toISOString(),
    timesReviewed,
    timesCorrect,
    mastered
  };
}
