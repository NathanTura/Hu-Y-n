import { VocabWord } from '../types';
import { LESSONS } from './lessons';

// Extract words from lessons
const lessonVocab: VocabWord[] = LESSONS.flatMap(l => l.vocabulary);

// Additional high-frequency core conversational vocabulary
const extraVocab: VocabWord[] = [
  { id: 'v-ex-cha', hanzi: '茶', pinyin: 'chá', english: 'tea', level: 1, category: 'Food & Drink', exampleHanzi: '请喝茶。', examplePinyin: 'Qǐng hē chá.', exampleEnglish: 'Please drink tea.' },
  { id: 'v-ex-kafei', hanzi: '咖啡', pinyin: 'kāfēi', english: 'coffee', level: 1, category: 'Food & Drink', exampleHanzi: '我喜欢喝咖啡。', examplePinyin: 'Wǒ xǐhuan hē kāfēi.', exampleEnglish: 'I like drinking coffee.' },
  { id: 'v-ex-shui', hanzi: '水', pinyin: 'shuǐ', english: 'water', level: 1, category: 'Food & Drink', exampleHanzi: '喝水', examplePinyin: 'hē shuǐ', exampleEnglish: 'Drink water' },
  { id: 'v-ex-he', hanzi: '喝', pinyin: 'hē', english: 'to drink', level: 1, category: 'Verbs', exampleHanzi: '你想喝什么？', examplePinyin: 'Nǐ xiǎng hē shénme?', exampleEnglish: 'What do you want to drink?' },
  { id: 'v-ex-chi', hanzi: '吃', pinyin: 'chī', english: 'to eat', level: 1, category: 'Verbs', exampleHanzi: '吃苹果', examplePinyin: 'chī píngguǒ', exampleEnglish: 'Eat an apple' },
  { id: 'v-ex-qu', hanzi: '去', pinyin: 'qù', english: 'to go', level: 1, category: 'Verbs', exampleHanzi: '你去哪儿？', examplePinyin: 'Nǐ qù nǎr?', exampleEnglish: 'Where are you going?' },
  { id: 'v-ex-lai', hanzi: '来', pinyin: 'lái', english: 'to come', level: 1, category: 'Verbs', exampleHanzi: '来中国', examplePinyin: 'lái Zhōngguó', exampleEnglish: 'Come to China' },
  { id: 'v-ex-kan', hanzi: '看', pinyin: 'kàn', english: 'to look / to watch / to read', level: 1, category: 'Verbs', exampleHanzi: '看书', examplePinyin: 'kàn shū', exampleEnglish: 'Read a book' },
  { id: 'v-ex-shuo', hanzi: '说', pinyin: 'shuō', english: 'to speak / to say', level: 1, category: 'Verbs', exampleHanzi: '请说慢一点。', examplePinyin: 'Qǐng shuō màn yìdiǎn.', exampleEnglish: 'Please speak slower.' },
  { id: 'v-ex-ting', hanzi: '听', pinyin: 'tīng', english: 'to listen / to hear', level: 1, category: 'Verbs', exampleHanzi: '听我说', examplePinyin: 'tīng wǒ shuō', exampleEnglish: 'Listen to me' },
  { id: 'v-ex-pengyou', hanzi: '朋友', pinyin: 'péngyou', english: 'friend', level: 1, category: 'People', exampleHanzi: '好朋友', examplePinyin: 'hǎo péngyou', exampleEnglish: 'Good friend' },
  { id: 'v-ex-xuexiao', hanzi: '学校', pinyin: 'xuéxiào', english: 'school', level: 1, category: 'Places', exampleHanzi: '在学校', examplePinyin: 'zài xuéxiào', exampleEnglish: 'At school' },
  { id: 'v-ex-shangdian', hanzi: '商店', pinyin: 'shāngdiàn', english: 'shop / store', level: 2, category: 'Places', exampleHanzi: '去商店买东西', examplePinyin: 'qù shāngdiàn mǎi dōngxi', exampleEnglish: 'Go to store to shop' },
  { id: 'v-ex-dongxi', hanzi: '东西', pinyin: 'dōngxi', english: 'thing / stuff / goods', level: 2, category: 'Nouns', exampleHanzi: '买东西', examplePinyin: 'mǎi dōngxi', exampleEnglish: 'Shopping' },
  { id: 'v-ex-mai-buy', hanzi: '买', pinyin: 'mǎi', english: 'to buy (3rd tone)', level: 2, category: 'Verbs', exampleHanzi: '你想买什么？', examplePinyin: 'Nǐ xiǎng mǎi shénme?', exampleEnglish: 'What do you want to buy?' },
  { id: 'v-ex-mai-sell', hanzi: '卖', pinyin: 'mài', english: 'to sell (4th tone)', level: 2, category: 'Verbs', exampleHanzi: '卖完了', examplePinyin: 'mài wán le', exampleEnglish: 'Sold out' },
  { id: 'v-ex-kuai-fast', hanzi: '快', pinyin: 'kuài', english: 'fast / quick', level: 2, category: 'Adjectives', exampleHanzi: '高铁很快。', examplePinyin: 'Gāotiě hěn kuài.', exampleEnglish: 'High-speed rail is very fast.' },
  { id: 'v-ex-man-slow', hanzi: '慢', pinyin: 'màn', english: 'slow', level: 2, category: 'Adjectives', exampleHanzi: '慢走！', examplePinyin: 'Màn zǒu!', exampleEnglish: 'Take care / walk slowly!' },
  { id: 'v-ex-gaoxing-glad', hanzi: '快乐', pinyin: 'kuàilè', english: 'happy / joyful', level: 2, category: 'Adjectives', exampleHanzi: '生日快乐！', examplePinyin: 'Shēngrì kuàilè!', exampleEnglish: 'Happy Birthday!' },
  { id: 'v-ex-weidao', hanzi: '味道', pinyin: 'wèidào', english: 'flavor / taste / smell', level: 3, category: 'Food & Drink', exampleHanzi: '味道真好！', examplePinyin: 'Wèidào zhēn hǎo!', exampleEnglish: 'The taste is truly good!' },
  { id: 'v-ex-la', hanzi: '辣', pinyin: 'là', english: 'spicy / hot', level: 3, category: 'Food & Drink', exampleHanzi: '不太辣', examplePinyin: 'bú tài là', exampleEnglish: 'Not too spicy' },
  { id: 'v-ex-tián', hanzi: '甜', pinyin: 'tián', english: 'sweet', level: 3, category: 'Food & Drink', exampleHanzi: '很甜', examplePinyin: 'hěn tián', exampleEnglish: 'Very sweet' },
  { id: 'v-ex-gongzuo', hanzi: '工作', pinyin: 'gōngzuò', english: 'work / job / to work', level: 2, category: 'Daily Life', exampleHanzi: '我工作很忙。', examplePinyin: 'Wǒ gōngzuò hěn máng.', exampleEnglish: 'My work is very busy.' },
  { id: 'v-ex-mang', hanzi: '忙', pinyin: 'máng', english: 'busy', level: 2, category: 'Adjectives', exampleHanzi: '你今天忙吗？', examplePinyin: 'Nǐ jīntiān máng ma?', exampleEnglish: 'Are you busy today?' },
  { id: 'v-ex-shouji', hanzi: '手机', pinyin: 'shǒujī', english: 'cellphone / mobile phone', level: 2, category: 'Technology', exampleHanzi: '看手机', examplePinyin: 'kàn shǒujī', exampleEnglish: 'Look at phone' },
  { id: 'v-ex-weixin', hanzi: '微信', pinyin: 'Wēixìn', english: 'WeChat', level: 2, category: 'Technology', exampleHanzi: '加个微信吧！', examplePinyin: 'Jiā gè Wēixìn ba!', exampleEnglish: 'Let\'s add each other on WeChat!' },
  { id: 'v-ex-saoma', hanzi: '扫码', pinyin: 'sǎomǎ', english: 'scan QR code', level: 2, category: 'Daily Life', exampleHanzi: '扫码支付', examplePinyin: 'sǎomǎ zhīfù', exampleEnglish: 'Scan QR to pay' },
  { id: 'v-ex-feiji', hanzi: '飞机', pinyin: 'fēijī', english: 'airplane', level: 3, category: 'Travel', exampleHanzi: '坐飞机', examplePinyin: 'zuò fēijī', exampleEnglish: 'Take an airplane' },
  { id: 'v-ex-gaotie', hanzi: '高铁', pinyin: 'gāotiě', english: 'high-speed rail bullet train', level: 3, category: 'Travel', exampleHanzi: '中国的高铁', examplePinyin: 'Zhōngguó de gāotiě', exampleEnglish: 'China\'s bullet train' },
  { id: 'v-ex-yisi', hanzi: '意思', pinyin: 'yìsi', english: 'meaning / interest', level: 3, category: 'Nouns', exampleHanzi: '很有意思', examplePinyin: 'hěn yǒu yìsi', exampleEnglish: 'Very interesting' },
  { id: 'v-ex-bang', hanzi: '棒', pinyin: 'bàng', english: 'awesome / wonderful / great', level: 3, category: 'Exclamations', exampleHanzi: '真棒！', examplePinyin: 'Zhēn bàng!', exampleEnglish: 'Really awesome!' },
  { id: 'v-ex-huanying', hanzi: '欢迎', pinyin: 'huānyíng', english: 'to welcome / welcome', level: 2, category: 'Politeness', exampleHanzi: '欢迎你！', examplePinyin: 'Huānyíng nǐ!', exampleEnglish: 'Welcome!' }
];

// Combine unique by Hanzi
const uniqueMap = new Map<string, VocabWord>();
[...lessonVocab, ...extraVocab].forEach(word => {
  if (!uniqueMap.has(word.hanzi)) {
    uniqueMap.set(word.hanzi, {
      ...word,
      srsBox: word.srsBox || 1,
      intervalDays: word.intervalDays || 1,
      timesReviewed: word.timesReviewed || 0,
      timesCorrect: word.timesCorrect || 0,
      mastered: word.mastered || false,
    });
  }
});

export const INITIAL_VOCABULARY: VocabWord[] = Array.from(uniqueMap.values());
