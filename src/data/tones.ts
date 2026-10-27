export interface ToneDetail {
  number: number;
  name: string;
  chineseName: string;
  pitchContour: string;
  description: string;
  englishAnalogy: string;
  colorClass: string;
  exampleSyllables: {
    hanzi: string;
    pinyin: string;
    english: string;
    audio: string;
  }[];
  wavePath: string; // SVG path for visual pitch line
}

export const MANDARIN_TONES: ToneDetail[] = [
  {
    number: 1,
    name: '1st Tone: High Flat',
    chineseName: '阴平 (yīnpíng)',
    pitchContour: '55 (High level)',
    description: 'High, steady, and sustained without dropping or rising. Imagine singing a high musical note evenly.',
    englishAnalogy: 'Like singing "laaaa" or holding a high doctor "say aahh".',
    colorClass: 'text-red-600 bg-red-50 border-red-200 dark:bg-red-950/40 dark:border-red-800 dark:text-red-400',
    exampleSyllables: [
      { hanzi: '妈', pinyin: 'mā', english: 'Mother', audio: '妈' },
      { hanzi: '八', pinyin: 'bā', english: 'Eight', audio: '八' },
      { hanzi: '天', pinyin: 'tiān', english: 'Day / Sky', audio: '天' },
      { hanzi: '吃', pinyin: 'chī', english: 'To eat', audio: '吃' },
    ],
    wavePath: 'M 10 25 L 90 25'
  },
  {
    number: 2,
    name: '2nd Tone: Rising',
    chineseName: '阳平 (yángpíng)',
    pitchContour: '35 (Mid to High)',
    description: 'Starts at a medium pitch and sweeps cleanly upward. Crisp, energetic rise.',
    englishAnalogy: 'Like asking a surprised question in English: "Huh?!" or "What?!"',
    colorClass: 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-400',
    exampleSyllables: [
      { hanzi: '麻', pinyin: 'má', english: 'Hemp / Numb', audio: '麻' },
      { hanzi: '茶', pinyin: 'chá', english: 'Tea', audio: '茶' },
      { hanzi: '来', pinyin: 'lái', english: 'To come', audio: '来' },
      { hanzi: '人', pinyin: 'rén', english: 'Person', audio: '人' },
    ],
    wavePath: 'M 10 65 Q 50 50 90 25'
  },
  {
    number: 3,
    name: '3rd Tone: Low Dipping',
    chineseName: '上声 (shǎngshēng)',
    pitchContour: '214 (Dips Low, Rises)',
    description: 'Dips deep down into the bottom of your vocal range before a slight upward rebound.',
    englishAnalogy: 'Like saying a doubtful or contemplative "Wellll..." or "Uh-huh".',
    colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-400',
    exampleSyllables: [
      { hanzi: '马', pinyin: 'mǎ', english: 'Horse', audio: '马' },
      { hanzi: '你', pinyin: 'nǐ', english: 'You', audio: '你' },
      { hanzi: '好', pinyin: 'hǎo', english: 'Good', audio: '好' },
      { hanzi: '水', pinyin: 'shuǐ', english: 'Water', audio: '水' },
    ],
    wavePath: 'M 10 45 Q 45 85 90 35'
  },
  {
    number: 4,
    name: '4th Tone: Sharp Falling',
    chineseName: '去声 (qùshēng)',
    pitchContour: '51 (High to Low)',
    description: 'Sharp, decisive drop from top pitch to bottom. Swift, confident, and energetic.',
    englishAnalogy: 'Like commanding an assertive "No!" or "Stop!"',
    colorClass: 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-400',
    exampleSyllables: [
      { hanzi: '骂', pinyin: 'mà', english: 'To scold', audio: '骂' },
      { hanzi: '是', pinyin: 'shì', english: 'To be / Yes', audio: '是' },
      { hanzi: '再', pinyin: 'zài', english: 'Again', audio: '再' },
      { hanzi: '谢', pinyin: 'xiè', english: 'Thanks', audio: '谢' },
    ],
    wavePath: 'M 10 25 L 90 75'
  },
  {
    number: 5,
    name: 'Neutral Tone: Light & Soft',
    chineseName: '轻声 (qīngshēng)',
    pitchContour: '-- (Short & de-stressed)',
    description: 'Short, unstressed, and softly pronounced. Takes its pitch effortlessly from the preceding tone.',
    englishAnalogy: 'Like the unaccented syllable in "sofa" or "pencil".',
    colorClass: 'text-slate-600 bg-slate-100 border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300',
    exampleSyllables: [
      { hanzi: '吗', pinyin: 'ma', english: 'Question marker', audio: '吗' },
      { hanzi: '呢', pinyin: 'ne', english: 'What about...?', audio: '呢' },
      { hanzi: '子', pinyin: 'zi', english: 'Noun suffix', audio: '桌子' },
      { hanzi: '们', pinyin: 'men', english: 'Plural marker', audio: '我们' },
    ],
    wavePath: 'M 35 50 A 5 5 0 1 0 65 50 A 5 5 0 1 0 35 50'
  }
];

export const TONE_SANDHI_RULES = [
  {
    title: 'Rule 1: Two 3rd Tones (3 + 3 ➔ 2 + 3)',
    rule: 'When two 3rd tones occur back-to-back, the first one transforms into a 2nd tone in speech!',
    example: '你好 (nǐ + hǎo) is pronounced as ní hǎo.',
    audio: '你好',
    tip: 'This makes spoken Mandarin flow effortlessly without awkward double-dipping.'
  },
  {
    title: 'Rule 2: "不" (bù) Tone Change',
    rule: '"不" is naturally 4th tone (bù). But when followed by another 4th tone, it changes to 2nd tone (bú)!',
    example: '不是 is pronounced bú shì (not bù shì). 不要 is bú yào.',
    audio: '不是',
    tip: 'Before 1st, 2nd, or 3rd tones, 不 remains 4th tone: 不喝 (bù hē), 不忙 (bù máng), 不好 (bù hǎo).'
  },
  {
    title: 'Rule 3: "一" (yī) Tone Change',
    rule: '"一" is 1st tone when counting (1, 2, 3), but becomes 4th tone (yì) before 1st/2nd/3rd tones, and 2nd tone (yí) before 4th tone!',
    example: '一天 (yì tiān), 一起 (yì qǐ), but 一样 (yí yàng).',
    audio: '一起',
    tip: 'Listen to native speakers: changing tones prevents monotonous speech.'
  }
];

export const TONE_PAIRS = [
  { name: '1st + 1st', pinyin: 'jīn tiān', hanzi: '今天', english: 'Today', audio: '今天' },
  { name: '1st + 4th', pinyin: 'fēi jī', hanzi: '飞机', english: 'Airplane', audio: '飞机' },
  { name: '2nd + 4th', pinyin: 'míng tiān', hanzi: '明天', english: 'Tomorrow', audio: '明天' },
  { name: '3rd + 2nd', pinyin: 'kě yǐ', hanzi: '可以', english: 'Can / May', audio: '可以' },
  { name: '4th + 4th', pinyin: 'zài jiàn', hanzi: '再见', english: 'Goodbye', audio: '再见' },
  { name: '4th + 1st', pinyin: 'miàn tiáo', hanzi: '面条', english: 'Noodles', audio: '面条' }
];
