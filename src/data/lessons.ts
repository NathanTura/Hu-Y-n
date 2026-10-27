import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  // ==========================================
  // LEVEL 1: ABSOLUTE BEGINNER
  // ==========================================
  {
    id: 'l1-1',
    level: 1,
    order: 1,
    title: 'The Four Tones & Sound Foundations',
    chineseTitle: '声调与发音',
    subtitle: 'Master the 4 Mandarin tones and your very first spoken words',
    durationMin: 10,
    xpReward: 30,
    intro: {
      overview: 'Mandarin is a tonal language. The same syllable can mean completely different things depending on its pitch contour! The four tones are: 1st (high flat), 2nd (rising), 3rd (low dipping), and 4th (sharp falling). Plus a soft neutral tone.',
      grammarRule: 'Tone Sandhi: When two 3rd tones are said together (like 你 nǐ + 好 hǎo), the first automatically changes into a 2nd tone: ní hǎo! This happens naturally so your throat doesn\'t struggle.',
      culturalNote: 'Chinese people love when foreigners make an effort with tones. Even if your tones aren\'t 100% perfect, context and body language help immensely.',
      keyTakeaway: 'Exaggerate the pitch contours when practicing: high flat (singing), rising (question?), dipping (low sigh), falling (assertive!).'
    },
    vocabulary: [
      { id: 'v-ni', hanzi: '你', pinyin: 'nǐ', english: 'you (singular)', level: 1, category: 'Pronouns', exampleHanzi: '你好', examplePinyin: 'nǐ hǎo', exampleEnglish: 'Hello' },
      { id: 'v-hao', hanzi: '好', pinyin: 'hǎo', english: 'good / well / fine', level: 1, category: 'Adjectives', exampleHanzi: '很好', examplePinyin: 'hěn hǎo', exampleEnglish: 'Very good' },
      { id: 'v-ma-mother', hanzi: '妈', pinyin: 'mā', english: 'mother (1st tone)', level: 1, category: 'Family', exampleHanzi: '妈妈', examplePinyin: 'māma', exampleEnglish: 'Mom' },
      { id: 'v-ma-horse', hanzi: '马', pinyin: 'mǎ', english: 'horse (3rd tone)', level: 1, category: 'Animals', exampleHanzi: '白马', examplePinyin: 'bái mǎ', exampleEnglish: 'White horse' },
      { id: 'v-ma-particle', hanzi: '吗', pinyin: 'ma', english: 'question particle (neutral tone)', level: 1, category: 'Particles', exampleHanzi: '你好吗？', examplePinyin: 'Nǐ hǎo ma?', exampleEnglish: 'How are you?' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Li Ming', hanzi: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!', audioText: '你好！' },
      { speaker: 'user', name: 'You', hanzi: '你好！你好吗？', pinyin: 'Nǐ hǎo! Nǐ hǎo ma?', english: 'Hello! How are you?', audioText: '你好！你好吗？' },
      { speaker: 'partner', name: 'Li Ming', hanzi: '我很好，谢谢！', pinyin: 'Wǒ hěn hǎo, xièxie!', english: 'I am very well, thank you!', audioText: '我很好，谢谢！' }
    ],
    pronunciationFocus: {
      title: 'Tone 1 vs Tone 4 Contrast',
      pinyinRule: 'Tone 1 is high & steady (5-5). Tone 4 drops sharply (5-1) like saying a firm "No!".',
      targetWords: [
        { hanzi: '妈', pinyin: 'mā', english: 'Mother (Tone 1)', toneTip: 'High flat sing-song voice' },
        { hanzi: '骂', pinyin: 'mà', english: 'To scold (Tone 4)', toneTip: 'Sharp, swift downward drop' },
        { hanzi: '八', pinyin: 'bā', english: 'Eight (Tone 1)', toneTip: 'Even high pitch' },
        { hanzi: '爸', pinyin: 'bà', english: 'Dad (Tone 4)', toneTip: 'Firm downward drop' },
      ]
    },
    exercises: [
      {
        id: 'ex-1-1-1',
        type: 'multiple-choice',
        prompt: 'Which tone is flat and high pitched, like singing an even note?',
        options: ['1st Tone (mā)', '2nd Tone (má)', '3rd Tone (mǎ)', '4th Tone (mà)'],
        correctAnswer: '1st Tone (mā)',
        explanation: 'The 1st tone stays high and steady at pitch level 5-5.'
      },
      {
        id: 'ex-1-1-2',
        type: 'listening-choice',
        prompt: 'Listen to the audio. Which tone contour did you hear?',
        audioText: '好',
        options: ['Tone 1 (Flat)', 'Tone 2 (Rising)', 'Tone 3 (Low Dipping)', 'Tone 4 (Falling)'],
        correctAnswer: 'Tone 3 (Low Dipping)',
        explanation: '好 (hǎo) is 3rd tone, which dips deep down into your vocal register.'
      },
      {
        id: 'ex-1-1-3',
        type: 'multiple-choice',
        prompt: 'When you say 你好 (nǐ + hǎo), how does the first word (你) sound in natural speech?',
        options: ['It changes to 2nd tone (ní)', 'It stays 3rd tone (nǐ)', 'It changes to 4th tone (nì)', 'It becomes silent'],
        correctAnswer: 'It changes to 2nd tone (ní)',
        explanation: 'Tone Sandhi: When two 3rd tones meet, the first naturally changes to 2nd tone (ní hǎo).'
      },
      {
        id: 'ex-1-1-4',
        type: 'sentence-order',
        prompt: 'Arrange the words to say: "How are you?"',
        correctAnswer: ['你', '好', '吗'],
        options: ['你', '好', '吗', '我'],
        explanation: '你好 (Hello) + 吗 (question particle) = 你好吗？(How are you?)'
      }
    ],
    speakingChallenge: {
      targetHanzi: '你好',
      targetPinyin: 'nǐ hǎo',
      targetEnglish: 'Hello!',
      phoneticGuide: 'Pronounce as "nee-how", with "nee" rising smoothly (2nd tone) and "how" dipping low (3rd tone).',
      tip: 'Remember the 3+3 tone rule: Say "ní hǎo" with energy!'
    },
    summary: [
      'Mandarin has 4 main tones plus a neutral tone.',
      'Tone 1: High flat (mā); Tone 2: Rising (má); Tone 3: Dipping (mǎ); Tone 4: Falling (mà).',
      'Two 3rd tones together turn into 2nd + 3rd (nǐ hǎo ➔ ní hǎo).',
      'Adding 吗 (ma) to the end of a statement turns it into a yes/no question!'
    ]
  },

  {
    id: 'l1-2',
    level: 1,
    order: 2,
    title: 'Essential Greetings & Politeness',
    chineseTitle: '日常问候与礼貌',
    subtitle: 'Saying hello, good morning, thank you, and goodbye',
    durationMin: 12,
    xpReward: 35,
    intro: {
      overview: 'Politeness opens doors everywhere in China. In this lesson, you will learn the essential daily greetings you will use every single day with friends, colleagues, taxi drivers, and shopkeepers.',
      grammarRule: 'Reduplication for friendliness: Chinese often repeats characters to sound softer and friendly, like 谢谢 (xièxie - thank you) and 妈妈 (māma). The second syllable is usually spoken in the neutral tone!',
      culturalNote: 'When receiving something with both hands or showing extra respect to an elder, you can use 您好 (nín hǎo) instead of 你好 (nǐ hǎo).',
      keyTakeaway: 'Keep your greetings warm and clear. Master 谢谢 (xièxie) and 不客气 (bú kèqi) for effortless courtesy.'
    },
    vocabulary: [
      { id: 'v-xiexie', hanzi: '谢谢', pinyin: 'xièxie', english: 'thank you', level: 1, category: 'Politeness', exampleHanzi: '谢谢你！', examplePinyin: 'Xièxie nǐ!', exampleEnglish: 'Thank you!' },
      { id: 'v-bukeqi', hanzi: '不客气', pinyin: 'bú kèqi', english: 'you are welcome', level: 1, category: 'Politeness', exampleHanzi: '不客气。', examplePinyin: 'Bú kèqi.', exampleEnglish: 'You\'re welcome.' },
      { id: 'v-zaijian', hanzi: '再见', pinyin: 'zàijiàn', english: 'goodbye / see you again', level: 1, category: 'Greetings', exampleHanzi: '明天再见！', examplePinyin: 'Míngtiān zàijiàn!', exampleEnglish: 'See you tomorrow!' },
      { id: 'v-duibuqi', hanzi: '对不起', pinyin: 'duìbuqǐ', english: 'sorry / excuse me', level: 1, category: 'Politeness', exampleHanzi: '对不起，我不知道。', examplePinyin: 'Duìbuqǐ, wǒ bù zhīdào.', exampleEnglish: 'Sorry, I don\'t know.' },
      { id: 'v-meiguanxi', hanzi: '没关系', pinyin: 'méi guānxi', english: 'it doesn\'t matter / no worries', level: 1, category: 'Politeness', exampleHanzi: '没关系！', examplePinyin: 'Méi guānxi!', exampleEnglish: 'No problem!' },
      { id: 'v-zaoshanghao', hanzi: '早上好', pinyin: 'zǎoshang hǎo', english: 'good morning', level: 1, category: 'Greetings', exampleHanzi: '老师，早上好！', examplePinyin: 'Lǎoshī, zǎoshang hǎo!', exampleEnglish: 'Good morning, teacher!' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Wang Fang', hanzi: '早上好！', pinyin: 'Zǎoshang hǎo!', english: 'Good morning!', audioText: '早上好！' },
      { speaker: 'user', name: 'You', hanzi: '早上好！谢谢你的咖啡。', pinyin: 'Zǎoshang hǎo! Xièxie nǐ de kāfēi.', english: 'Good morning! Thank you for the coffee.', audioText: '早上好！谢谢你的咖啡。' },
      { speaker: 'partner', name: 'Wang Fang', hanzi: '不客气！再见！', pinyin: 'Bú kèqi! Zàijiàn!', english: 'You\'re welcome! Goodbye!', audioText: '不客气！再见！' }
    ],
    pronunciationFocus: {
      title: 'The "x" and "j" sounds in Mandarin',
      pinyinRule: 'The letter "x" in xièxie sounds like a soft "sh" with the tip of your tongue resting against your lower teeth. "j" in zàijiàn is a crisp "j/dz" sound.',
      targetWords: [
        { hanzi: '谢谢', pinyin: 'xièxie', english: 'Thank you', toneTip: '4th tone drop on first xiè, soft neutral on second xie' },
        { hanzi: '再见', pinyin: 'zàijiàn', english: 'Goodbye', toneTip: 'Both syllables are 4th tone: sharp, crisp falling pitches' },
        { hanzi: '对不起', pinyin: 'duìbuqǐ', english: 'Sorry', toneTip: 'duì (4th) + bu (neutral) + qǐ (3rd dipping)' },
      ]
    },
    exercises: [
      {
        id: 'ex-1-2-1',
        type: 'multiple-choice',
        prompt: 'If someone hands you a hot tea and says "请喝茶" (Please drink tea), what should you say?',
        options: ['谢谢 (Xièxie)', '对不起 (Duìbuqǐ)', '再见 (Zàijiàn)', '没关系 (Méi guānxi)'],
        correctAnswer: '谢谢 (Xièxie)',
        explanation: '谢谢 (Xièxie) means thank you.'
      },
      {
        id: 'ex-1-2-2',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the speaker saying?',
        audioText: '对不起',
        options: ['Sorry / Excuse me', 'Thank you', 'Good morning', 'Goodbye'],
        correctAnswer: 'Sorry / Excuse me',
        explanation: '对不起 (duìbuqǐ) is the standard polite apology in Chinese.'
      },
      {
        id: 'ex-1-2-3',
        type: 'fill-in-blank',
        prompt: 'Fill in the blank: Someone says "谢谢！" You respond: "不____！" (You\'re welcome)',
        options: ['客气 (kèqi)', '好 (hǎo)', '见 (jiàn)', '关系 (guānxi)'],
        correctAnswer: '客气 (kèqi)',
        explanation: '不客气 (Bú kèqi) literally means "don\'t be overly polite" (you are welcome).'
      },
      {
        id: 'ex-1-2-4',
        type: 'sentence-order',
        prompt: 'Assemble: "See you tomorrow!" (Tomorrow + see/again)',
        correctAnswer: ['明天', '再见'],
        options: ['明天', '再见', '你好', '谢谢'],
        explanation: '明天 (míngtiān = tomorrow) + 再见 (zàijiàn = see you again) = 明天再见！'
      }
    ],
    speakingChallenge: {
      targetHanzi: '谢谢，不客气',
      targetPinyin: 'xièxie, bú kèqi',
      targetEnglish: 'Thank you, you\'re welcome',
      phoneticGuide: 'Say "shyeh-shyeh, boo-kuh-chee". Remember "bù" changes to 2nd tone "bú" before 4th tone "kè".',
      tip: 'Pronounce xiè with crisp conviction, and soften the qi!'
    },
    summary: [
      '谢谢 (xièxie) = Thank you; 不客气 (bú kèqi) = You\'re welcome.',
      '对不起 (duìbuqǐ) = Sorry; 没关系 (méi guānxi) = No problem / it\'s okay.',
      '再见 (zàijiàn) = Goodbye (literally "again meet").',
      'The word 不 (bù) changes to 2nd tone (bú) before another 4th tone like kèqi!'
    ]
  },

  {
    id: 'l1-3',
    level: 1,
    order: 3,
    title: 'Introducing Yourself & Names',
    chineseTitle: '自我介绍与姓名',
    subtitle: 'Ask someone\'s name and introduce yourself with confidence',
    durationMin: 12,
    xpReward: 35,
    intro: {
      overview: 'Now you\'ll learn how to break the ice! Ask someone their name, state your own name, and say "Pleased to meet you!" This is the core formula for making Chinese friends.',
      grammarRule: 'Word order in questions: In Chinese, you do NOT invert word order for questions! You keep the exact same statement order and replace the missing piece with the question word: 你叫什么名字？(You are called WHAT name?) ➔ 我叫李明。(I am called Li Ming.)',
      culturalNote: 'In Chinese names, the family name (surname) comes FIRST, followed by the given name. For example, in 姚明 (Yáo Míng), Yáo is the family name and Míng is the given name.',
      keyTakeaway: 'Pattern: 我叫 [Your Name] (Wǒ jiào...) = My name is [Your Name]. Easy and natural!'
    },
    vocabulary: [
      { id: 'v-wo', hanzi: '我', pinyin: 'wǒ', english: 'I / me', level: 1, category: 'Pronouns', exampleHanzi: '我是学生。', examplePinyin: 'Wǒ shì xuésheng.', exampleEnglish: 'I am a student.' },
      { id: 'v-jiao', hanzi: '叫', pinyin: 'jiào', english: 'to be called / to call', level: 1, category: 'Verbs', exampleHanzi: '我叫大卫。', examplePinyin: 'Wǒ jiào Dàwèi.', exampleEnglish: 'My name is David.' },
      { id: 'v-shenme', hanzi: '什么', pinyin: 'shénme', english: 'what', level: 1, category: 'Question Words', exampleHanzi: '这是什么？', examplePinyin: 'Zhè shì shénme?', exampleEnglish: 'What is this?' },
      { id: 'v-mingzi', hanzi: '名字', pinyin: 'míngzi', english: 'name', level: 1, category: 'Nouns', exampleHanzi: '你的名字', examplePinyin: 'nǐ de míngzi', exampleEnglish: 'Your name' },
      { id: 'v-renshi', hanzi: '认识', pinyin: 'rènshi', english: 'to know / to recognize / to meet', level: 1, category: 'Verbs', exampleHanzi: '认识你很高兴。', examplePinyin: 'Rènshi nǐ hěn gāoxìng.', exampleEnglish: 'Pleased to meet you.' },
      { id: 'v-gaoxing', hanzi: '高兴', pinyin: 'gāoxìng', english: 'happy / glad', level: 1, category: 'Adjectives', exampleHanzi: '我也很高兴。', examplePinyin: 'Wǒ yě hěn gāoxìng.', exampleEnglish: 'I am also glad.' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Zhang Wei', hanzi: '你好！请问，你叫什么名字？', pinyin: 'Nǐ hǎo! Qǐngwèn, nǐ jiào shénme míngzi?', english: 'Hello! Excuse me, what is your name?', audioText: '你好！请问，你叫什么名字？' },
      { speaker: 'user', name: 'You', hanzi: '你好！我叫大卫。你呢？', pinyin: 'Nǐ hǎo! Wǒ jiào Dàwèi. Nǐ ne?', english: 'Hello! I am called David. What about you?', audioText: '你好！我叫大卫。你呢？' },
      { speaker: 'partner', name: 'Zhang Wei', hanzi: '我叫张伟。很高兴认识你！', pinyin: 'Wǒ jiào Zhāng Wěi. Hěn gāoxìng rènshi nǐ!', english: 'I am called Zhang Wei. Very glad to meet you!', audioText: '我叫张伟。很高兴认识你！' },
      { speaker: 'user', name: 'You', hanzi: '我也很高兴认识你！', pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ!', english: 'I am also very glad to meet you!', audioText: '我也很高兴认识你！' }
    ],
    pronunciationFocus: {
      title: 'The "sh" in 什么 (shénme) and 认识 (rènshi)',
      pinyinRule: 'Mandarin "sh" is retroflex: curl your tongue tip upward toward the hard palate (behind upper teeth).',
      targetWords: [
        { hanzi: '什么', pinyin: 'shénme', english: 'What', toneTip: 'Rising 2nd tone on shén, soft neutral on me' },
        { hanzi: '认识', pinyin: 'rènshi', english: 'To meet / know', toneTip: 'Falling 4th tone on rèn, neutral on shi' },
        { hanzi: '高兴', pinyin: 'gāoxìng', english: 'Happy', toneTip: '1st tone high flat (gāo) + 4th tone falling (xìng)' }
      ]
    },
    exercises: [
      {
        id: 'ex-1-3-1',
        type: 'sentence-order',
        prompt: 'Build the sentence: "What is your name?"',
        correctAnswer: ['你', '叫', '什么', '名字'],
        options: ['你', '叫', '什么', '名字', '我', '好'],
        explanation: '你 (you) + 叫 (are called) + 什么 (what) + 名字 (name)？'
      },
      {
        id: 'ex-1-3-2',
        type: 'fill-in-blank',
        prompt: 'To say "My name is Anna", fill in the blank: 我____安娜。',
        options: ['叫 (jiào)', '好 (hǎo)', '吗 (ma)', '什么 (shénme)'],
        correctAnswer: '叫 (jiào)',
        explanation: '我叫 (Wǒ jiào...) is the standard way to say "My name is...".'
      },
      {
        id: 'ex-1-3-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is being expressed?',
        audioText: '很高兴认识你',
        options: ['Very nice to meet you', 'What is your name?', 'Where are you going?', 'Thank you very much'],
        correctAnswer: 'Very nice to meet you',
        explanation: '很高兴认识你 (Hěn gāoxìng rènshi nǐ) = Very glad to meet/know you.'
      },
      {
        id: 'ex-1-3-4',
        type: 'multiple-choice',
        prompt: 'How do you say "I am ALSO very glad to meet you"?',
        options: [
          '我也很高兴认识你 (Wǒ yě hěn gāoxìng rènshi nǐ)',
          '你好吗 (Nǐ hǎo ma)',
          '你叫什么名字 (Nǐ jiào shénme míngzi)',
          '对不起没关系 (Duìbuqǐ méi guānxi)'
        ],
        correctAnswer: '我也很高兴认识你 (Wǒ yě hěn gāoxìng rènshi nǐ)',
        explanation: '也 (yě) means "also / too". Place it before the adjective: 我也很高兴！'
      }
    ],
    speakingChallenge: {
      targetHanzi: '你叫什么名字？我叫李明。',
      targetPinyin: 'Nǐ jiào shénme míngzi? Wǒ jiào Lǐ Míng.',
      targetEnglish: 'What is your name? My name is Li Ming.',
      phoneticGuide: 'Nee jyao shun-muh ming-zuh? Waw jyao Lee Ming.',
      tip: 'Keep "shénme" light and rhythmic!'
    },
    summary: [
      '你叫什么名字？(Nǐ jiào shénme míngzi?) = What is your name?',
      '我叫…… (Wǒ jiào...) = My name is...',
      '很高兴认识你！(Hěn gāoxìng rènshi nǐ!) = Nice to meet you!',
      '也 (yě) = also/too. 我也很高兴！(Wǒ yě hěn gāoxìng!) = I am also glad!'
    ]
  },

  {
    id: 'l1-4',
    level: 1,
    order: 4,
    title: 'Numbers 1-100, Dates & Time',
    chineseTitle: '数字、日期与时间',
    subtitle: 'Count effortlessly, tell the time, and ask dates',
    durationMin: 14,
    xpReward: 35,
    intro: {
      overview: 'Chinese numbers are extraordinarily logical! Once you know 1 through 10, counting up to 99 is purely mathematical: 11 is "ten one" (shí-yī), 20 is "two tens" (èr-shí), and 58 is "five tens eight" (wǔ-shí-bā). Months are simply "Number + 月 (yuè)"!',
      grammarRule: 'Time order: In Chinese, time always goes from LARGEST unit to SMALLEST unit: Year ➔ Month ➔ Day ➔ Time of Day ➔ Hour ➔ Minute.',
      culturalNote: 'Chinese hand gestures for numbers 1 to 10 are unique! You can signal any number from 1 to 10 with just ONE hand. 6 looks like a "hang loose" sign, 8 looks like a gun gesture, and 10 is crossed fingers.',
      keyTakeaway: 'Form numbers with logic: 20 = èrshí, 35 = sānshíwǔ, 99 = jiǔshíjiǔ. No irregular numbers!'
    },
    vocabulary: [
      { id: 'v-num1', hanzi: '一', pinyin: 'yī', english: 'one', level: 1, category: 'Numbers', exampleHanzi: '一个人', examplePinyin: 'yí gè rén', exampleEnglish: 'One person' },
      { id: 'v-num2', hanzi: '二', pinyin: 'èr', english: 'two', level: 1, category: 'Numbers', exampleHanzi: '二十', examplePinyin: 'èrshí', exampleEnglish: 'Twenty' },
      { id: 'v-num3', hanzi: '三', pinyin: 'sān', english: 'three', level: 1, category: 'Numbers', exampleHanzi: '三月', examplePinyin: 'sānyuè', exampleEnglish: 'March' },
      { id: 'v-num4', hanzi: '四', pinyin: 'sì', english: 'four', level: 1, category: 'Numbers', exampleHanzi: '四点', examplePinyin: 'sì diǎn', exampleEnglish: '4 o\'clock' },
      { id: 'v-num5', hanzi: '五', pinyin: 'wǔ', english: 'five', level: 1, category: 'Numbers', exampleHanzi: '五天', examplePinyin: 'wǔ tiān', exampleEnglish: 'Five days' },
      { id: 'v-num10', hanzi: '十', pinyin: 'shí', english: 'ten', level: 1, category: 'Numbers', exampleHanzi: '十五', examplePinyin: 'shíwǔ', exampleEnglish: 'Fifteen' },
      { id: 'v-dian', hanzi: '点', pinyin: 'diǎn', english: 'o\'clock / point', level: 1, category: 'Time', exampleHanzi: '现在几点？', examplePinyin: 'Xiànzài jǐ diǎn?', exampleEnglish: 'What time is it now?' },
      { id: 'v-xianzai', hanzi: '现在', pinyin: 'xiànzài', english: 'now', level: 1, category: 'Time', exampleHanzi: '现在三点。', examplePinyin: 'Xiànzài sān diǎn.', exampleEnglish: 'It\'s 3 o\'clock now.' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Xiao Ming', hanzi: '请问，现在几点？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn?', english: 'Excuse me, what time is it now?', audioText: '请问，现在几点？' },
      { speaker: 'user', name: 'You', hanzi: '现在下午两点半。', pinyin: 'Xiànzài xiàwǔ liǎng diǎn bàn.', english: 'It is now 2:30 PM.', audioText: '现在下午两点半。' },
      { speaker: 'partner', name: 'Xiao Ming', hanzi: '谢谢！今天星期几？', pinyin: 'Xièxie! Jīntiān xīngqī jǐ?', english: 'Thank you! What day of the week is today?', audioText: '谢谢！今天星期几？' },
      { speaker: 'user', name: 'You', hanzi: '今天星期五。', pinyin: 'Jīntiān xīngqī wǔ.', english: 'Today is Friday.', audioText: '今天星期五。' }
    ],
    pronunciationFocus: {
      title: 'Four vs Ten: sì (四) vs shí (十)',
      pinyinRule: 'One of the most famous tongue-twisters in Chinese! 四 (sì) has flat tongue against teeth (Tone 4). 十 (shí) curls tongue upward with rising pitch (Tone 2).',
      targetWords: [
        { hanzi: '四', pinyin: 'sì', english: 'Four', toneTip: 'Flat teeth "suh", sharp downward 4th tone' },
        { hanzi: '十', pinyin: 'shí', english: 'Ten', toneTip: 'Curled tongue "shur", rising 2nd tone' },
        { hanzi: '十四', pinyin: 'shísì', english: 'Fourteen', toneTip: 'shí (up) + sì (down)' },
        { hanzi: '四十', pinyin: 'sìshí', english: 'Forty', toneTip: 'sì (down) + shí (up)' },
      ]
    },
    exercises: [
      {
        id: 'ex-1-4-1',
        type: 'multiple-choice',
        prompt: 'How do you say the number 35 in Mandarin?',
        options: ['三十五 (sānshíwǔ)', '五十三 (wǔshísān)', '三五 (sānwǔ)', '十五三 (shíwǔsān)'],
        correctAnswer: '三十五 (sānshíwǔ)',
        explanation: '3 (三) x 10 (十) + 5 (五) = 三十五 (35).'
      },
      {
        id: 'ex-1-4-2',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What time is stated?',
        audioText: '现在八点',
        options: ['It is 8 o\'clock', 'It is 7 o\'clock', 'It is 10 o\'clock', 'It is 4 o\'clock'],
        correctAnswer: 'It is 8 o\'clock',
        explanation: '八点 (bā diǎn) = 8 o\'clock. 现在八点 = It is now 8 o\'clock.'
      },
      {
        id: 'ex-1-4-3',
        type: 'sentence-order',
        prompt: 'Arrange words to ask: "What time is it now?"',
        correctAnswer: ['现在', '几', '点'],
        options: ['现在', '几', '点', '好', '吗'],
        explanation: '现在 (now) + 几 (how many) + 点 (o\'clock) = 现在几点？'
      },
      {
        id: 'ex-1-4-4',
        type: 'fill-in-blank',
        prompt: 'Days of the week are: 星期 (xīngqī) + number. Monday is 星期一. What is Friday?',
        options: ['星期五 (xīngqī wǔ)', '星期四 (xīngqī sì)', '星期六 (xīngqī liù)', '星期天 (xīngqī tiān)'],
        correctAnswer: '星期五 (xīngqī wǔ)',
        explanation: 'Friday is the 5th day of the work week: 星期五 (xīngqī wǔ)!'
      }
    ],
    speakingChallenge: {
      targetHanzi: '现在几点？现在三点。',
      targetPinyin: 'Xiànzài jǐ diǎn? Xiànzài sān diǎn.',
      targetEnglish: 'What time is it now? It is 3 o\'clock.',
      phoneticGuide: 'Shyen-zeye jee dyan? Shyen-zeye sahn dyan.',
      tip: 'Keep "jǐ" and "diǎn" distinct, and end "sān diǎn" smoothly!'
    },
    summary: [
      'Numbers are compounded: 11 = shí-yī, 20 = èr-shí, 45 = sì-shí-wǔ.',
      '现在几点？(Xiànzài jǐ diǎn?) = What time is it now?',
      'Days of week: 星期一 (Mon) through 星期六 (Sat), and 星期天/日 (Sun).',
      'Remember two of something uses 两 (liǎng), not 二 (èr): 两点 (2 o\'clock).'
    ]
  },

  {
    id: 'l1-5',
    level: 1,
    order: 5,
    title: 'Yes/No Questions with 吗 & 是/不是',
    chineseTitle: '是非问句与“是/不是”',
    subtitle: 'Form instant questions and confirm facts with "to be"',
    durationMin: 12,
    xpReward: 35,
    intro: {
      overview: 'In Chinese, turning any sentence into a yes/no question is pure magic: just slap "吗" (ma) at the very end of the sentence! No changing word order, no helper verbs like "do/does". Also learn 是 (shì = to be / yes) and 不是 (bú shì = is not / no).',
      grammarRule: 'Statement + 吗 = Question. Example: 你是学生。(You are a student.) ➔ 你是学生吗？(Are you a student?) Answer: 是 (Yes) or 不是 (No).',
      culturalNote: 'Chinese doesn\'t have a single word for "yes" like in English. Instead, you repeat the main verb! If someone asks "你吃吗？" (Do you eat?), you answer "吃" (Eat = yes) or "不吃" (Don\'t eat = no).',
      keyTakeaway: 'Master 是 (shì) and 不是 (bú shì). Put 吗 at the end for effortless questions.'
    },
    vocabulary: [
      { id: 'v-shi', hanzi: '是', pinyin: 'shì', english: 'to be (am/is/are) / yes', level: 1, category: 'Verbs', exampleHanzi: '我是老师。', examplePinyin: 'Wǒ shì lǎoshī.', exampleEnglish: 'I am a teacher.' },
      { id: 'v-bushi', hanzi: '不是', pinyin: 'bú shì', english: 'is not / no', level: 1, category: 'Verbs', exampleHanzi: '我不是美国人。', examplePinyin: 'Wǒ bú shì Měiguórén.', exampleEnglish: 'I am not American.' },
      { id: 'v-xuesheng', hanzi: '学生', pinyin: 'xuésheng', english: 'student', level: 1, category: 'Nouns', exampleHanzi: '他是学生。', examplePinyin: 'Tā shì xuésheng.', exampleEnglish: 'He is a student.' },
      { id: 'v-laoshi', hanzi: '老师', pinyin: 'lǎoshī', english: 'teacher', level: 1, category: 'Nouns', exampleHanzi: '张老师', examplePinyin: 'Zhāng lǎoshī', exampleEnglish: 'Teacher Zhang' },
      { id: 'v-zhongguo', hanzi: '中国', pinyin: 'Zhōngguó', english: 'China', level: 1, category: 'Countries', exampleHanzi: '中国人', examplePinyin: 'Zhōngguórén', exampleEnglish: 'Chinese person' },
      { id: 'v-ren', hanzi: '人', pinyin: 'rén', english: 'person / people', level: 1, category: 'Nouns', exampleHanzi: '好人', examplePinyin: 'hǎorén', exampleEnglish: 'Good person' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Lin Daiyu', hanzi: '请问，你是中国人吗？', pinyin: 'Qǐngwèn, nǐ shì Zhōngguórén ma?', english: 'Excuse me, are you Chinese?', audioText: '请问，你是中国人吗？' },
      { speaker: 'user', name: 'You', hanzi: '不是，我是美国人。你在学中文吗？', pinyin: 'Bú shì, wǒ shì Měiguórén. Nǐ zài xué Zhōngwén ma?', english: 'No, I am American. Are you studying Chinese?', audioText: '不是，我是美国人。' },
      { speaker: 'partner', name: 'Lin Daiyu', hanzi: '我是中文老师！', pinyin: 'Wǒ shì Zhōngwén lǎoshī!', english: 'I am a Chinese teacher!', audioText: '我是中文老师！' }
    ],
    pronunciationFocus: {
      title: 'Pronouncing 是 (shì) and 不是 (bú shì)',
      pinyinRule: 'Don\'t say "she"! The sound "shì" is retroflex, sounding closer to "sure" with a sharp falling 4th tone. In 不是, bù turns into 2nd tone: bú shì!',
      targetWords: [
        { hanzi: '是', pinyin: 'shì', english: 'Is / Am / Are', toneTip: 'Sharp falling tone: decisive!' },
        { hanzi: '不是', pinyin: 'bú shì', english: 'Is not', toneTip: 'bú (rising) + shì (falling)' },
        { hanzi: '老师', pinyin: 'lǎoshī', english: 'Teacher', toneTip: 'lǎo (3rd dipping) + shī (1st high flat)' }
      ]
    },
    exercises: [
      {
        id: 'ex-1-5-1',
        type: 'multiple-choice',
        prompt: 'How do you turn "你是老师" (You are a teacher) into a question?',
        options: ['你是老师吗？', '是你是老师？', '你是不是老师吗？', '老师你是？'],
        correctAnswer: '你是老师吗？',
        explanation: 'Simply append 吗 (ma) to the end of the statement.'
      },
      {
        id: 'ex-1-5-2',
        type: 'fill-in-blank',
        prompt: 'To say "I am NOT a student", fill in: 我____学生。',
        options: ['不是 (bú shì)', '叫 (jiào)', '好 (hǎo)', '吗 (ma)'],
        correctAnswer: '不是 (bú shì)',
        explanation: '不是 (bú shì) negates the verb 是.'
      },
      {
        id: 'ex-1-5-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the speaker asking?',
        audioText: '你是学生吗',
        options: ['Are you a student?', 'Are you a teacher?', 'Where is the school?', 'What is your name?'],
        correctAnswer: 'Are you a student?',
        explanation: '你是学生吗 (Nǐ shì xuésheng ma) = Are you a student?'
      },
      {
        id: 'ex-1-5-4',
        type: 'sentence-order',
        prompt: 'Build: "I am a Chinese teacher."',
        correctAnswer: ['我', '是', '中文', '老师'],
        options: ['我', '是', '中文', '老师', '吗', '不是'],
        explanation: '我 (I) + 是 (am) + 中文 (Chinese) + 老师 (teacher).'
      }
    ],
    speakingChallenge: {
      targetHanzi: '我是学生，我不是老师。',
      targetPinyin: 'Wǒ shì xuésheng, wǒ bú shì lǎoshī.',
      targetEnglish: 'I am a student, I am not a teacher.',
      phoneticGuide: 'Waw sure shweh-shung, waw boo sure laow-shur.',
      tip: 'Notice the contrast between 是 (affirmative) and 不是 (negative).'
    },
    summary: [
      'Add 吗 (ma) at the end of any statement to make a yes/no question.',
      '是 (shì) = to be (am/is/are).',
      '不是 (bú shì) = is not / am not (remember tone sandhi: bú shì).',
      'Country + 人 (rén) = nationality! (中国 + 人 = Chinese; 美国 + 人 = American).'
    ]
  },

  {
    id: 'l1-6',
    level: 1,
    order: 6,
    title: 'Basic Sentence Structure',
    chineseTitle: '中文基本语序',
    subtitle: 'The golden formula: Subject + When + Where + How + Verb + Object',
    durationMin: 14,
    xpReward: 40,
    intro: {
      overview: 'Ever wondered why English speakers make funny mistakes in Chinese? Because in English we say "I study Chinese AT HOME EVERY DAY", putting time and place at the end. In Mandarin, time and place ALWAYS come BEFORE the action!',
      grammarRule: 'The Golden Formula: [WHO] + [WHEN] + [WHERE] + [VERB] + [WHAT]. Example: 我 (Who) + 每天 (When) + 在家 (Where) + 学 (Verb) + 中文 (What) = "I study Chinese at home every day!"',
      culturalNote: 'Thinking in Chinese requires zooming from big context to specific action: First the setting (time & place), then what actually happens inside that setting.',
      keyTakeaway: 'Remember: Setting comes BEFORE the action! Never put time or location at the very end of your sentence.'
    },
    vocabulary: [
      { id: 'v-xue', hanzi: '学', pinyin: 'xué', english: 'to study / to learn', level: 1, category: 'Verbs', exampleHanzi: '学中文', examplePinyin: 'xué Zhōngwén', exampleEnglish: 'Study Chinese' },
      { id: 'v-zai', hanzi: '在', pinyin: 'zài', english: 'at / in / on (location)', level: 1, category: 'Prepositions', exampleHanzi: '在中国', examplePinyin: 'zài Zhōngguó', exampleEnglish: 'In China' },
      { id: 'v-jia', hanzi: '家', pinyin: 'jiā', english: 'home / family', level: 1, category: 'Nouns', exampleHanzi: '在家', examplePinyin: 'zài jiā', exampleEnglish: 'At home' },
      { id: 'v-meitian', hanzi: '每天', pinyin: 'měitiān', english: 'every day', level: 1, category: 'Time', exampleHanzi: '每天练习', examplePinyin: 'měitiān liànxí', exampleEnglish: 'Practice every day' },
      { id: 'v-zhongwen', hanzi: '中文', pinyin: 'Zhōngwén', english: 'Chinese language', level: 1, category: 'Language', exampleHanzi: '说中文', examplePinyin: 'shuō Zhōngwén', exampleEnglish: 'Speak Chinese' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Chen Chen', hanzi: '你每天在哪里学中文？', pinyin: 'Nǐ měitiān zài nǎlǐ xué Zhōngwén?', english: 'Where do you study Chinese every day?', audioText: '你每天在哪里学中文？' },
      { speaker: 'user', name: 'You', hanzi: '我每天在家用这个网站学中文！', pinyin: 'Wǒ měitiān zài jiā yòng zhège wǎngzhàn xué Zhōngwén!', english: 'I study Chinese at home using this website every day!', audioText: '我每天在家学中文！' },
      { speaker: 'partner', name: 'Chen Chen', hanzi: '太棒了！你的发音很好！', pinyin: 'Tài bàng le! Nǐ de fāyīn hěn hǎo!', english: 'Awesome! Your pronunciation is very good!', audioText: '太棒了！你的发音很好！' }
    ],
    pronunciationFocus: {
      title: 'Connecting words smoothly into whole sentences',
      pinyinRule: 'Mandarin flow relies on natural breath phrasing: pause slightly after the subject/time, then speak the verb and object together smoothly.',
      targetWords: [
        { hanzi: '学中文', pinyin: 'xué Zhōngwén', english: 'Study Chinese', toneTip: 'xué (2nd rising) + Zhōng (1st flat) + wén (2nd rising)' },
        { hanzi: '在家', pinyin: 'zài jiā', english: 'At home', toneTip: 'zài (4th falling) + jiā (1st flat)' },
        { hanzi: '每天', pinyin: 'měitiān', english: 'Every day', toneTip: 'měi (3rd dipping) + tiān (1st high flat)' }
      ]
    },
    exercises: [
      {
        id: 'ex-1-6-1',
        type: 'sentence-order',
        prompt: 'Arrange into correct Chinese word order: "I study Chinese at home."',
        correctAnswer: ['我', '在', '家', '学', '中文'],
        options: ['我', '在', '家', '学', '中文', '好'],
        explanation: 'Subject (我) + Location (在家) + Verb (学) + Object (中文).'
      },
      {
        id: 'ex-1-6-2',
        type: 'multiple-choice',
        prompt: 'Which sentence has natural, correct Chinese word order?',
        options: [
          '我明天在学校见你。(I tomorrow at school see you)',
          '我见你明天在学校。(I see you tomorrow at school)',
          '在学校我见你明天。(At school I see you tomorrow)',
          '我见你在学校明天。(I see you at school tomorrow)'
        ],
        correctAnswer: '我明天在学校见你。(I tomorrow at school see you)',
        explanation: 'Time (明天) and Location (在学校) come right before the verb (见)!'
      },
      {
        id: 'ex-1-6-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the meaning?',
        audioText: '我每天学中文',
        options: ['I study Chinese every day', 'I teach Chinese at school', 'I like Chinese food', 'I am going to China tomorrow'],
        correctAnswer: 'I study Chinese every day',
        explanation: '我 (I) + 每天 (every day) + 学中文 (study Chinese).'
      }
    ],
    speakingChallenge: {
      targetHanzi: '我每天在家学中文。',
      targetPinyin: 'Wǒ měitiān zài jiā xué Zhōngwén.',
      targetEnglish: 'I study Chinese at home every day.',
      phoneticGuide: 'Waw may-tyen zeye jyah shweh Joong-wun.',
      tip: 'Practice in two rhythm blocks: [Wǒ měitiān zài jiā] ... [xué Zhōngwén].'
    },
    summary: [
      'Golden Rule: [Subject] + [Time] + [Location] + [Verb] + [Object].',
      'Time and place always set the scene BEFORE the action happens.',
      '在 (zài) indicates location: 在家 (at home), 在中国 (in China).',
      'Congratulations! You have completed Level 1: Absolute Beginner foundations!'
    ]
  },

  // ==========================================
  // LEVEL 2: EVERYDAY CONVERSATIONS
  // ==========================================
  {
    id: 'l2-1',
    level: 2,
    order: 7,
    title: 'Ordering Food & Boba Like a Local',
    chineseTitle: '点餐与点奶茶',
    subtitle: 'Order delicious dishes, customize sweetness/ice, and ask for the bill',
    durationMin: 14,
    xpReward: 40,
    intro: {
      overview: 'Ordering food in China is one of life\'s greatest joys! Learn the polite formula: "我要……" (Wǒ yào... = I want) or "来一个……" (Lái yí gè... = Bring me one...). Plus how to customize boba milk tea like a true local!',
      grammarRule: 'Measure words: In Chinese, you cannot say "one tea" directly. You say "one CUP of tea" = 一杯茶 (yì bēi chá). Individual items use 个 (gè) or 份 (fèn: a serving/portion).',
      culturalNote: 'To call the server politely in mainland China, call out "服务员！" (Fúwùyuán! = Server!) warmly. To ask for the bill, simply say "买单！" (Mǎidān!).',
      keyTakeaway: 'Formulas: "我要一杯……" (I want a cup of...) and "买单！" (Check please!).'
    },
    vocabulary: [
      { id: 'v-yao', hanzi: '要', pinyin: 'yào', english: 'to want / to need', level: 2, category: 'Verbs', exampleHanzi: '我要这个。', examplePinyin: 'Wǒ yào zhège.', exampleEnglish: 'I want this one.' },
      { id: 'v-naicha', hanzi: '奶茶', pinyin: 'nǎichá', english: 'milk tea (boba)', level: 2, category: 'Food & Drink', exampleHanzi: '珍珠奶茶', examplePinyin: 'zhēnzhū nǎichá', exampleEnglish: 'Bubble / pearl milk tea' },
      { id: 'v-bei', hanzi: '杯', pinyin: 'bēi', english: 'cup / glass (measure word)', level: 2, category: 'Measure Words', exampleHanzi: '一杯水', examplePinyin: 'yì bēi shuǐ', exampleEnglish: 'A cup of water' },
      { id: 'v-maidan', hanzi: '买单', pinyin: 'mǎidān', english: 'to pay the bill / check please', level: 2, category: 'Dining', exampleHanzi: '服务员，买单！', examplePinyin: 'Fúwùyuán, mǎidān!', exampleEnglish: 'Server, the bill please!' },
      { id: 'v-haochi', hanzi: '好吃', pinyin: 'hǎochī', english: 'delicious / tasty', level: 2, category: 'Dining', exampleHanzi: '这个菜真好吃！', examplePinyin: 'Zhège cài zhēn hǎochī!', exampleEnglish: 'This dish is so tasty!' },
      { id: 'v-fuwuyuan', hanzi: '服务员', pinyin: 'fúwùyuán', english: 'waiter / waitress / server', level: 2, category: 'People', exampleHanzi: '服务员，请点菜。', examplePinyin: 'Fúwùyuán, qǐng diǎncài.', exampleEnglish: 'Server, order please.' }
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Server', hanzi: '欢迎光临！您想喝点什么？', pinyin: 'Huānyíng guānglín! Nín xiǎng hē diǎn shénme?', english: 'Welcome! What would you like to drink?', audioText: '欢迎光临！您想喝点什么？' },
      { speaker: 'user', name: 'You', hanzi: '我要一杯珍珠奶茶，半糖，少冰。', pinyin: 'Wǒ yào yì bēi zhēnzhū nǎichá, bàn táng, shǎo bīng.', english: 'I want one cup of pearl milk tea, half sugar, less ice.', audioText: '我要一杯珍珠奶茶，半糖，少冰。' },
      { speaker: 'partner', name: 'Server', hanzi: '好的，一共二十块钱。', pinyin: 'Hǎo de, yígòng èrshí kuài qián.', english: 'Sure, 20 RMB altogether.', audioText: '好的，一共二十块钱。' },
      { speaker: 'user', name: 'You', hanzi: '好，扫码支付，谢谢！', pinyin: 'Hǎo, sǎomǎ zhīfù, xièxie!', english: 'Great, paying with QR scan, thank you!', audioText: '好，扫码支付，谢谢！' }
    ],
    pronunciationFocus: {
      title: 'Boba customizations: bàn táng (半糖) & shǎo bīng (少冰)',
      pinyinRule: '半 (bàn, 4th) + 糖 (táng, 2nd) = Half sugar. 少 (shǎo, 3rd) + 冰 (bīng, 1st) = Less ice.',
      targetWords: [
        { hanzi: '奶茶', pinyin: 'nǎichá', english: 'Milk tea', toneTip: 'nǎi (3rd dip) + chá (2nd rise)' },
        { hanzi: '买单', pinyin: 'mǎidān', english: 'Bill please', toneTip: 'mǎi (3rd dip) + dān (1st flat)' },
        { hanzi: '好吃', pinyin: 'hǎochī', english: 'Delicious', toneTip: 'hǎo (3rd dip) + chī (1st flat)' }
      ]
    },
    exercises: [
      {
        id: 'ex-2-1-1',
        type: 'sentence-order',
        prompt: 'Order in Chinese: "I want one cup of milk tea."',
        correctAnswer: ['我', '要', '一', '杯', '奶茶'],
        options: ['我', '要', '一', '杯', '奶茶', '好吃'],
        explanation: '我 (I) + 要 (want) + 一杯 (one cup) + 奶茶 (milk tea).'
      },
      {
        id: 'ex-2-1-2',
        type: 'multiple-choice',
        prompt: 'When you are finished eating and want to pay, what do you say to the server?',
        options: ['买单！(Mǎidān!)', '对不起！(Duìbuqǐ!)', '再见！(Zàijiàn!)', '你叫什么？(Nǐ jiào shénme?)'],
        correctAnswer: '买单！(Mǎidān!)',
        explanation: '买单 (Mǎidān) is the universal phrase for "Check please!".'
      },
      {
        id: 'ex-2-1-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the speaker ordering?',
        audioText: '我要一杯珍珠奶茶',
        options: ['One cup of pearl milk tea', 'Two cups of hot coffee', 'One bottle of mineral water', 'A bowl of beef noodles'],
        correctAnswer: 'One cup of pearl milk tea',
        explanation: '我要一杯珍珠奶茶 = I want one cup of pearl milk tea.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '我要一杯珍珠奶茶，谢谢！',
      targetPinyin: 'Wǒ yào yì bēi zhēnzhū nǎichá, xièxie!',
      targetEnglish: 'I want one cup of pearl milk tea, thank you!',
      phoneticGuide: 'Waw yào yee bay jhun-jhoo nye-chá, shyeh-shyeh!',
      tip: 'Sound friendly and decisive on "wǒ yào"!'
    },
    summary: [
      '我要…… (Wǒ yào...) = I want... (Polite & direct when ordering).',
      '一杯…… (yì bēi...) = One cup of... (boba, water, coffee).',
      'Customizing: 半糖 (bàn táng = half sugar), 去冰 (qù bīng = no ice), 少冰 (shǎo bīng = less ice).',
      '买单 (mǎidān) = The bill / check please.'
    ]
  },

  {
    id: 'l2-2',
    level: 2,
    order: 8,
    title: 'Shopping, Prices & Friendly Bargaining',
    chineseTitle: '购物与砍价',
    subtitle: 'Ask how much something costs and ask for a discount',
    durationMin: 14,
    xpReward: 40,
    intro: {
      overview: 'Shopping in local markets and shops is a thrilling cultural experience. Learn the golden question "这个多少钱？" (How much is this?) and the bargaining phrase "太贵了，便宜一点吧！" (Too expensive, make it cheaper!).',
      grammarRule: 'Currency in spoken Chinese: The formal word for currency is 元 (yuán), but in spoken daily Mandarin, 99% of people say 块 (kuài)! Example: 50 yuan is spoken as 五十块 (wǔshí kuài).',
      culturalNote: 'Friendly bargaining is an art form in traditional markets and souvenir stalls. Keep a warm smile, joke lightly, and use "便宜一点吧" with a soft tone particle 吧 (ba).',
      keyTakeaway: 'Formula: 这个多少钱？(How much is this?) ➔ 太贵了！(Too expensive!) ➔ 便宜一点吧！(Make it cheaper!).'
    },
    vocabulary: [
      { id: 'v-duoshao', hanzi: '多少', pinyin: 'duōshao', english: 'how much / how many', level: 2, category: 'Question Words', exampleHanzi: '多少人？', examplePinyin: 'Duōshao rén?', exampleEnglish: 'How many people?' },
      { id: 'v-qian', hanzi: '钱', pinyin: 'qián', english: 'money', level: 2, category: 'Shopping', exampleHanzi: '没钱', examplePinyin: 'méi qián', exampleEnglish: 'Have no money' },
      { id: 'v-kuai', hanzi: '块', pinyin: 'kuài', english: 'bucks / yuan (spoken currency unit)', level: 2, category: 'Shopping', exampleHanzi: '十块钱', examplePinyin: 'shí kuài qián', exampleEnglish: '10 kuai / yuan' },
      { id: 'v-gui', hanzi: '贵', pinyin: 'guì', english: 'expensive', level: 2, category: 'Shopping', exampleHanzi: '太贵了！', examplePinyin: 'Tài guì le!', exampleEnglish: 'Too expensive!' },
      { id: 'v-pianyi', hanzi: '便宜', pinyin: 'piányi', english: 'cheap / inexpensive', level: 2, category: 'Shopping', exampleHanzi: '便宜一点', examplePinyin: 'piányi yìdiǎn', exampleEnglish: 'A bit cheaper' },
      { id: 'v-zhege', hanzi: '这个', pinyin: 'zhège', english: 'this / this one', level: 2, category: 'Pronouns', exampleHanzi: '这个很好。', examplePinyin: 'Zhège hěn hǎo.', exampleEnglish: 'This one is very good.' }
    ],
    conversationSample: [
      { speaker: 'user', name: 'You', hanzi: '老板，请问这个多少钱？', pinyin: 'Lǎobǎn, qǐngwèn zhège duōshao qián?', english: 'Boss, excuse me, how much is this one?', audioText: '老板，请问这个多少钱？' },
      { speaker: 'partner', name: 'Shopkeeper', hanzi: '这个一百块。', pinyin: 'Zhège yìbǎi kuài.', english: 'This one is 100 kuai.', audioText: '这个一百块。' },
      { speaker: 'user', name: 'You', hanzi: '太贵了！八十块可以吗？便宜一点吧！', pinyin: 'Tài guì le! Bāshí kuài kěyǐ ma? Piányi yìdiǎn ba!', english: 'Too expensive! Is 80 kuai okay? Make it a little cheaper!', audioText: '太贵了！便宜一点吧！' },
      { speaker: 'partner', name: 'Shopkeeper', hanzi: '行行行，看你中文这么好，八十卖给你！', pinyin: 'Xíng xíng xíng, kàn nǐ Zhōngwén zhème hǎo, bāshí mài gěi nǐ!', english: 'Alright alright, seeing that your Chinese is so good, 80 for you!', audioText: '行，八十卖给你！' }
    ],
    pronunciationFocus: {
      title: 'The phrase "piányi yìdiǎn ba" (便宜一点吧)',
      pinyinRule: 'Notice that 宜 in piányi is soft/neutral. 一点 (yìdiǎn) has a dipping 3rd tone. 吧 (ba) is a gentle suggestion particle.',
      targetWords: [
        { hanzi: '多少钱', pinyin: 'duōshao qián', english: 'How much money', toneTip: 'duō (1st) + shao (neutral) + qián (2nd rising)' },
        { hanzi: '太贵了', pinyin: 'tài guì le', english: 'Too expensive', toneTip: 'tài (4th) + guì (4th) + le (neutral)' },
        { hanzi: '可以吗', pinyin: 'kěyǐ ma', english: 'Is it okay?', toneTip: 'kě (3rd) + yǐ (3rd ➔ sounds like 2nd) + ma (neutral)' }
      ]
    },
    exercises: [
      {
        id: 'ex-2-2-1',
        type: 'sentence-order',
        prompt: 'Build: "How much is this?"',
        correctAnswer: ['这个', '多少', '钱'],
        options: ['这个', '多少', '钱', '吗', '贵'],
        explanation: '这个 (this one) + 多少钱 (how much money) = 这个多少钱？'
      },
      {
        id: 'ex-2-2-2',
        type: 'multiple-choice',
        prompt: 'What is the natural daily spoken word for Chinese currency (Yuan)?',
        options: ['块 (kuài)', '美元 (Měiyuán)', '英镑 (Yīngbàng)', '分 (fēn)'],
        correctAnswer: '块 (kuài)',
        explanation: 'In everyday spoken Chinese, people almost always say 块 (kuài) instead of 元 (yuán).'
      },
      {
        id: 'ex-2-2-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the customer asking for?',
        audioText: '太贵了便宜一点吧',
        options: ['Too expensive, make it a bit cheaper!', 'This is very cheap, I want two!', 'Do you have another color?', 'Where is the cashier?'],
        correctAnswer: 'Too expensive, make it a bit cheaper!',
        explanation: '太贵了，便宜一点吧 = Too expensive, a bit cheaper please!'
      }
    ],
    speakingChallenge: {
      targetHanzi: '这个多少钱？太贵了，便宜一点吧！',
      targetPinyin: 'Zhège duōshao qián? Tài guì le, piányi yìdiǎn ba!',
      targetEnglish: 'How much is this? Too expensive, make it cheaper!',
      phoneticGuide: 'Jay-guh dwo-shao chyan? Tye gway luh, pyen-yee yee-dyan ba!',
      tip: 'Put playful emotion into "tài guì le!"'
    },
    summary: [
      '这个多少钱？(Zhège duōshao qián?) = How much is this?',
      'Spoken currency: [Number] + 块 (kuài).',
      '太……了 (tài... le) = Too... ! (e.g. 太贵了 = Too expensive!).',
      '便宜一点吧 (piányi yìdiǎn ba) = Make it a bit cheaper!'
    ]
  },

  {
    id: 'l2-3',
    level: 2,
    order: 9,
    title: 'Asking for Directions & Getting Around',
    chineseTitle: '问路与出行',
    subtitle: 'Find subways, navigate streets, and understand left, right, and straight',
    durationMin: 14,
    xpReward: 40,
    intro: {
      overview: 'Getting lost in a bustling Chinese metropolis like Beijing, Shanghai, or Chengdu is an adventure. With just a few core directional phrases, you can easily ask locals for help and find the subway station!',
      grammarRule: 'Asking where something is: [Place] + 在哪儿？(zài nǎr?) or 在哪里？(zài nǎlǐ?). Example: 地铁站在哪儿？(Where is the subway station?)',
      culturalNote: 'Chinese locals are extremely helpful with directions. Sometimes an auntie or uncle will even walk you half a block to make sure you find the right subway entrance!',
      keyTakeaway: 'Directions: 一直走 (yìzhí zǒu = walk straight), 向左拐 (xiàng zuǒ guǎi = turn left), 向右拐 (xiàng yòu guǎi = turn right).'
    },
    vocabulary: [
      { id: 'v-ditie', hanzi: '地铁站', pinyin: 'dìtiě zhàn', english: 'subway / metro station', level: 2, category: 'Places', exampleHanzi: '最近的地铁站', examplePinyin: 'zuì jìn de dìtiě zhàn', exampleEnglish: 'Nearest subway station' },
      { id: 'v-nar', hanzi: '在哪儿', pinyin: 'zài nǎr', english: 'where is / at where', level: 2, category: 'Question Words', exampleHanzi: '洗手间在哪儿？', examplePinyin: 'Xǐshǒujiān zài nǎr?', exampleEnglish: 'Where is the restroom?' },
      { id: 'v-yizhi', hanzi: '一直走', pinyin: 'yìzhí zǒu', english: 'go straight / walk straight', level: 2, category: 'Directions', exampleHanzi: '向前一直走', examplePinyin: 'xiàng qián yìzhí zǒu', exampleEnglish: 'Walk straight ahead' },
      { id: 'v-zuo', hanzi: '左', pinyin: 'zuǒ', english: 'left', level: 2, category: 'Directions', exampleHanzi: '向左拐', examplePinyin: 'xiàng zuǒ guǎi', exampleEnglish: 'Turn left' },
      { id: 'v-you', hanzi: '右', pinyin: 'yòu', english: 'right', level: 2, category: 'Directions', exampleHanzi: '向右拐', examplePinyin: 'xiàng yòu guǎi', exampleEnglish: 'Turn right' },
      { id: 'v-xishoujian', hanzi: '洗手间', pinyin: 'xǐshǒujiān', english: 'restroom / bathroom', level: 2, category: 'Places', exampleHanzi: '请问，洗手间在哪儿？', examplePinyin: 'Qǐngwèn, xǐshǒujiān zài nǎr?', exampleEnglish: 'Excuse me, where is the restroom?' }
    ],
    conversationSample: [
      { speaker: 'user', name: 'You', hanzi: '请问，地铁站在哪儿？', pinyin: 'Qǐngwèn, dìtiě zhàn zài nǎr?', english: 'Excuse me, where is the subway station?', audioText: '请问，地铁站在哪儿？' },
      { speaker: 'partner', name: 'Pedestrian', hanzi: '向前一直走，到路口向左拐，就在前面！', pinyin: 'Xiàng qián yìzhí zǒu, dào lùkǒu xiàng zuǒ guǎi, jiù zài qiánmiàn!', english: 'Walk straight ahead, turn left at the intersection, it\'s right in front!', audioText: '向前一直走，向左拐，就在前面！' },
      { speaker: 'user', name: 'You', hanzi: '远不远？走路要几分钟？', pinyin: 'Yuǎn bù yuǎn? Zǒulù yào jǐ fēnzhōng?', english: 'Is it far? How many minutes walking?', audioText: '远不远？' },
      { speaker: 'partner', name: 'Pedestrian', hanzi: '很近，走路五分钟就到了。', pinyin: 'Hěn jìn, zǒulù wǔ fēnzhōng jiù dào le.', english: 'Very close, only 5 minutes walking.', audioText: '很近，走路五分钟。' }
    ],
    pronunciationFocus: {
      title: 'Distinguishing zuǒ (左) and yòu (右)',
      pinyinRule: '左 (zuǒ, 3rd tone dipping) = Left. 右 (yòu, 4th tone sharp falling) = Right. Be clear with the tones!',
      targetWords: [
        { hanzi: '一直走', pinyin: 'yìzhí zǒu', english: 'Walk straight', toneTip: 'yì (4th) + zhí (2nd) + zǒu (3rd)' },
        { hanzi: '向左拐', pinyin: 'xiàng zuǒ guǎi', english: 'Turn left', toneTip: 'xiàng (4th) + zuǒ (3rd) + guǎi (3rd)' },
        { hanzi: '地铁站', pinyin: 'dìtiě zhàn', english: 'Subway station', toneTip: 'dì (4th) + tiě (3rd) + zhàn (4th)' }
      ]
    },
    exercises: [
      {
        id: 'ex-2-3-1',
        type: 'sentence-order',
        prompt: 'Form the question: "Excuse me, where is the subway station?"',
        correctAnswer: ['请问', '地铁站', '在', '哪儿'],
        options: ['请问', '地铁站', '在', '哪儿', '走', '右'],
        explanation: '请问 (excuse me) + 地铁站 (subway station) + 在哪儿 (where is).'
      },
      {
        id: 'ex-2-3-2',
        type: 'multiple-choice',
        prompt: 'If someone tells you: "向前一直走" (Xiàng qián yìzhí zǒu), what should you do?',
        options: ['Walk straight ahead', 'Turn left', 'Turn right', 'Take the bus'],
        correctAnswer: 'Walk straight ahead',
        explanation: '一直走 (yìzhí zǒu) means to walk straight ahead.'
      },
      {
        id: 'ex-2-3-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. Which place is being asked about?',
        audioText: '洗手间在哪儿',
        options: ['Restroom / Bathroom', 'Subway station', 'Coffee shop', 'Hotel'],
        correctAnswer: 'Restroom / Bathroom',
        explanation: '洗手间 (xǐshǒujiān) = Restroom.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '请问，地铁站在哪儿？一直走吗？',
      targetPinyin: 'Qǐngwèn, dìtiě zhàn zài nǎr? Yìzhí zǒu ma?',
      targetEnglish: 'Excuse me, where is the subway station? Walk straight?',
      phoneticGuide: 'Ching-wun, dee-tyeh jhan zeye nahr? Yee-jhur zoe ma?',
      tip: 'Start with a gentle "qǐngwèn" to catch attention politely.'
    },
    summary: [
      '请问……在哪儿？(Qǐngwèn... zài nǎr?) = Excuse me, where is...?',
      '一直走 (yìzhí zǒu) = Go straight.',
      '向左拐 (xiàng zuǒ guǎi) = Turn left; 向右拐 (xiàng yòu guǎi) = Turn right.',
      '很近 (hěn jìn) = Very close; 很远 (hěn yuǎn) = Very far.'
    ]
  },

  {
    id: 'l2-4',
    level: 2,
    order: 10,
    title: 'Talking About Family & Friends',
    chineseTitle: '家庭与朋友',
    subtitle: 'Introduce family members and describe who people are',
    durationMin: 12,
    xpReward: 35,
    intro: {
      overview: 'Family holds a revered place in Chinese culture. In this lesson, you will learn how to introduce family members and ask if someone has brothers or sisters.',
      grammarRule: 'Possessive marker 的 (de): Put 的 between the owner and the thing owned! Example: 我的爸爸 (my dad), 你的朋友 (your friend). However, with close family, native speakers often drop 的: 我爸爸 (my dad)!',
      culturalNote: 'Chinese has specific individual words for older brother (哥哥 gēge), younger brother (弟弟 dìdi), older sister (姐姐 jiějie), and younger sister (妹妹 mèimei)! There is no single generic word for "brother" or "sister".',
      keyTakeaway: 'You have: 我有…… (Wǒ yǒu...), You don\'t have: 我没有…… (Wǒ méiyǒu...).'
    },
    vocabulary: [
      { id: 'v-baba', hanzi: '爸爸', pinyin: 'bàba', english: 'father / dad', level: 2, category: 'Family', exampleHanzi: '我爸爸', examplePinyin: 'wǒ bàba', exampleEnglish: 'My dad' },
      { id: 'v-mama', hanzi: '妈妈', pinyin: 'māma', english: 'mother / mom', level: 2, category: 'Family', exampleHanzi: '我妈妈', examplePinyin: 'wǒ māma', exampleEnglish: 'My mom' },
      { id: 'v-gege', hanzi: '哥哥', pinyin: 'gēge', english: 'older brother', level: 2, category: 'Family', exampleHanzi: '我有一个哥哥。', examplePinyin: 'Wǒ yǒu yí gè gēge.', exampleEnglish: 'I have an older brother.' },
      { id: 'v-jiejie', hanzi: '姐姐', pinyin: 'jiějie', english: 'older sister', level: 2, category: 'Family', exampleHanzi: '我姐姐', examplePinyin: 'wǒ jiějie', exampleEnglish: 'My older sister' },
      { id: 'v-you', hanzi: '有', pinyin: 'yǒu', english: 'to have / there is', level: 2, category: 'Verbs', exampleHanzi: '你有猫吗？', examplePinyin: 'Nǐ yǒu māo ma?', exampleEnglish: 'Do you have a cat?' },
      { id: 'v-meiyou', hanzi: '没有', pinyin: 'méiyǒu', english: 'do not have / there isn\'t', level: 2, category: 'Verbs', exampleHanzi: '我没有兄弟姐妹。', examplePinyin: 'Wǒ méiyǒu xiōngdì jiěmèi.', exampleEnglish: 'I have no siblings.' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Xiao Yu', hanzi: '你有兄弟姐妹吗？', pinyin: 'Nǐ yǒu xiōngdì jiěmèi ma?', english: 'Do you have brothers and sisters?', audioText: '你有兄弟姐妹吗？' },
      { speaker: 'user', name: 'You', hanzi: '我有一个姐姐和一个弟弟。你呢？', pinyin: 'Wǒ yǒu yí gè jiějie hé yí gè dìdi. Nǐ ne?', english: 'I have an older sister and a younger brother. What about you?', audioText: '我有一个姐姐和一个弟弟。' },
      { speaker: 'partner', name: 'Xiao Yu', hanzi: '我是独生子，我没有兄弟姐妹。', pinyin: 'Wǒ shì dúshēngzǐ, wǒ méiyǒu xiōngdì jiěmèi.', english: 'I am an only child, I have no siblings.', audioText: '我没有兄弟姐妹。' }
    ],
    pronunciationFocus: {
      title: 'Pronouncing older vs younger siblings',
      pinyinRule: 'Notice how family titles reduplicate: the second syllable is almost always the neutral tone: bàba, māma, gēge, jiějie, dìdi, mèimei.',
      targetWords: [
        { hanzi: '哥哥', pinyin: 'gēge', english: 'Older brother', toneTip: '1st tone high + soft neutral' },
        { hanzi: '姐姐', pinyin: 'jiějie', english: 'Older sister', toneTip: '3rd tone dip + soft neutral' },
        { hanzi: '没有', pinyin: 'méiyǒu', english: 'Do not have', toneTip: 'méi (2nd rising) + yǒu (3rd dipping)' }
      ]
    },
    exercises: [
      {
        id: 'ex-2-4-1',
        type: 'sentence-order',
        prompt: 'Build: "I have an older brother."',
        correctAnswer: ['我', '有', '一个', '哥哥'],
        options: ['我', '有', '一个', '哥哥', '没有', '妈妈'],
        explanation: '我 (I) + 有 (have) + 一个 (one) + 哥哥 (older brother).'
      },
      {
        id: 'ex-2-4-2',
        type: 'multiple-choice',
        prompt: 'How do you say "I do NOT have" in Chinese?',
        options: ['没有 (méiyǒu)', '不是 (bú shì)', '不好 (bù hǎo)', '不行 (bù xíng)'],
        correctAnswer: '没有 (méiyǒu)',
        explanation: 'The verb 有 (to have) is ALWAYS negated with 没 (méi), NEVER 不 (bù)!'
      },
      {
        id: 'ex-2-4-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. Who is being referred to?',
        audioText: '这是我妈妈',
        options: ['This is my mom', 'This is my dad', 'This is my sister', 'This is my teacher'],
        correctAnswer: 'This is my mom',
        explanation: '这是我妈妈 = This is my mom.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '这是我爸爸，这是我妈妈。',
      targetPinyin: 'Zhè shì wǒ bàba, zhè shì wǒ māma.',
      targetEnglish: 'This is my dad, this is my mom.',
      phoneticGuide: 'Jay sure waw bah-ba, jay sure waw mah-ma.',
      tip: 'Keep the second syllable in bàba and māma short and light!'
    },
    summary: [
      'Specific sibling titles: 哥哥 (older brother), 弟弟 (younger brother), 姐姐 (older sister), 妹妹 (younger sister).',
      'Always negate 有 with 没: 没有 (méiyǒu), NEVER 不有!',
      '和 (hé) = and (used to connect nouns: 爸爸和妈妈).',
      'Possessive 的 (de) can be omitted for close family: 我妈妈, 我朋友.'
    ]
  },

  {
    id: 'l2-5',
    level: 2,
    order: 11,
    title: 'Talking About Hobbies & Free Time',
    chineseTitle: '兴趣爱好与休闲',
    subtitle: 'Share what you love doing on weekends: music, movies, sports',
    durationMin: 14,
    xpReward: 40,
    intro: {
      overview: 'Want to make real friends in Chinese? Talk about what you love! Learn how to ask "What do you like to do on weekends?" and talk about music, movies, travel, and fitness.',
      grammarRule: '喜欢 (xǐhuan) + Verb: Just like in English, put 喜欢 directly before any activity! Example: 我喜欢看电影 (I like watching movies). Add 很 (hěn) or 特别 (tèbié) for "I really love...".',
      culturalNote: 'In China, popular leisure activities include KTV (karaoke), hiking, playing badmiton/ping-pong, sipping tea, and exploring night markets.',
      keyTakeaway: 'Formula: 我喜欢…… (Wǒ xǐhuan...) = I like... / 我不喜欢…… (Wǒ bù xǐhuan...) = I don\'t like...'
    },
    vocabulary: [
      { id: 'v-xihuan', hanzi: '喜欢', pinyin: 'xǐhuan', english: 'to like', level: 2, category: 'Verbs', exampleHanzi: '我很喜欢。', examplePinyin: 'Wǒ hěn xǐhuan.', exampleEnglish: 'I really like it.' },
      { id: 'v-zhoumo', hanzi: '周末', pinyin: 'zhōumò', english: 'weekend', level: 2, category: 'Time', exampleHanzi: '周末愉快！', examplePinyin: 'Zhōumò yúkuài!', exampleEnglish: 'Have a nice weekend!' },
      { id: 'v-dianying', hanzi: '看电影', pinyin: 'kàn diànyǐng', english: 'watch movies', level: 2, category: 'Hobbies', exampleHanzi: '一起看电影', examplePinyin: 'yìqǐ kàn diànyǐng', exampleEnglish: 'Watch a movie together' },
      { id: 'v-yinyue', hanzi: '听音乐', pinyin: 'tīng yīnyuè', english: 'listen to music', level: 2, category: 'Hobbies', exampleHanzi: '我喜欢听音乐。', examplePinyin: 'Wǒ xǐhuan tīng yīnyuè.', exampleEnglish: 'I like listening to music.' },
      { id: 'v-yundong', hanzi: '运动', pinyin: 'yùndòng', english: 'exercise / sports', level: 2, category: 'Hobbies', exampleHanzi: '做运动', examplePinyin: 'zuò yùndòng', exampleEnglish: 'Do sports / exercise' },
      { id: 'v-lvyou', hanzi: '旅游', pinyin: 'lǚyóu', english: 'to travel / tourism', level: 2, category: 'Hobbies', exampleHanzi: '去中国旅游', examplePinyin: 'qù Zhōngguó lǚyóu', exampleEnglish: 'Travel to China' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Guo Jing', hanzi: '你周末喜欢做什么？', pinyin: 'Nǐ zhōumò xǐhuan zuò shénme?', english: 'What do you like to do on weekends?', audioText: '你周末喜欢做什么？' },
      { speaker: 'user', name: 'You', hanzi: '我周末喜欢看电影和听音乐。你呢？', pinyin: 'Wǒ zhōumò xǐhuan kàn diànyǐng hé tīng yīnyuè. Nǐ ne?', english: 'I like watching movies and listening to music on weekends. And you?', audioText: '我周末喜欢看电影和听音乐。' },
      { speaker: 'partner', name: 'Guo Jing', hanzi: '我特别喜欢运动，尤其是打羽毛球！', pinyin: 'Wǒ tèbié xǐhuan yùndòng, yóuqí shì dǎ yǔmáoqiú!', english: 'I especially love sports, particularly playing badminton!', audioText: '我特别喜欢运动！' }
    ],
    pronunciationFocus: {
      title: 'The "ü" sound in 旅游 (lǚyóu)',
      pinyinRule: 'The two dots over ü (umlaut) mean you shape your lips like whistling an "oo" but position your tongue forward like saying "ee".',
      targetWords: [
        { hanzi: '旅游', pinyin: 'lǚyóu', english: 'Travel', toneTip: 'lǚ (3rd tone rounded lips) + yóu (2nd rising)' },
        { hanzi: '喜欢', pinyin: 'xǐhuan', english: 'To like', toneTip: 'xǐ (3rd dipping) + huan (soft neutral)' },
        { hanzi: '看电影', pinyin: 'kàn diànyǐng', english: 'Watch movies', toneTip: 'kàn (4th) + diàn (4th) + yǐng (3rd)' }
      ]
    },
    exercises: [
      {
        id: 'ex-2-5-1',
        type: 'sentence-order',
        prompt: 'Build: "What do you like doing on weekends?"',
        correctAnswer: ['你', '周末', '喜欢', '做', '什么'],
        options: ['你', '周末', '喜欢', '做', '什么', '看'],
        explanation: '你 (you) + 周末 (weekend) + 喜欢 (like) + 做 (to do) + 什么 (what)?'
      },
      {
        id: 'ex-2-5-2',
        type: 'fill-in-blank',
        prompt: 'To say "I really like listening to music", fill in: 我很喜欢____。',
        options: ['听音乐 (tīng yīnyuè)', '买单 (mǎidān)', '在哪儿 (zài nǎr)', '学生 (xuésheng)'],
        correctAnswer: '听音乐 (tīng yīnyuè)',
        explanation: '听音乐 (tīng yīnyuè) = listen to music.'
      },
      {
        id: 'ex-2-5-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What hobby is mentioned?',
        audioText: '我喜欢看电影',
        options: ['Watching movies', 'Playing video games', 'Cooking food', 'Reading books'],
        correctAnswer: 'Watching movies',
        explanation: '看电影 (kàn diànyǐng) = Watching movies.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '我周末喜欢看电影和旅游。',
      targetPinyin: 'Wǒ zhōumò xǐhuan kàn diànyǐng hé lǚyóu.',
      targetEnglish: 'On weekends I like watching movies and traveling.',
      phoneticGuide: 'Waw joe-mwo shee-hwan kahn dyan-ying huh lyoo-yo.',
      tip: 'Make sure your "lǚ" sound is rounded and distinct!'
    },
    summary: [
      '你喜欢做什么？(Nǐ xǐhuan zuò shénme?) = What do you like to do?',
      'Common hobbies: 看电影 (watch movies), 听音乐 (listen to music), 运动 (exercise), 旅游 (travel).',
      '特别 (tèbié) = especially / particularly: 我特别喜欢……',
      '周末 (zhōumò) = weekend.'
    ]
  },

  {
    id: 'l2-6',
    level: 2,
    order: 12,
    title: 'Everyday Questions & Daily Chat',
    chineseTitle: '日常问答与闲聊',
    subtitle: 'Master the iconic "Have you eaten?", "What are you up to?", and casual greetings',
    durationMin: 12,
    xpReward: 40,
    intro: {
      overview: 'Chinese small talk has its own cultural DNA. Instead of "How is the weather?", friends will greet you with "你吃了吗？" (Have you eaten?) or "你在干嘛？" (What are you up to?). Learning how to answer these shows true cultural fluency!',
      grammarRule: 'The aspect particle 了 (le): When placed after a verb or sentence, 了 indicates an action is completed or a new situation has occurred: 吃了 (ate / have eaten). Answer: 吃了 (I have eaten) or 还没呢 (Not yet).',
      culturalNote: 'When someone asks "你吃了吗？", they aren\'t usually inviting you to lunch—it is the Chinese equivalent of "How\'s it going?". Answering "吃了，你呢？" (I\'ve eaten, how about you?) is the classic friendly response!',
      keyTakeaway: 'Casual greetings: 你吃了吗？(Have you eaten?) / 你在干嘛呢？(What are you doing?).'
    },
    vocabulary: [
      { id: 'v-chilema', hanzi: '吃了吗', pinyin: 'chī le ma', english: 'have you eaten? (classic greeting)', level: 2, category: 'Daily Chat', exampleHanzi: '你吃了吗？', examplePinyin: 'Nǐ chī le ma?', exampleEnglish: 'Have you eaten?' },
      { id: 'v-ganma', hanzi: '干嘛', pinyin: 'gànmá', english: 'what are you doing? / what for?', level: 2, category: 'Daily Chat', exampleHanzi: '你在干嘛？', examplePinyin: 'Nǐ zài gànmá?', exampleEnglish: 'What are you doing?' },
      { id: 'v-haimei', hanzi: '还没', pinyin: 'hái méi', english: 'not yet', level: 2, category: 'Daily Chat', exampleHanzi: '我还没吃呢。', examplePinyin: 'Wǒ hái méi chī ne.', exampleEnglish: 'I haven\'t eaten yet.' },
      { id: 'v-chifan', hanzi: '吃饭', pinyin: 'chīfàn', english: 'to eat a meal', level: 2, category: 'Daily Life', exampleHanzi: '一起去吃饭吧！', examplePinyin: 'Yìqǐ qù chīfàn ba!', exampleEnglish: 'Let\'s go eat together!' },
      { id: 'v-shangban', hanzi: '上班', pinyin: 'shàngbān', english: 'to go to work / on duty', level: 2, category: 'Daily Life', exampleHanzi: '你几点上班？', examplePinyin: 'Nǐ jǐ diǎn shàngbān?', exampleEnglish: 'What time do you start work?' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Lao Wang', hanzi: '嘿！你吃了吗？', pinyin: 'Hēi! Nǐ chī le ma?', english: 'Hey! Have you eaten?', audioText: '嘿！你吃了吗？' },
      { speaker: 'user', name: 'You', hanzi: '还没呢，我正准备去吃饭。你呢？', pinyin: 'Hái méi ne, wǒ zhèng zhǔnbèi qù chīfàn. Nǐ ne?', english: 'Not yet, I\'m just getting ready to eat. How about you?', audioText: '还没呢，我正准备去吃饭。' },
      { speaker: 'partner', name: 'Lao Wang', hanzi: '我也还没吃！我们一起去吧！', pinyin: 'Wǒ yě hái méi chī! Wǒmen yìqǐ qù ba!', english: 'I haven\'t eaten either! Let\'s go together!', audioText: '我们一起去吧！' }
    ],
    pronunciationFocus: {
      title: 'The tone of 了 in "chī le ma"',
      pinyinRule: '了 is pronounced in the light, soft neutral tone (le). Don\'t stress it: say "chī" crisp and 1st tone, followed by light "le ma".',
      targetWords: [
        { hanzi: '吃了吗', pinyin: 'chī le ma', english: 'Have you eaten?', toneTip: 'chī (1st) + le (neutral) + ma (neutral)' },
        { hanzi: '干嘛', pinyin: 'gànmá', english: 'What are you doing?', toneTip: 'gàn (4th) + má (2nd)' },
        { hanzi: '还没呢', pinyin: 'hái méi ne', english: 'Not yet', toneTip: 'hái (2nd) + méi (2nd) + ne (neutral)' }
      ]
    },
    exercises: [
      {
        id: 'ex-2-6-1',
        type: 'multiple-choice',
        prompt: 'If a Chinese friend passes you at 12:30 PM and asks "你吃了吗？", what are they doing?',
        options: [
          'Saying a friendly casual greeting (equivalent to "How\'s it going?")',
          'Demanding to see your food receipt',
          'Complaining about the canteen food',
          'Asking you to cook for them'
        ],
        correctAnswer: 'Saying a friendly casual greeting (equivalent to "How\'s it going?")',
        explanation: '你吃了吗？ is the classic Chinese cultural greeting showing warmth and care.'
      },
      {
        id: 'ex-2-6-2',
        type: 'sentence-order',
        prompt: 'Build: "Let\'s go eat together!"',
        correctAnswer: ['我们', '一起', '去', '吃饭', '吧'],
        options: ['我们', '一起', '去', '吃饭', '吧', '还没'],
        explanation: '我们 (we) + 一起 (together) + 去 (go) + 吃饭 (eat) + 吧 (suggestion particle).'
      },
      {
        id: 'ex-2-6-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the response?',
        audioText: '还没呢',
        options: ['Not yet', 'Already eaten', 'I don\'t want to', 'See you later'],
        correctAnswer: 'Not yet',
        explanation: '还没呢 (Hái méi ne) = Not yet.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '你吃了吗？我们一起去吃饭吧！',
      targetPinyin: 'Nǐ chī le ma? Wǒmen yìqǐ qù chīfàn ba!',
      targetEnglish: 'Have you eaten? Let\'s go eat together!',
      phoneticGuide: 'Nee churr luh ma? Waw-mun yee-chee chyoo churr-fahn ba!',
      tip: 'Sound warm, natural, and inviting on "chīfàn ba"!'
    },
    summary: [
      '你吃了吗？(Nǐ chī le ma?) = The classic Chinese daily greeting.',
      'How to answer: 吃了 (Ate) or 还没呢 (Not yet).',
      '你在干嘛？(Nǐ zài gànmá?) = What are you doing? / What\'s up?',
      '一起去……吧！(Yìqǐ qù... ba!) = Let\'s go ... together!',
      'Level 2 complete! You now possess real survival conversation skills in Mandarin!'
    ]
  },

  // ==========================================
  // LEVEL 3: BUILDING REAL SENTENCES
  // ==========================================
  {
    id: 'l3-1',
    level: 3,
    order: 13,
    title: 'Yesterday, Today & Tomorrow (Time & Aspect)',
    chineseTitle: '过去、现在与未来',
    subtitle: 'Express past completed actions with 了 and future plans with 会 / 要',
    durationMin: 14,
    xpReward: 45,
    intro: {
      overview: 'Chinese has NO verb conjugations! No irregular past tenses like "went", "saw", "bought". Instead, Chinese uses simple time words (yesterday, tomorrow) and handy aspect particles like 了 (le for completed actions) and 会/要 (huì/yào for future intentions).',
      grammarRule: 'Completed action: Verb + 了. Example: 我买了两个苹果 (I bought two apples). Future action: 会 / 要 + Verb. Example: 明天我会去北京 (Tomorrow I will go to Beijing).',
      culturalNote: 'Because Chinese verbs never change their form, speaking about time feels like snapping Lego bricks together. It is far simpler than French, Spanish, or English once you grasp the pattern!',
      keyTakeaway: 'Past/Completed = Verb + 了; Future plan = 会 / 要 + Verb; Negating past = 没 + Verb (drop the 了!).'
    },
    vocabulary: [
      { id: 'v-zuotian', hanzi: '昨天', pinyin: 'zuótiān', english: 'yesterday', level: 3, category: 'Time', exampleHanzi: '昨天我去了超市。', examplePinyin: 'Zuótiān wǒ qù le chāoshì.', exampleEnglish: 'Yesterday I went to the supermarket.' },
      { id: 'v-jintian', hanzi: '今天', pinyin: 'jīntiān', english: 'today', level: 3, category: 'Time', exampleHanzi: '今天天气很好。', examplePinyin: 'Jīntiān tiānqì hěn hǎo.', exampleEnglish: 'Today the weather is very good.' },
      { id: 'v-mingtian', hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', level: 3, category: 'Time', exampleHanzi: '明天见！', examplePinyin: 'Míngtiān jiàn!', exampleEnglish: 'See you tomorrow!' },
      { id: 'v-hui', hanzi: '会', pinyin: 'huì', english: 'will / can / know how to', level: 3, category: 'Verbs', exampleHanzi: '我明天会去。', examplePinyin: 'Wǒ míngtiān huì qù.', exampleEnglish: 'I will go tomorrow.' },
      { id: 'v-le-particle', hanzi: '了', pinyin: 'le', english: 'completed action particle', level: 3, category: 'Grammar', exampleHanzi: '我吃了。', examplePinyin: 'Wǒ chī le.', exampleEnglish: 'I ate / have eaten.' },
      { id: 'v-kanjian', hanzi: '看见', pinyin: 'kànjiàn', english: 'to see / have seen', level: 3, category: 'Verbs', exampleHanzi: '我看见他了。', examplePinyin: 'Wǒ kànjiàn tā le.', exampleEnglish: 'I saw him.' }
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Mei Ling', hanzi: '你昨天去哪儿了？', pinyin: 'Nǐ zuótiān qù nǎr le?', english: 'Where did you go yesterday?', audioText: '你昨天去哪儿了？' },
      { speaker: 'user', name: 'You', hanzi: '昨天我和朋友去喝咖啡了。明天你有什么打算？', pinyin: 'Zuótiān wǒ hé péngyou qù hē kāfēi le. Míngtiān nǐ yǒu shénme dǎsuan?', english: 'Yesterday I went to drink coffee with friends. What plans do you have tomorrow?', audioText: '昨天我和朋友去喝咖啡了。' },
      { speaker: 'partner', name: 'Mei Ling', hanzi: '明天我会去上海出差。', pinyin: 'Míngtiān wǒ huì qù Shànghǎi chūchāi.', english: 'Tomorrow I will go on a business trip to Shanghai.', audioText: '明天我会去上海。' }
    ],
    pronunciationFocus: {
      title: 'Time markers rhythm: zuótiān, jīntiān, míngtiān',
      pinyinRule: 'The word 天 (tiān) is 1st tone throughout all three! Master the preceding tones: zuó (2nd), jīn (1st), míng (2nd).',
      targetWords: [
        { hanzi: '昨天', pinyin: 'zuótiān', english: 'Yesterday', toneTip: 'zuó (2nd rising) + tiān (1st high flat)' },
        { hanzi: '今天', pinyin: 'jīntiān', english: 'Today', toneTip: 'jīn (1st high flat) + tiān (1st high flat)' },
        { hanzi: '明天', pinyin: 'míngtiān', english: 'Tomorrow', toneTip: 'míng (2nd rising) + tiān (1st high flat)' }
      ]
    },
    exercises: [
      {
        id: 'ex-3-1-1',
        type: 'sentence-order',
        prompt: 'Build: "Tomorrow I will go to China."',
        correctAnswer: ['明天', '我', '会', '去', '中国'],
        options: ['明天', '我', '会', '去', '中国', '昨天'],
        explanation: 'Time (明天) + Subject (我) + Will (会) + Verb (去) + Object (中国).'
      },
      {
        id: 'ex-3-1-2',
        type: 'multiple-choice',
        prompt: 'To say you did NOT do something in the past, which word do you use?',
        options: ['没 (méi) / 没有 (méiyǒu)', '不 (bù)', '了 (le)', '会 (huì)'],
        correctAnswer: '没 (méi) / 没有 (méiyǒu)',
        explanation: 'Past actions are negated with 没: 我没去 (I didn\'t go). Never use 不 for past actions!'
      },
      {
        id: 'ex-3-1-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. When will the action take place?',
        audioText: '明天我会见他',
        options: ['Tomorrow', 'Yesterday', 'Today', 'Next month'],
        correctAnswer: 'Tomorrow',
        explanation: '明天 (míngtiān) = Tomorrow.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '昨天我学了中文，明天我也会学。',
      targetPinyin: 'Zuótiān wǒ xué le Zhōngwén, míngtiān wǒ yě huì xué.',
      targetEnglish: 'Yesterday I studied Chinese, and tomorrow I will also study.',
      phoneticGuide: 'Zwo-tyen waw shweh luh Joong-wun, ming-tyen waw yeh hway shweh.',
      tip: 'Notice the balance between "xué le" (past) and "huì xué" (future)!'
    },
    summary: [
      'No verb conjugations in Chinese! Use time words + aspect particles.',
      'Verb + 了 (le) shows completion: 我吃了 (I ate).',
      '会 (huì) / 要 (yào) + Verb shows future action: 明天我会去.',
      'Negating past: 没 + Verb (drop the 了): 我没去 (I didn\'t go).'
    ]
  },

  {
    id: 'l3-2',
    level: 3,
    order: 14,
    title: 'Expressing Likes, Dislikes & Opinions',
    chineseTitle: '表达喜好与观点',
    subtitle: 'Say "I think...", "In my opinion...", and express strong feelings',
    durationMin: 14,
    xpReward: 45,
    intro: {
      overview: 'Real conversational fluency begins when you can share what you actually think! In this lesson, learn the magic phrase "我觉得……" (Wǒ juéde... = I think / I feel) and how to express varying degrees of interest and enthusiasm.',
      grammarRule: 'Modifiers for intensity: 挺……的 (tǐng... de = pretty / quite), 非常 (fēicháng = extremely), 特别 (tèbié = especially), 不太 (bú tài = not very). Place them directly before adjectives.',
      culturalNote: 'Chinese communication values diplomacy. Rather than saying "我不喜欢" (I hate it), locals often soften the blow with "我觉得一般吧" (I think it\'s so-so) or "我不太习惯" (I\'m not very used to it).',
      keyTakeaway: 'Key opening: 我觉得…… (Wǒ juéde...) = In my opinion / I think.'
    },
    vocabulary: [
      { id: 'v-juede', hanzi: '觉得', pinyin: 'juéde', english: 'to feel / to think / in my opinion', level: 3, category: 'Opinions', exampleHanzi: '我觉得很好。', examplePinyin: 'Wǒ juéde hěn hǎo.', exampleEnglish: 'I think it\'s very good.' },
      { id: 'v-feichang', hanzi: '非常', pinyin: 'fēicháng', english: 'extraordinary / extremely', level: 3, category: 'Adverbs', exampleHanzi: '非常漂亮', examplePinyin: 'fēicháng piàoliang', exampleEnglish: 'Extremely beautiful' },
      { id: 'v-ganxingqu', hanzi: '感兴趣', pinyin: 'gǎn xìngqù', english: 'to be interested in', level: 3, category: 'Opinions', exampleHanzi: '我对中文很感兴趣。', examplePinyin: 'Wǒ duì Zhōngwén hěn gǎn xìngqù.', exampleEnglish: 'I am very interested in Chinese.' },
      { id: 'v-yiban', hanzi: '一般', pinyin: 'yìbān', english: 'so-so / ordinary / general', level: 3, category: 'Opinions', exampleHanzi: '我觉得一般。', examplePinyin: 'Wǒ juéde yìbān.', exampleEnglish: 'I think it\'s just so-so.' },
      { id: 'v-dui', hanzi: '对', pinyin: 'duì', english: 'towards / regarding / correct', level: 3, category: 'Prepositions', exampleHanzi: '对我来说', examplePinyin: 'duì wǒ láishuō', exampleEnglish: 'As for me / in my view' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Li Na', hanzi: '你觉得这道中国菜怎么样？', pinyin: 'Nǐ juéde zhè dào Zhōngguó cài zěnmeyàng?', english: 'What do you think of this Chinese dish?', audioText: '你觉得这道中国菜怎么样？' },
      { speaker: 'user', name: 'You', hanzi: '我觉得非常美味！虽然有一点辣，但我特别喜欢！', pinyin: 'Wǒ juéde fēicháng měiwèi! Suīrán yǒu yìdiǎn là, dàn wǒ tèbié xǐhuan!', english: 'I think it is extremely delicious! Although it\'s a bit spicy, I especially like it!', audioText: '我觉得非常美味！我特别喜欢！' },
      { speaker: 'partner', name: 'Li Na', hanzi: '太好了，你真懂得吃！', pinyin: 'Tài hǎo le, nǐ zhēn dǒngde chī!', english: 'Awesome, you really know good food!', audioText: '太好了！' }
    ],
    pronunciationFocus: {
      title: 'Pronouncing 觉得 (juéde)',
      pinyinRule: 'The "j" sound is formed with flat tongue, and "ué" glides smoothly from "ü" to "e". de is neutral tone.',
      targetWords: [
        { hanzi: '觉得', pinyin: 'juéde', english: 'To think / feel', toneTip: 'jué (2nd rising) + de (neutral)' },
        { hanzi: '非常', pinyin: 'fēicháng', english: 'Extremely', toneTip: 'fēi (1st high flat) + cháng (2nd rising)' },
        { hanzi: '感兴趣', pinyin: 'gǎn xìngqù', english: 'Interested in', toneTip: 'gǎn (3rd) + xìng (4th) + qù (4th)' }
      ]
    },
    exercises: [
      {
        id: 'ex-3-2-1',
        type: 'sentence-order',
        prompt: 'Build: "I think this is very good."',
        correctAnswer: ['我', '觉得', '这个', '非常好'],
        options: ['我', '觉得', '这个', '非常好', '不', '吗'],
        explanation: '我 (I) + 觉得 (think) + 这个 (this) + 非常好 (extremely good).'
      },
      {
        id: 'ex-3-2-2',
        type: 'fill-in-blank',
        prompt: 'Pattern: 对……感兴趣 (interested in...). Fill in: 我____中国文化很感兴趣。',
        options: ['对 (duì)', '在 (zài)', '是 (shì)', '有 (yǒu)'],
        correctAnswer: '对 (duì)',
        explanation: '我对……感兴趣 = I am interested in...'
      },
      {
        id: 'ex-3-2-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the speaker expressing?',
        audioText: '我觉得这个一般',
        options: ['I think this is just so-so', 'I think this is the best ever', 'I don\'t want to buy this', 'Can you give me a discount?'],
        correctAnswer: 'I think this is just so-so',
        explanation: '我觉得一般 = I think it\'s just so-so.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '我觉得学中文非常有意思！',
      targetPinyin: 'Wǒ juéde xué Zhōngwén fēicháng yǒu yìsi!',
      targetEnglish: 'I think learning Chinese is extremely interesting!',
      phoneticGuide: 'Waw jweh-duh shweh Joong-wun fay-chahng yo yee-suh!',
      tip: 'Speak with lively passion on "fēicháng yǒu yìsi"!'
    },
    summary: [
      '我觉得…… (Wǒ juéde...) = I think / In my opinion.',
      '程度词 (Intensity adverbs): 非常 (extremely), 特别 (especially), 挺……的 (quite).',
      '我对……感兴趣 (Wǒ duì... gǎn xìngqù) = I am interested in...',
      'Diplomatic opinions: 一般吧 (so-so), 还行 (it\'s alright).'
    ]
  },

  {
    id: 'l3-3',
    level: 3,
    order: 15,
    title: 'Making Plans & Inviting Friends',
    chineseTitle: '制定计划与约朋友',
    subtitle: 'Ask "Are you free?", suggest activities, and confirm times',
    durationMin: 14,
    xpReward: 45,
    intro: {
      overview: 'Inviting friends out for hotpot, milk tea, or a movie is the ultimate milestone of practical language learning. Learn the essential invitations: "你有空吗？" (Do you have free time?) and "……怎么样？" (How about...?).',
      grammarRule: 'Suggestions with 怎么样 (zěnmeyàng): Put 怎么样 at the very end of your proposal! Example: 我们一起去吃火锅，怎么样？(We go eat hotpot together, how about that?).',
      culturalNote: 'In China, flexibility is appreciated. When making plans, people often discuss vague times first ("周末" - weekend) before narrowing down the exact spot on WeChat ("发个定位" - send a location pin).',
      keyTakeaway: 'Formula: [Suggestion] + 怎么样？(How about...?) / 你有空吗？(Are you free?).'
    },
    vocabulary: [
      { id: 'v-youkong', hanzi: '有空', pinyin: 'yǒu kòng', english: 'to have free time / available', level: 3, category: 'Plans', exampleHanzi: '你明天有空吗？', examplePinyin: 'Nǐ míngtiān yǒu kòng ma?', exampleEnglish: 'Are you free tomorrow?' },
      { id: 'v-zenmeyang', hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'how about / how is it', level: 3, category: 'Question Words', exampleHanzi: '去喝咖啡，怎么样？', examplePinyin: 'Qù hē kāfēi, zěnmeyàng?', exampleEnglish: 'How about going for coffee?' },
      { id: 'v-dasuan', hanzi: '打算', pinyin: 'dǎsuan', english: 'to plan / intention', level: 3, category: 'Plans', exampleHanzi: '你有什么打算？', examplePinyin: 'Nǐ yǒu shénme dǎsuan?', exampleEnglish: 'What are your plans?' },
      { id: 'v-jianmian', hanzi: '见面', pinyin: 'jiànmiàn', english: 'to meet up', level: 3, category: 'Social', exampleHanzi: '在哪儿见面？', examplePinyin: 'Zài nǎr jiànmiàn?', exampleEnglish: 'Where shall we meet?' },
      { id: 'v-keyi', hanzi: '可以', pinyin: 'kěyǐ', english: 'can / sure / sounds good', level: 3, category: 'Verbs', exampleHanzi: '可以，没问题！', examplePinyin: 'Kěyǐ, méi wèntí!', exampleEnglish: 'Sure, no problem!' },
    ],
    conversationSample: [
      { speaker: 'user', name: 'You', hanzi: '周六你有空吗？我们一起去吃火锅怎么样？', pinyin: 'Zhōuliù nǐ yǒu kòng ma? Wǒmen yìqǐ qù chī huǒguō zěnmeyàng?', english: 'Are you free on Saturday? How about we go eat hotpot together?', audioText: '周六你有空吗？我们一起去吃火锅怎么样？' },
      { speaker: 'partner', name: 'Xiao Fei', hanzi: '好啊！太棒了！几点见面？', pinyin: 'Hǎo a! Tài bàng le! Jǐ diǎn jiànmiàn?', english: 'Great! Awesome! What time shall we meet?', audioText: '好啊！几点见面？' },
      { speaker: 'user', name: 'You', hanzi: '晚上六点半在地铁口见，可以吗？', pinyin: 'Wǎnshang liù diǎn bàn zài dìtiěkǒu jiàn, kěyǐ ma?', english: 'Meet at 6:30 PM at the subway entrance, is that okay?', audioText: '晚上六点半在地铁口见，可以吗？' },
      { speaker: 'partner', name: 'Xiao Fei', hanzi: '没问题，不见不散！', pinyin: 'Méi wèntí, bú jiàn bú sàn!', english: 'No problem, be there or be square!', audioText: '没问题，不见不散！' }
    ],
    pronunciationFocus: {
      title: 'The phrase "bú jiàn bú sàn" (不见不散)',
      pinyinRule: 'A classic Chinese idiom meaning "Don\'t leave until we meet!" Notice the double 不 changing to 2nd tone: bú jiàn bú sàn!',
      targetWords: [
        { hanzi: '有空', pinyin: 'yǒu kòng', english: 'Free time', toneTip: 'yǒu (3rd dip) + kòng (4th falling)' },
        { hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'How about', toneTip: 'zěn (3rd) + me (neutral) + yàng (4th)' },
        { hanzi: '不见不散', pinyin: 'bú jiàn bú sàn', english: 'Be there or be square', toneTip: 'bú (2nd) + jiàn (4th) + bú (2nd) + sàn (4th)' }
      ]
    },
    exercises: [
      {
        id: 'ex-3-3-1',
        type: 'sentence-order',
        prompt: 'Build: "Are you free tomorrow?"',
        correctAnswer: ['明天', '你', '有空', '吗'],
        options: ['明天', '你', '有空', '吗', '好', '去'],
        explanation: '明天 (tomorrow) + 你 (you) + 有空 (have free time) + 吗 (question)?'
      },
      {
        id: 'ex-3-3-2',
        type: 'multiple-choice',
        prompt: 'What does "不见不散" (bú jiàn bú sàn) mean when concluding a plan?',
        options: [
          'Be there or be square! (Don\'t leave until we meet)',
          'I might cancel if it rains',
          'Let\'s meet at a different place',
          'Goodbye forever'
        ],
        correctAnswer: 'Be there or be square! (Don\'t leave until we meet)',
        explanation: '不见不散 is a beloved spoken idiom showing strong commitment to meet up.'
      },
      {
        id: 'ex-3-3-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is proposed?',
        audioText: '我们一起去喝咖啡怎么样',
        options: ['How about we go drink coffee together?', 'Do you want to buy some tea?', 'I like cooking at home', 'Where is the supermarket?'],
        correctAnswer: 'How about we go drink coffee together?',
        explanation: '我们一起去喝咖啡，怎么样？ = How about we go drink coffee together?'
      }
    ],
    speakingChallenge: {
      targetHanzi: '周六你有空吗？我们一起去吃火锅！',
      targetPinyin: 'Zhōuliù nǐ yǒu kòng ma? Wǒmen yìqǐ qù chī huǒguō!',
      targetEnglish: 'Are you free on Saturday? Let\'s go eat hotpot together!',
      phoneticGuide: 'Joe-lyo nee yo kong ma? Waw-mun yee-chee chyoo churr hwo-gwo!',
      tip: 'Sound enthusiastic and invite with warmth!'
    },
    summary: [
      '你有空吗？(Nǐ yǒu kòng ma?) = Are you free?',
      '……怎么样？(...zěnmeyàng?) = How about...?',
      '在哪儿见面？(Zài nǎr jiànmiàn?) = Where shall we meet?',
      '不见不散！(Bú jiàn bú sàn!) = Be there or be square!'
    ]
  },

  {
    id: 'l3-4',
    level: 3,
    order: 16,
    title: 'Describing People, Places & Weather',
    chineseTitle: '描述人物、地点与天气',
    subtitle: 'Use double descriptors: "both tasty and cheap" with 又……又……',
    durationMin: 14,
    xpReward: 45,
    intro: {
      overview: 'Elevate your sentences from basic statements to vivid descriptions! Learn the indispensable pattern 又……又…… (yòu... yòu... = both ... and ...), plus how to describe someone\'s personality and talk about the weather.',
      grammarRule: 'The 又……又…… construction: Place 又 before two compatible adjectives. Example: 这家餐厅又好吃又便宜！(This restaurant is both delicious AND cheap!). Weather pattern: 今天天气太好了！(Today\'s weather is so great!).',
      culturalNote: 'Talking about the weather and local environment is a great icebreaker anywhere. Complimenting a city\'s vibrancy with 热闹 (rènao = lively and bustling) will delight any local.',
      keyTakeaway: 'Pattern: 又 + Adj 1 + 又 + Adj 2 (e.g., 又漂亮又热情 = both pretty and warm-hearted).'
    },
    vocabulary: [
      { id: 'v-tianqi', hanzi: '天气', pinyin: 'tiānqì', english: 'weather', level: 3, category: 'Nature', exampleHanzi: '今天天气怎么样？', examplePinyin: 'Jīntiān tiānqì zěnmeyàng?', exampleEnglish: 'How is the weather today?' },
      { id: 'v-you-you', hanzi: '又……又……', pinyin: 'yòu... yòu...', english: 'both ... and ...', level: 3, category: 'Grammar', exampleHanzi: '又好吃又便宜', examplePinyin: 'yòu hǎochī yòu piányi', exampleEnglish: 'Both tasty and cheap' },
      { id: 'v-renao', hanzi: '热闹', pinyin: 'rènao', english: 'lively / bustling / full of life', level: 3, category: 'Descriptions', exampleHanzi: '这里很热闹。', examplePinyin: 'Zhèlǐ hěn rènao.', exampleEnglish: 'This place is very lively.' },
      { id: 'v-reqing', hanzi: '热情', pinyin: 'rèqíng', english: 'warm-hearted / hospitable / enthusiastic', level: 3, category: 'Descriptions', exampleHanzi: '他非常热情。', examplePinyin: 'Tā fēicháng rèqíng.', exampleEnglish: 'He is very warm-hearted.' },
      { id: 'v-shuai', hanzi: '帅', pinyin: 'shuài', english: 'handsome', level: 3, category: 'Descriptions', exampleHanzi: '他很帅。', examplePinyin: 'Tā hěn shuài.', exampleEnglish: 'He is very handsome.' },
      { id: 'v-pioliang', hanzi: '漂亮', pinyin: 'piàoliang', english: 'pretty / beautiful', level: 3, category: 'Descriptions', exampleHanzi: '风景很漂亮。', examplePinyin: 'Fēngjǐng hěn piàoliang.', exampleEnglish: 'The scenery is beautiful.' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Fang Fang', hanzi: '你喜欢成都这座城市吗？', pinyin: 'Nǐ xǐhuan Chéngdū zhè zuò chéngshì ma?', english: 'Do you like the city of Chengdu?', audioText: '你喜欢成都吗？' },
      { speaker: 'user', name: 'You', hanzi: '我太喜欢了！这里的人又热情又友好，菜又好吃又便宜！', pinyin: 'Wǒ tài xǐhuan le! Zhèlǐ de rén yòu rèqíng yòu yǒuhǎo, cài yòu hǎochī yòu piányi!', english: 'I love it so much! The people here are both warm and friendly, and the food is both delicious and cheap!', audioText: '这里的人又热情又友好，菜又好吃又便宜！' },
      { speaker: 'partner', name: 'Fang Fang', hanzi: '哈哈，欢迎常来！', pinyin: 'Hāhā, huānyíng cháng lái!', english: 'Haha, welcome to visit often!', audioText: '欢迎常来！' }
    ],
    pronunciationFocus: {
      title: 'Pronouncing 热闹 (rènao) and 热情 (rèqíng)',
      pinyinRule: 'Mandarin "r" is voiced and smooth—like an English "r" but with curled tongue. In rènao, the "nao" is neutral tone.',
      targetWords: [
        { hanzi: '热闹', pinyin: 'rènao', english: 'Lively', toneTip: 'rè (4th sharp) + nao (neutral light)' },
        { hanzi: '热情', pinyin: 'rèqíng', english: 'Enthusiastic', toneTip: 'rè (4th) + qíng (2nd rising)' },
        { hanzi: '漂亮', pinyin: 'piàoliang', english: 'Pretty', toneTip: 'piào (4th) + liang (neutral)' }
      ]
    },
    exercises: [
      {
        id: 'ex-3-4-1',
        type: 'sentence-order',
        prompt: 'Build: "This dish is both delicious and cheap."',
        correctAnswer: ['这个菜', '又好吃', '又便宜'],
        options: ['这个菜', '又好吃', '又便宜', '天气', '很'],
        explanation: 'Subject (这个菜) + 又好吃 (both tasty) + 又便宜 (and cheap).'
      },
      {
        id: 'ex-3-4-2',
        type: 'multiple-choice',
        prompt: 'What does the word 热闹 (rènao) describe best?',
        options: [
          'A vibrant night market full of sounds, people, and excitement',
          'A quiet library where no one speaks',
          'A cold rainy winter afternoon',
          'An empty airport runway'
        ],
        correctAnswer: 'A vibrant night market full of sounds, people, and excitement',
        explanation: '热闹 (rènao) describes a bustling, warm, energetic atmosphere.'
      },
      {
        id: 'ex-3-4-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is said about the weather?',
        audioText: '今天天气太好了',
        options: ['Today\'s weather is so great!', 'It will rain tomorrow', 'The weather is very cold today', 'I don\'t like windy days'],
        correctAnswer: 'Today\'s weather is so great!',
        explanation: '今天天气太好了 = Today\'s weather is so great!'
      }
    ],
    speakingChallenge: {
      targetHanzi: '这家餐厅又好吃又便宜，我很喜欢！',
      targetPinyin: 'Zhè jiā cāntīng yòu hǎochī yòu piányi, wǒ hěn xǐhuan!',
      targetEnglish: 'This restaurant is both delicious and cheap, I like it a lot!',
      phoneticGuide: 'Jay jyah tsahn-ting yo hao-churr yo pyen-yee, waw hun shee-hwan!',
      tip: 'Link "yòu hǎochī" and "yòu piányi" with rhythmic balance!'
    },
    summary: [
      'Pattern: 又……又…… (both ... and ...).',
      '天气 (tiānqì) = Weather; 今天天气真好！ = Today\'s weather is so good!',
      '热闹 (rènao) = Lively, bustling, vibrant atmosphere.',
      '热情 (rèqíng) = Warm-hearted, welcoming, hospitable.'
    ]
  },

  {
    id: 'l3-5',
    level: 3,
    order: 17,
    title: 'Essential Spoken Slang & Native Expressions',
    chineseTitle: '地道口语与常用俚语',
    subtitle: 'Sound like a native with "哪里哪里", "随便", "没问题", and "太棒了"',
    durationMin: 14,
    xpReward: 45,
    intro: {
      overview: 'Textbook Chinese is great, but real spoken Mandarin is packed with colorful idioms and conversational shortcuts! In this lesson, learn the expressions that will immediately make native speakers smile and ask "How long have you lived in China?!"',
      grammarRule: 'Modesty formula: When someone compliments your Chinese, NEVER just say "谢谢". Culturally, you reply: "哪里哪里！" (Nǎlǐ nǎlǐ! = You flatter me! / Far from it!).',
      culturalNote: 'Other essential daily gems: 随便 (suíbiàn = whatever / up to you - when deciding where to eat), 没问题 (méi wèntí = no problem / piece of cake), and 太棒了 (tài bàng le = awesome / fantastic!).',
      keyTakeaway: 'Compliment response: 哪里哪里 (Nǎlǐ nǎlǐ!); Food decision: 随便 (Suíbiàn!).'
    },
    vocabulary: [
      { id: 'v-nalinali', hanzi: '哪里哪里', pinyin: 'nǎlǐ nǎlǐ', english: 'not at all / you flatter me (modest response to compliments)', level: 3, category: 'Idioms', exampleHanzi: '哪里哪里，还差得远呢！', examplePinyin: 'Nǎlǐ nǎlǐ, hái chà de yuǎn ne!', exampleEnglish: 'You flatter me, still have a long way to go!' },
      { id: 'v-suibian', hanzi: '随便', pinyin: 'suíbiàn', english: 'whatever / as you like / up to you', level: 3, category: 'Slang', exampleHanzi: '吃什么？随便！', examplePinyin: 'Chī shénme? Suíbiàn!', exampleEnglish: 'What to eat? Anything is fine!' },
      { id: 'v-meiwenti', hanzi: '没问题', pinyin: 'méi wèntí', english: 'no problem / absolutely', level: 3, category: 'Idioms', exampleHanzi: '这件事没问题。', examplePinyin: 'Zhè jiàn shì méi wèntí.', exampleEnglish: 'No problem with this matter.' },
      { id: 'v-taibangle', hanzi: '太棒了', pinyin: 'tài bàng le', english: 'awesome / fantastic / superb', level: 3, category: 'Exclamations', exampleHanzi: '太棒了！', examplePinyin: 'Tài bàng le!', exampleEnglish: 'Awesome!' },
      { id: 'v-jiayou', hanzi: '加油', pinyin: 'jiāyóu', english: 'keep it up / come on! / let\'s go!', level: 3, category: 'Exclamations', exampleHanzi: '学中文，加油！', examplePinyin: 'Xué Zhōngwén, jiāyóu!', exampleEnglish: 'Keep it up learning Chinese!' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Auntie Wang', hanzi: '哎呀！你的普通话说得太标准了！', pinyin: 'Āiyā! Nǐ de pǔtōnghuà shuō de tài biāozhǔn le!', english: 'Oh my! Your Mandarin is spoken so standardly!', audioText: '你的普通话说得太好了！' },
      { speaker: 'user', name: 'You', hanzi: '哪里哪里！我还差得远呢，还要多练习！', pinyin: 'Nǎlǐ nǎlǐ! Wǒ hái chà de yuǎn ne, hái yào duō liànxí!', english: 'You flatter me! I still have a long way to go and need more practice!', audioText: '哪里哪里！我还差得远呢！' },
      { speaker: 'partner', name: 'Auntie Wang', hanzi: '太谦虚了！加油！', pinyin: 'Tài qiānxū le! Jiāyóu!', english: 'Too modest! Keep it up!', audioText: '太谦虚了！加油！' }
    ],
    pronunciationFocus: {
      title: 'Pronouncing 随便 (suíbiàn) with native ease',
      pinyinRule: 'suí (2nd rising) + biàn (4th falling). Say it in a relaxed, casual manner.',
      targetWords: [
        { hanzi: '哪里哪里', pinyin: 'nǎlǐ nǎlǐ', english: 'You flatter me', toneTip: 'Tone sandhi makes first nǎ rise to 2nd tone: nálǐ nálǐ' },
        { hanzi: '随便', pinyin: 'suíbiàn', english: 'Whatever / up to you', toneTip: 'suí (2nd) + biàn (4th)' },
        { hanzi: '太棒了', pinyin: 'tài bàng le', english: 'Awesome', toneTip: 'tài (4th) + bàng (4th) + le (neutral)' }
      ]
    },
    exercises: [
      {
        id: 'ex-3-5-1',
        type: 'multiple-choice',
        prompt: 'A native Chinese speaker says: "你的中文真好！" (Your Chinese is really good!). What is the most culturally authentic reply?',
        options: ['哪里哪里！(Nǎlǐ nǎlǐ!)', '我知道，我很棒！(I know, I\'m great!)', '不用谢！(No need to thank me!)', '再见！(Goodbye!)'],
        correctAnswer: '哪里哪里！(Nǎlǐ nǎlǐ!)',
        explanation: '哪里哪里 (Nǎlǐ nǎlǐ) demonstrates cultural humility and native grace.'
      },
      {
        id: 'ex-3-5-2',
        type: 'fill-in-blank',
        prompt: 'To encourage someone before an exam or challenge ("Keep it up! / Go for it!"), say: "____！"',
        options: ['加油 (jiāyóu)', '随便 (suíbiàn)', '没有 (méiyǒu)', '对不起 (duìbuqǐ)'],
        correctAnswer: '加油 (jiāyóu)',
        explanation: '加油 (jiāyóu - literally "add oil") is the universal Chinese cheer!'
      },
      {
        id: 'ex-3-5-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What idiom is spoken?',
        audioText: '哪里哪里',
        options: ['You flatter me / Not at all', 'Where are you going?', 'Which one do you want?', 'It doesn\'t matter'],
        correctAnswer: 'You flatter me / Not at all',
        explanation: '哪里哪里 = You flatter me / Not at all.'
      }
    ],
    speakingChallenge: {
      targetHanzi: '哪里哪里，还要继续加油！',
      targetPinyin: 'Nǎlǐ nǎlǐ, hái yào jìxù jiāyóu!',
      targetEnglish: 'You flatter me, I still need to keep working hard!',
      phoneticGuide: 'Nah-lee nah-lee, hye yao jee-shyoo jyah-yo!',
      tip: 'Deliver with a modest smile and warm tone!'
    },
    summary: [
      '哪里哪里 (nǎlǐ nǎlǐ) = Modest reply to compliments ("you flatter me").',
      '随便 (suíbiàn) = Whatever / up to you / anything goes.',
      '没问题 (méi wèntí) = No problem / consider it done.',
      '加油 (jiāyóu) = Come on / keep fighting / let\'s go!',
      'Level 3 complete! You can now express nuances, plans, and authentic idioms.'
    ]
  },

  // ==========================================
  // LEVEL 4: CONVERSATIONAL MANDARIN
  // ==========================================
  {
    id: 'l4-1',
    level: 4,
    order: 18,
    title: 'Natural Connectors & Long Sentences',
    chineseTitle: '自然连接词与复合句',
    subtitle: 'Chain ideas effortlessly with 虽然……但是…… and 首先……然后……',
    durationMin: 16,
    xpReward: 50,
    intro: {
      overview: 'To reach conversational fluency, you must move beyond short, chopped sentences. Chinese connectors (连词) allow you to tell stories and explain complex thoughts with native cadence and flow.',
      grammarRule: 'Essential connector pairs: 1) 虽然……但是…… (Although ... nevertheless ...); 2) 因为……所以…… (Because ... therefore ...); 3) 首先……然后……最后…… (First ... then ... finally ...).',
      culturalNote: 'In English, you never say "Although it rained, BUT I went". But in Chinese, you MUST use both pair words together: 虽然……但是……! Leaving out the second word sounds incomplete.',
      keyTakeaway: 'Always use connector pairs together: 虽然 [A]，但是 [B]; 因为 [A]，所以 [B].'
    },
    vocabulary: [
      { id: 'v-suiran', hanzi: '虽然……但是……', pinyin: 'suīrán... dànshì...', english: 'although ... however / but ...', level: 4, category: 'Connectors', exampleHanzi: '虽然很难，但我会坚持。', examplePinyin: 'Suīrán hěn nán, dàn wǒ huì jiānchí.', exampleEnglish: 'Although it is hard, I will persist.' },
      { id: 'v-yinwei', hanzi: '因为……所以……', pinyin: 'yīnwèi... suǒyǐ...', english: 'because ... therefore ...', level: 4, category: 'Connectors', exampleHanzi: '因为下雨，所以我没出门。', examplePinyin: 'Yīnwèi xiàyǔ, suǒyǐ wǒ méi chūmén.', exampleEnglish: 'Because of rain, I didn\'t go out.' },
      { id: 'v-shouxian', hanzi: '首先', pinyin: 'shǒuxiān', english: 'first of all / firstly', level: 4, category: 'Connectors', exampleHanzi: '首先要学好发音。', examplePinyin: 'Shǒuxiān yào xuéhǎo fāyīn.', exampleEnglish: 'First of all, master pronunciation.' },
      { id: 'v-ranhou', hanzi: '然后', pinyin: 'ránhòu', english: 'then / afterwards', level: 4, category: 'Connectors', exampleHanzi: '然后多开口说。', examplePinyin: 'Ránhòu duō kāikǒu shuō.', exampleEnglish: 'Then speak up more.' },
      { id: 'v-bujin', hanzi: '不仅……而且……', pinyin: 'bùjǐn... érqiě...', english: 'not only ... but also ...', level: 4, category: 'Connectors', exampleHanzi: '他不仅聪明，而且努力。', examplePinyin: 'Tā bùjǐn cōngmíng, érqiě nǔlì.', exampleEnglish: 'He is not only smart, but also hardworking.' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Tutor Liu', hanzi: '你觉得学中文最大的挑战是什么？', pinyin: 'Nǐ juéde xué Zhōngwén zuì dà de tiǎozhàn shì shénme?', english: 'What do you think is the biggest challenge in learning Chinese?', audioText: '你觉得学中文最大的挑战是什么？' },
      { speaker: 'user', name: 'You', hanzi: '虽然汉字看起来有点复杂，但是只要每天练习声调和口语，其实不仅很有趣，而且很有成就感！', pinyin: 'Suīrán hànzì kàn qǐlái yǒudiǎn fùzá, dànshì zhǐyào měitiān liànxí shēngdiào hé kǒuyǔ, qíshí bùjǐn hěn yǒuqù, érqiě hěn yǒu chéngjiùgǎn!', english: 'Although characters look somewhat complex, as long as I practice tones and speaking daily, it is not only fun, but also very rewarding!', audioText: '虽然汉字有点难，但是练习口语很有趣！' },
      { speaker: 'partner', name: 'Tutor Liu', hanzi: '说得太好了！坚持就是胜利！', pinyin: 'Shuō de tài hǎo le! Jiānchí jiù shì shènglì!', english: 'Spoken brilliantly! Persistence is victory!', audioText: '说得太好了！' }
    ],
    pronunciationFocus: {
      title: 'Cadence in long compound sentences',
      pinyinRule: 'Pause briefly at commas between connector clauses: "Suīrán... [micro-pause], dànshì... [resolution]". This gives you time to formulate your next thought naturally.',
      targetWords: [
        { hanzi: '虽然但是', pinyin: 'suīrán dànshì', english: 'Although... but...', toneTip: 'suī (1st) rán (2nd) dàn (4th) shì (4th)' },
        { hanzi: '首先然后', pinyin: 'shǒuxiān ránhòu', english: 'First... then...', toneTip: 'shǒu (3rd) xiān (1st) rán (2nd) hòu (4th)' },
        { hanzi: '不仅而且', pinyin: 'bùjǐn érqiě', english: 'Not only... but also...', toneTip: 'bù (4th) jǐn (3rd) ér (2nd) qiě (3rd)' }
      ]
    },
    exercises: [
      {
        id: 'ex-4-1-1',
        type: 'sentence-order',
        prompt: 'Build: "Although it\'s difficult, it is very interesting."',
        correctAnswer: ['虽然很难', '但是', '很有意思'],
        options: ['虽然很难', '但是', '很有意思', '因为', '所以'],
        explanation: '虽然……但是…… pairs the condition with the contrasting clause.'
      },
      {
        id: 'ex-4-1-2',
        type: 'multiple-choice',
        prompt: 'Which pair correctly matches: "Because..., therefore..." in Mandarin?',
        options: [
          '因为……所以…… (yīnwèi... suǒyǐ...)',
          '虽然……但是…… (suīrán... dànshì...)',
          '首先……然后…… (shǒuxiān... ránhòu...)',
          '如果……那么…… (rúguǒ... nàme...)'
        ],
        correctAnswer: '因为……所以…… (yīnwèi... suǒyǐ...)',
        explanation: '因为 (because) + 所以 (therefore).'
      },
      {
        id: 'ex-4-1-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What connectors are used?',
        audioText: '虽然很难但是很有趣',
        options: ['Although... but...', 'Because... therefore...', 'First... then...', 'Not only... but also...'],
        correctAnswer: 'Although... but...',
        explanation: '虽然 (Although) ... 但是 (but) ...'
      }
    ],
    speakingChallenge: {
      targetHanzi: '虽然中文有声调，但是每天练习就不难！',
      targetPinyin: 'Suīrán Zhōngwén yǒu shēngdiào, dànshì měitiān liànxí jiù bù nán!',
      targetEnglish: 'Although Chinese has tones, practicing daily makes it not hard!',
      phoneticGuide: 'Sway-rahn Joong-wun yo shung-dyao, dahn-sure may-tyen lyen-shee jyo boo nahn!',
      tip: 'Deliver with confident speed and smooth pauses at the comma.'
    },
    summary: [
      'In Chinese, connector pairs always work together in tandem.',
      '虽然……但是…… = Although ... but ...',
      '因为……所以…… = Because ... therefore ...',
      '不仅……而且…… = Not only ... but also ...',
      '首先……然后……最后…… = First ... then ... finally ...'
    ]
  },

  {
    id: 'l4-2',
    level: 4,
    order: 19,
    title: 'Storytelling & Personal Experiences',
    chineseTitle: '故事叙述与生活经历',
    subtitle: 'Recount travel memories, memorable adventures, and funny mishaps',
    durationMin: 16,
    xpReward: 50,
    intro: {
      overview: 'Storytelling is where language becomes an art. Learn how to open a personal story with "上次我去……的时候" (Last time when I went to...) and keep your listeners hooked with dramatic timing, surprises, and resolutions.',
      grammarRule: 'Time anchor: [Event/Time] + 的时候 (de shíhou = when / at the time of). Example: 我在大学的时候 (When I was in college), 我去北京的时候 (When I went to Beijing).',
      culturalNote: 'Chinese storytelling loves sensory details and reactions: 突然 (tūrán = suddenly), 没想到 (méi xiǎngdào = unexpectedly / who would have thought), and 结果 (jiéguǒ = as a result).',
      keyTakeaway: 'Story starter: 上次……的时候 (Last time when...) ➔ 突然…… (Suddenly...) ➔ 结果…… (In the end...).'
    },
    vocabulary: [
      { id: 'v-deshihou', hanzi: '……的时候', pinyin: '...de shíhou', english: 'when ... / at the time of ...', level: 4, category: 'Storytelling', exampleHanzi: '我吃饭的时候', examplePinyin: 'wǒ chīfàn de shíhou', exampleEnglish: 'When I was eating' },
      { id: 'v-turan', hanzi: '突然', pinyin: 'tūrán', english: 'suddenly / all of a sudden', level: 4, category: 'Storytelling', exampleHanzi: '突然下雨了。', examplePinyin: 'Tūrán xiàyǔ le.', exampleEnglish: 'Suddenly it started raining.' },
      { id: 'v-meixiangdao', hanzi: '没想到', pinyin: 'méi xiǎngdào', english: 'unexpectedly / to not expect', level: 4, category: 'Storytelling', exampleHanzi: '真没想到！', examplePinyin: 'Zhēn méi xiǎngdào!', exampleEnglish: 'Really didn\'t expect that!' },
      { id: 'v-jieguo', hanzi: '结果', pinyin: 'jiéguǒ', english: 'as a result / in the end', level: 4, category: 'Storytelling', exampleHanzi: '结果大家都笑了。', examplePinyin: 'Jiéguǒ dàjiā dōu xiào le.', exampleEnglish: 'In the end, everyone laughed.' },
      { id: 'v-jingli', hanzi: '经历', pinyin: 'jīnglì', english: 'experience / to go through', level: 4, category: 'Storytelling', exampleHanzi: '一次难忘的经历', examplePinyin: 'yí cì nánwàng de jīnglì', exampleEnglish: 'An unforgettable experience' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Lao Zhang', hanzi: '听说你上次去过西安？好玩吗？', pinyin: 'Tīngshuō nǐ shàng cì qù guo Xī\'ān? Hǎowán ma?', english: 'I heard you went to Xi\'an last time? Was it fun?', audioText: '你上次去过西安吗？' },
      { speaker: 'user', name: 'You', hanzi: '太有意思了！上次我去回民街的时候，突然闻到特别香的气味。没想到那里的肉夹馍那么好吃，结果我一口气吃了三个！', pinyin: 'Tài yǒu yìsi le! Shàng cì wǒ qù Huímín Jiē de shíhou, tūrán wéndào tèbié xiāng de qìwèi. Méi xiǎngdào nàlǐ de ròujiāmó nàme hǎochī, jiéguǒ wǒ yì kǒu qì chī le sān gè!', english: 'So fascinating! Last time when I went to Muslim Street, I suddenly smelled an amazing aroma. Who would have thought the Chinese pork buns there were so tasty, in the end I ate three in one breath!', audioText: '没想到肉夹馍那么好吃，结果我吃了三个！' },
      { speaker: 'partner', name: 'Lao Zhang', hanzi: '哈哈！你真是个地道的吃货！', pinyin: 'Hāhā! Nǐ zhēn shì gè dìdao de chīhuò!', english: 'Haha! You really are a genuine foodie!', audioText: '你真是个地道的吃货！' }
    ],
    pronunciationFocus: {
      title: 'Dramatic pauses with 没想到 (méi xiǎngdào) and 突然 (tūrán)',
      pinyinRule: 'Accentuate 没想到 with a rising méi and decisive xiǎng-dào to build anticipation in your story.',
      targetWords: [
        { hanzi: '……的时候', pinyin: 'de shíhou', english: 'When...', toneTip: 'de (neutral) + shí (2nd) + hou (neutral)' },
        { hanzi: '突然', pinyin: 'tūrán', english: 'Suddenly', toneTip: 'tū (1st high flat) + rán (2nd rising)' },
        { hanzi: '没想到', pinyin: 'méi xiǎngdào', english: 'Didn\'t expect', toneTip: 'méi (2nd) + xiǎng (3rd) + dào (4th)' }
      ]
    },
    exercises: [
      {
        id: 'ex-4-2-1',
        type: 'sentence-order',
        prompt: 'Build: "When I went to China, I met many friends."',
        correctAnswer: ['我去中国的时候', '认识了', '很多朋友'],
        options: ['我去中国的时候', '认识了', '很多朋友', '突然', '结果'],
        explanation: 'Event + 的时候 (when) + 认识了 (met) + 很多朋友 (many friends).'
      },
      {
        id: 'ex-4-2-2',
        type: 'multiple-choice',
        prompt: 'What does "吃货" (chīhuò) playfully mean in modern spoken Chinese?',
        options: ['A passionate foodie / lover of good food', 'A bad cook', 'A grocery delivery driver', 'A hungry animal'],
        correctAnswer: 'A passionate foodie / lover of good food',
        explanation: '吃货 is an affectionate modern term for someone who loves seeking out delicious food.'
      },
      {
        id: 'ex-4-2-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the speaker expressing?',
        audioText: '真没想到那么好吃',
        options: ['Really didn\'t expect it to be so delicious!', 'I think this dish is bad', 'Please order two more portions', 'Where did you buy this?'],
        correctAnswer: 'Really didn\'t expect it to be so delicious!',
        explanation: '真没想到那么好吃 = Really didn\'t expect it to be that delicious!'
      }
    ],
    speakingChallenge: {
      targetHanzi: '上次我去旅行的时候，认识了很多热情的中国朋友！',
      targetPinyin: 'Shàng cì wǒ qù lǚxíng de shíhou, rènshi le hěn duō rèqíng de Zhōngguó péngyou!',
      targetEnglish: 'Last time when I went traveling, I met many warm-hearted Chinese friends!',
      phoneticGuide: 'Shahng tsuh waw chyoo lyoo-shing duh shur-ho, run-shurr luh hun dwo ruh-ching duh Joong-gwo pung-yo!',
      tip: 'Tell it like an exciting real-life story!'
    },
    summary: [
      '……的时候 (de shíhou) anchors your story in time: "When I was...".',
      'Dramatic markers: 突然 (suddenly), 没想到 (unexpectedly), 结果 (as a result).',
      'The past experience particle 过 (guo): 去过 (have been to), 吃过 (have eaten).',
      'Storytelling builds authentic human rapport in Mandarin!'
    ]
  },

  {
    id: 'l4-3',
    level: 4,
    order: 20,
    title: 'Handling Unexpected Situations & Clarifications',
    chineseTitle: '应对突发状况与请求重述',
    subtitle: 'Ask someone to slow down, clarify misunderstandings, and resolve mishaps',
    durationMin: 14,
    xpReward: 50,
    intro: {
      overview: 'Even advanced speakers encounter rapid accents, slang, or misunderstandings. Having confidence means knowing how to gracefully ask someone to repeat, slow down, or explain a word.',
      grammarRule: 'Requesting repetition politely: 请慢一点说 (Please speak a bit slower), 请再说一遍 (Please say it once again), ……是什么意思？(What does ... mean?).',
      culturalNote: 'Never feel embarrassed to ask someone to slow down! Chinese people deeply appreciate language learners and will gladly rephrase in simpler words if you ask: "不好意思，请慢一点说，行吗？".',
      keyTakeaway: 'Lifesaver phrases: 请再说一遍 (Say it again please) / 请慢一点说 (Please speak slower).'
    },
    vocabulary: [
      { id: 'v-mianyidian', hanzi: '请慢一点说', pinyin: 'qǐng màn yìdiǎn shuō', english: 'please speak a little slower', level: 4, category: 'Clarifications', exampleHanzi: '请慢一点说，谢谢。', examplePinyin: 'Qǐng màn yìdiǎn shuō, xièxie.', exampleEnglish: 'Please speak a little slower, thanks.' },
      { id: 'v-yibian', hanzi: '再说一遍', pinyin: 'zài shuō yí biàn', english: 'say it once again / repeat', level: 4, category: 'Clarifications', exampleHanzi: '请再说一遍。', examplePinyin: 'Qǐng zài shuō yí biàn.', exampleEnglish: 'Please say it once more.' },
      { id: 'v-shenmeyisi', hanzi: '什么意思', pinyin: 'shénme yìsi', english: 'what does it mean', level: 4, category: 'Clarifications', exampleHanzi: '这个词是什么意思？', examplePinyin: 'Zhège cí shì shénme yìsi?', exampleEnglish: 'What does this word mean?' },
      { id: 'v-wuhui', hanzi: '误会', pinyin: 'wùhuì', english: 'misunderstanding / to misunderstand', level: 4, category: 'Social', exampleHanzi: '这是一个误会。', examplePinyin: 'Zhè shì yí gè wùhuì.', exampleEnglish: 'This is a misunderstanding.' },
      { id: 'v-bangzhu', hanzi: '帮助', pinyin: 'bāngzhù', english: 'help / to help / assist', level: 4, category: 'Emergency', exampleHanzi: '你能帮助我吗？', examplePinyin: 'Nǐ néng bāngzhù wǒ ma?', exampleEnglish: 'Can you help me?' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Taxi Driver', hanzi: '师傅您打哪儿走啊？走高架还是环线？那头可堵得慌！', pinyin: 'Shīfu nín dǎ nǎr zǒu a? Zǒu gāojià háishi huánxiàn? Nàtóu kě dǔ de huāng!', english: 'Hey boss, which way you want? Elevated highway or ring road? It\'s jammed crazy over there!', audioText: '师傅您走哪条路？' },
      { speaker: 'user', name: 'You', hanzi: '不好意思师傅，我的中文还在学习，请您说得慢一点，可以吗？走最近的路就行。', pinyin: 'Bù hǎoyìsi shīfu, wǒ de Zhōngwén hái zài xuéxí, qǐng nín shuō de màn yìdiǎn, kěyǐ ma? Zǒu zuì jìn de lù jiù xíng.', english: 'Pardon me driver, my Chinese is still in progress, could you speak a bit slower? Taking the fastest route is fine.', audioText: '不好意思，请慢一点说，走最近的路就行。' },
      { speaker: 'partner', name: 'Taxi Driver', hanzi: '成！没问题！您坐稳了，咱们走高速！', pinyin: 'Chéng! Méi wèntí! Nín zuò wěn le, zánmen zǒu gāosù!', english: 'Alright! No problem! Sit tight, we\'ll take the express!', audioText: '成！没问题！' }
    ],
    pronunciationFocus: {
      title: 'Polite tone in "bù hǎoyìsi" and "qǐng màn yìdiǎn"',
      pinyinRule: 'Begin with soft, deferential intonation on 不好意思 (bù hǎoyìsi) to instantly disarm any tension.',
      targetWords: [
        { hanzi: '请慢一点说', pinyin: 'qǐng màn yìdiǎn shuō', english: 'Please speak slower', toneTip: 'qǐng (3rd) + màn (4th) + yì (4th) + diǎn (3rd) + shuō (1st)' },
        { hanzi: '什么意思', pinyin: 'shénme yìsi', english: 'What does it mean', toneTip: 'shén (2nd) + me (neutral) + yì (4th) + si (neutral)' },
        { hanzi: '再说一遍', pinyin: 'zài shuō yí biàn', english: 'Say it once again', toneTip: 'zài (4th) + shuō (1st) + yí (2nd) + biàn (4th)' }
      ]
    },
    exercises: [
      {
        id: 'ex-4-3-1',
        type: 'sentence-order',
        prompt: 'Build: "Please speak a little slower, okay?"',
        correctAnswer: ['请您', '慢一点说', '可以吗'],
        options: ['请您', '慢一点说', '可以吗', '什么', '再见'],
        explanation: '请您 (Please you polite) + 慢一点说 (speak slower) + 可以吗 (is that okay)?'
      },
      {
        id: 'ex-4-3-2',
        type: 'multiple-choice',
        prompt: 'When someone speaks too fast and you missed a phrase, what should you say?',
        options: [
          '不好意思，请再说一遍！(Bù hǎoyìsi, qǐng zài shuō yí biàn!)',
          '你在干嘛？(Nǐ zài gànmá?)',
          '多少钱？(Duōshao qián?)',
          '太贵了！(Tài guì le!)'
        ],
        correctAnswer: '不好意思，请再说一遍！(Bù hǎoyìsi, qǐng zài shuō yí biàn!)',
        explanation: '不好意思，请再说一遍！ = Excuse me, please say it once more!'
      },
      {
        id: 'ex-4-3-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the question asking?',
        audioText: '这个词是什么意思',
        options: ['What does this word mean?', 'How much does this book cost?', 'Where did you learn this?', 'Can you write this down?'],
        correctAnswer: 'What does this word mean?',
        explanation: '这个词是什么意思 = What does this word mean?'
      }
    ],
    speakingChallenge: {
      targetHanzi: '不好意思，请慢一点说，可以再说一遍吗？',
      targetPinyin: 'Bù hǎoyìsi, qǐng màn yìdiǎn shuō, kěyǐ zài shuō yí biàn ma?',
      targetEnglish: 'Excuse me, please speak slower, could you say it once more?',
      phoneticGuide: 'Boo hao-yee-suh, ching mahn yee-dyan shwo, kuh-yee zeye shwo yee byan ma?',
      tip: 'The single most practical phrase for everyday conversational survival!'
    },
    summary: [
      '不好意思 (bù hǎoyìsi) = Excuse me / pardon me / sorry to trouble you.',
      '请慢一点说 (qǐng màn yìdiǎn shuō) = Please speak a little slower.',
      '请再说一遍 (qǐng zài shuō yí biàn) = Please say it once more.',
      '……是什么意思？(...shì shénme yìsi?) = What does ... mean?'
    ]
  },

  {
    id: 'l4-4',
    level: 4,
    order: 21,
    title: 'Master Roleplay: A Full Day in Shanghai',
    chineseTitle: '全天角色扮演：上海一日游',
    subtitle: 'From airport taxi to hotel check-in and dining with colleagues',
    durationMin: 20,
    xpReward: 60,
    intro: {
      overview: 'You have arrived at the pinnacle! In this capstone lesson, synthesize all your conversational skills in a realistic full-day immersion: taking a taxi from the airport, checking in at your hotel, and sharing dinner toasts with colleagues.',
      grammarRule: 'Dining toast etiquette: Raise your glass and say "干杯！" (Gānbēi! = Cheers / dry glass) or "我敬您一杯！" (Wǒ jìng nín yì bēi! = I toast to you!). Always clink with the rim of your glass slightly lower than an elder or host as a sign of respect.',
      culturalNote: 'Hospitality in China is legendary. When hosts insist on paying the bill or serving the best dishes, smiling, expressing gratitude with "太客气了！谢谢您的款待！" (You are too kind! Thank you for the treat!) cements genuine lifelong friendships.',
      keyTakeaway: 'Bring together greetings, numbers, questions, ordering, storytelling, and cultural toasts!'
    },
    vocabulary: [
      { id: 'v-chuduzhe', hanzi: '出租车', pinyin: 'chūzū chē', english: 'taxi / cab', level: 4, category: 'Travel', exampleHanzi: '打出租车', examplePinyin: 'dǎ chūzū chē', exampleEnglish: 'Take a taxi' },
      { id: 'v-ruzhujiudian', hanzi: '办理入住', pinyin: 'bànlǐ rùzhù', english: 'check-in (hotel)', level: 4, category: 'Travel', exampleHanzi: '我想办理入住。', examplePinyin: 'Wǒ xiǎng bànlǐ rùzhù.', exampleEnglish: 'I want to check in.' },
      { id: 'v-fangka', hanzi: '房卡', pinyin: 'fángkǎ', english: 'room keycard', level: 4, category: 'Travel', exampleHanzi: '这是您的房卡。', examplePinyin: 'Zhè shì nín de fángkǎ.', exampleEnglish: 'Here is your room keycard.' },
      { id: 'v-ganbei', hanzi: '干杯', pinyin: 'gānbēi', english: 'cheers! (literally: dry glass)', level: 4, category: 'Dining', exampleHanzi: '大家干杯！', examplePinyin: 'Dàjiā gānbēi!', exampleEnglish: 'Cheers everyone!' },
      { id: 'v-kuandai', hanzi: '款待', pinyin: 'kuǎndài', english: 'hospitality / treating kindly', level: 4, category: 'Social', exampleHanzi: '谢谢您的热情款待！', examplePinyin: 'Xièxie nín de rèqíng kuǎndài!', exampleEnglish: 'Thank you for your warm hospitality!' },
    ],
    conversationSample: [
      { speaker: 'partner', name: 'Hotel Clerk', hanzi: '您好，欢迎光临，请问有什么可以帮您？', pinyin: 'Nín hǎo, huānyíng guānglín, qǐngwèn yǒu shénme kěyǐ bāng nín?', english: 'Hello, welcome, how may I assist you?', audioText: '您好，请问有什么可以帮您？' },
      { speaker: 'user', name: 'You', hanzi: '您好，我预订了房间，我想办理入住。我叫大卫。', pinyin: 'Nín hǎo, wǒ yùdìng le fángjiān, wǒ xiǎng bànlǐ rùzhù. Wǒ jiào Dàwèi.', english: 'Hello, I booked a room, I would like to check in. My name is David.', audioText: '您好，我预订了房间，想办理入住。' },
      { speaker: 'partner', name: 'Hotel Clerk', hanzi: '查到了，这是您的房卡，在8楼808号房间。早餐在2楼。', pinyin: 'Chádào le, zhè shì nín de fángkǎ, zài bā lóu bā líng bā hào fángjiān. Zǎocān zài èr lóu.', english: 'Found it! Here is your keycard, room 808 on the 8th floor. Breakfast is on the 2nd floor.', audioText: '这是您的房卡，在808号房间。' },
      { speaker: 'user', name: 'You', hanzi: '太好了，非常感谢！', pinyin: 'Tài hǎo le, fēicháng gǎnxiè!', english: 'Wonderful, thank you very much!', audioText: '太好了，非常感谢！' }
    ],
    pronunciationFocus: {
      title: 'Toast etiquette and tone: Gānbēi! (干杯)',
      pinyinRule: '干 (gān, 1st high flat) + 杯 (bēi, 1st high flat). Both are high, crisp, joyful tones!',
      targetWords: [
        { hanzi: '办理入住', pinyin: 'bànlǐ rùzhù', english: 'Check in', toneTip: 'bàn (4th) + lǐ (3rd) + rù (4th) + zhù (4th)' },
        { hanzi: '干杯', pinyin: 'gānbēi', english: 'Cheers', toneTip: 'gān (1st) + bēi (1st) - high and spirited' },
        { hanzi: '热情款待', pinyin: 'rèqíng kuǎndài', english: 'Warm hospitality', toneTip: 'rè (4th) + qíng (2nd) + kuǎn (3rd) + dài (4th)' }
      ]
    },
    exercises: [
      {
        id: 'ex-4-4-1',
        type: 'sentence-order',
        prompt: 'Build at hotel reception: "I want to check in."',
        correctAnswer: ['我', '想', '办理', '入住'],
        options: ['我', '想', '办理', '入住', '买单', '在哪儿'],
        explanation: '我 (I) + 想 (want) + 办理入住 (check in).'
      },
      {
        id: 'ex-4-4-2',
        type: 'multiple-choice',
        prompt: 'When toasting with an elder or business host in China, where should you place the rim of your glass when clinking?',
        options: [
          'Slightly lower than the other person\'s glass rim (showing respect)',
          'High above their glass',
          'Clink as hard as possible',
          'Do not let the glasses touch'
        ],
        correctAnswer: 'Slightly lower than the other person\'s glass rim (showing respect)',
        explanation: 'Lowering your glass rim slightly when clinking shows modesty and deep cultural respect.'
      },
      {
        id: 'ex-4-4-3',
        type: 'listening-choice',
        prompt: 'Listen to the audio. What is the speaker expressing at the banquet?',
        audioText: '谢谢您的热情款待，干杯！',
        options: [
          'Thank you for your warm hospitality, cheers!',
          'Where is the restroom, excuse me?',
          'How much is the total bill?',
          'I need to catch a taxi to the airport'
        ],
        correctAnswer: 'Thank you for your warm hospitality, cheers!',
        explanation: '谢谢您的热情款待，干杯！ = Thank you for your warm hospitality, cheers!'
      }
    ],
    speakingChallenge: {
      targetHanzi: '非常感谢您的热情款待，我们大家干杯！',
      targetPinyin: 'Fēicháng gǎnxiè nín de rèqíng kuǎndài, wǒmen dàjiā gānbēi!',
      targetEnglish: 'Thank you very much for your warm hospitality, cheers everyone!',
      phoneticGuide: 'Fay-chahng gahn-shyeh neen duh ruh-ching kwahn-dye, waw-mun dah-jyah gahn-bay!',
      tip: 'Speak with joyful dignity and raise your imaginary glass!'
    },
    summary: [
      'Mastered airport to hotel: 出租车 (taxi), 办理入住 (check in), 房卡 (keycard).',
      'Dining toast: 干杯 (gānbēi = cheers) with polite clinking etiquette.',
      'Heartfelt gratitude: 谢谢您的热情款待 (Thank you for your warm hospitality).',
      'Huge congratulations! You have completed the entire Mandarin Chinese curriculum!'
    ]
  }
];
