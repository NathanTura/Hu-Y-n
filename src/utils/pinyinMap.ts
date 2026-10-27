import { INITIAL_VOCABULARY } from '../data/vocabulary';

export interface WordAnnotation {
  hanzi: string;
  pinyin: string;
  english: string;
}

// Comprehensive dictionary for chip annotations, exercise words, and character lookups
const CHIP_DICTIONARY: Record<string, { pinyin: string; english: string }> = {
  // Pronouns & People
  '你': { pinyin: 'nǐ', english: 'you' },
  '我': { pinyin: 'wǒ', english: 'I / me' },
  '他': { pinyin: 'tā', english: 'he / him' },
  '她': { pinyin: 'tā', english: 'she / her' },
  '我们': { pinyin: 'wǒmen', english: 'we / us' },
  '你们': { pinyin: 'nǐmen', english: 'you (plural)' },
  '他们': { pinyin: 'tāmen', english: 'they / them' },
  '人': { pinyin: 'rén', english: 'person / people' },
  '中国人': { pinyin: 'Zhōngguórén', english: 'Chinese person' },
  '美国人': { pinyin: 'Měiguórén', english: 'American person' },
  '学生': { pinyin: 'xuésheng', english: 'student' },
  '老师': { pinyin: 'lǎoshī', english: 'teacher' },
  '朋友': { pinyin: 'péngyou', english: 'friend' },
  '很多朋友': { pinyin: 'hěn duō péngyou', english: 'many friends' },
  '请您': { pinyin: 'qǐng nín', english: 'please (you)' },

  // Family
  '爸爸': { pinyin: 'bàba', english: 'dad / father' },
  '妈妈': { pinyin: 'māma', english: 'mom / mother' },
  '哥哥': { pinyin: 'gēge', english: 'older brother' },
  '弟弟': { pinyin: 'dìdi', english: 'younger brother' },
  '姐姐': { pinyin: 'jiějie', english: 'older sister' },
  '妹妹': { pinyin: 'mèimei', english: 'younger sister' },
  '一个哥哥': { pinyin: 'yí gè gēge', english: 'one older brother' },

  // Common Verbs
  '叫': { pinyin: 'jiào', english: 'to be called' },
  '是': { pinyin: 'shì', english: 'to be (am/is/are)' },
  '不是': { pinyin: 'bú shì', english: 'is not / am not' },
  '有': { pinyin: 'yǒu', english: 'to have' },
  '没有': { pinyin: 'méiyǒu', english: 'do not have' },
  '要': { pinyin: 'yào', english: 'to want' },
  '想': { pinyin: 'xiǎng', english: 'would like to' },
  '去': { pinyin: 'qù', english: 'to go' },
  '来': { pinyin: 'lái', english: 'to come' },
  '吃': { pinyin: 'chī', english: 'to eat' },
  '吃饭': { pinyin: 'chīfàn', english: 'to eat a meal' },
  '喝': { pinyin: 'hē', english: 'to drink' },
  '学': { pinyin: 'xué', english: 'to study / learn' },
  '看': { pinyin: 'kàn', english: 'to look / watch' },
  '做': { pinyin: 'zuò', english: 'to do / make' },
  '走': { pinyin: 'zǒu', english: 'to walk / go' },
  '拐': { pinyin: 'guǎi', english: 'to turn' },
  '买': { pinyin: 'mǎi', english: 'to buy' },
  '卖': { pinyin: 'mài', english: 'to sell' },
  '买单': { pinyin: 'mǎidān', english: 'pay the bill' },
  '办理': { pinyin: 'bànlǐ', english: 'to process' },
  '入住': { pinyin: 'rùzhù', english: 'check-in' },
  '办理入住': { pinyin: 'bànlǐ rùzhù', english: 'check in' },
  '认识': { pinyin: 'rènshi', english: 'to meet / know' },
  '认识了': { pinyin: 'rènshi le', english: 'have met' },
  '觉得': { pinyin: 'juéde', english: 'to think / feel' },
  '喜欢': { pinyin: 'xǐhuan', english: 'to like' },

  // Adjectives & Adverbs
  '好': { pinyin: 'hǎo', english: 'good / well' },
  '不好': { pinyin: 'bù hǎo', english: 'not good' },
  '很好': { pinyin: 'hěn hǎo', english: 'very good' },
  '非常好': { pinyin: 'fēicháng hǎo', english: 'extremely good' },
  '好吃': { pinyin: 'hǎochī', english: 'delicious' },
  '贵': { pinyin: 'guì', english: 'expensive' },
  '太贵了': { pinyin: 'tài guì le', english: 'too expensive' },
  '便宜': { pinyin: 'piányi', english: 'cheap' },
  '便宜一点': { pinyin: 'piányi yìdiǎn', english: 'cheaper' },
  '又好吃': { pinyin: 'yòu hǎochī', english: 'both delicious' },
  '又便宜': { pinyin: 'yòu piányi', english: 'and cheap' },
  '高兴': { pinyin: 'gāoxìng', english: 'happy / glad' },
  '很': { pinyin: 'hěn', english: 'very' },
  '也': { pinyin: 'yě', english: 'also / too' },
  '一起': { pinyin: 'yìqǐ', english: 'together' },
  '向前': { pinyin: 'xiàng qián', english: 'forward' },
  '向左': { pinyin: 'xiàng zuǒ', english: 'to the left' },
  '向右': { pinyin: 'xiàng yòu', english: 'to the right' },
  '一直': { pinyin: 'yìzhí', english: 'straight' },
  '左': { pinyin: 'zuǒ', english: 'left' },
  '右': { pinyin: 'yòu', english: 'right' },
  '慢一点说': { pinyin: 'màn yìdiǎn shuō', english: 'speak slower' },

  // Particles & Question Words
  '吗': { pinyin: 'ma', english: '(? yes/no)' },
  '呢': { pinyin: 'ne', english: 'what about...?' },
  '吧': { pinyin: 'ba', english: '(suggestion)' },
  '了': { pinyin: 'le', english: '(completed action)' },
  '的': { pinyin: 'de', english: '(possessive)' },
  '什么': { pinyin: 'shénme', english: 'what' },
  '几': { pinyin: 'jǐ', english: 'how many / what' },
  '多少': { pinyin: 'duōshao', english: 'how much' },
  '哪儿': { pinyin: 'nǎr', english: 'where' },
  '哪里': { pinyin: 'nǎlǐ', english: 'where' },
  '怎么': { pinyin: 'zěnme', english: 'how' },
  '怎么样': { pinyin: 'zěnmeyàng', english: 'how about' },
  '请问': { pinyin: 'qǐngwèn', english: 'excuse me' },
  '可以吗': { pinyin: 'kěyǐ ma', english: 'is that okay?' },

  // Time & Location
  '今天': { pinyin: 'jīntiān', english: 'today' },
  '昨天': { pinyin: 'zuótiān', english: 'yesterday' },
  '明天': { pinyin: 'míngtiān', english: 'tomorrow' },
  '现在': { pinyin: 'xiànzài', english: 'now' },
  '周末': { pinyin: 'zhōumò', english: 'weekend' },
  '点': { pinyin: 'diǎn', english: "o'clock" },
  '在': { pinyin: 'zài', english: 'at / in' },
  '家': { pinyin: 'jiā', english: 'home' },
  '在家': { pinyin: 'zài jiā', english: 'at home' },
  '学校': { pinyin: 'xuéxiào', english: 'school' },
  '地铁站': { pinyin: 'dìtiě zhàn', english: 'subway station' },
  '天气': { pinyin: 'tiānqì', english: 'weather' },
  '这个菜': { pinyin: 'zhège cài', english: 'this dish' },
  '去中国': { pinyin: 'qù Zhōngguó', english: 'go to China' },
  '我去中国的时候': { pinyin: 'wǒ qù Zhōngguó de shíhou', english: 'when I went to China' },

  // Numbers & Measure Words
  '一': { pinyin: 'yī', english: 'one' },
  '二': { pinyin: 'èr', english: 'two' },
  '三': { pinyin: 'sān', english: 'three' },
  '四': { pinyin: 'sì', english: 'four' },
  '五': { pinyin: 'wǔ', english: 'five' },
  '十': { pinyin: 'shí', english: 'ten' },
  '一个': { pinyin: 'yí gè', english: 'one / a' },
  '杯': { pinyin: 'bēi', english: 'cup of' },
  '一杯': { pinyin: 'yì bēi', english: 'one cup' },
  '块': { pinyin: 'kuài', english: 'yuan / bucks' },

  // Things & Topics
  '中文': { pinyin: 'Zhōngwén', english: 'Chinese language' },
  '名字': { pinyin: 'míngzi', english: 'name' },
  '钱': { pinyin: 'qián', english: 'money' },
  '奶茶': { pinyin: 'nǎichá', english: 'milk tea (boba)' },
  '珍珠奶茶': { pinyin: 'zhēnzhū nǎichá', english: 'pearl milk tea' },
  '中国': { pinyin: 'Zhōngguó', english: 'China' },
  '这个': { pinyin: 'zhège', english: 'this one' },
  '有空': { pinyin: 'yǒu kòng', english: 'have free time' },
  '还没': { pinyin: 'hái méi', english: 'not yet' },
  '会': { pinyin: 'huì', english: 'will / know how' },

  // Greetings & Idioms
  '你好': { pinyin: 'nǐ hǎo', english: 'hello' },
  '再见': { pinyin: 'zàijiàn', english: 'goodbye' },
  '谢谢': { pinyin: 'xièxie', english: 'thank you' },
  '对不起': { pinyin: 'duìbuqǐ', english: 'sorry' },
  '没关系': { pinyin: 'méi guānxi', english: 'no problem' },
  '不客气': { pinyin: 'bú kèqi', english: "you're welcome" },
  '哪里哪里': { pinyin: 'nǎlǐ nǎlǐ', english: 'you flatter me' },
  '虽然很难': { pinyin: 'suīrán hěn nán', english: 'although hard' },
  '但是': { pinyin: 'dànshì', english: 'but / however' },
  '很有意思': { pinyin: 'hěn yǒu yìsi', english: 'very interesting' },
  '因为': { pinyin: 'yīnwèi', english: 'because' },
  '所以': { pinyin: 'suǒyǐ', english: 'therefore' },
  '突然': { pinyin: 'tūrán', english: 'suddenly' },
  '结果': { pinyin: 'jiéguǒ', english: 'as a result' },
  '没想到': { pinyin: 'méi xiǎngdào', english: 'unexpectedly' },
};

// Build lookup map from INITIAL_VOCABULARY
const VOCAB_MAP = new Map<string, { pinyin: string; english: string }>();
INITIAL_VOCABULARY.forEach(v => {
  VOCAB_MAP.set(v.hanzi, { pinyin: v.pinyin, english: v.english });
});

/**
 * Retrieve the Pinyin and English annotation for any word or chip
 */
export function getWordAnnotation(hanzi: string): WordAnnotation {
  const clean = hanzi.trim();

  // 1. Direct dictionary match
  if (CHIP_DICTIONARY[clean]) {
    return {
      hanzi: clean,
      pinyin: CHIP_DICTIONARY[clean].pinyin,
      english: CHIP_DICTIONARY[clean].english,
    };
  }

  // 2. Vocabulary bank match
  if (VOCAB_MAP.has(clean)) {
    const v = VOCAB_MAP.get(clean)!;
    return {
      hanzi: clean,
      pinyin: v.pinyin,
      english: v.english,
    };
  }

  // 3. Check if text has parenthetical info e.g. "谢谢 (Xièxie)"
  const parenMatch = clean.match(/^([^\(（]+)[\(（]([^\)）]+)[\)）]$/);
  if (parenMatch) {
    const charPart = parenMatch[1].trim();
    const hintPart = parenMatch[2].trim();
    return {
      hanzi: charPart,
      pinyin: hintPart,
      english: CHIP_DICTIONARY[charPart]?.english || '',
    };
  }

  // 4. Fallback: character-by-character resolution
  const pinyinParts: string[] = [];
  const englishParts: string[] = [];
  for (const char of clean.split('')) {
    if (CHIP_DICTIONARY[char]) {
      pinyinParts.push(CHIP_DICTIONARY[char].pinyin);
      englishParts.push(CHIP_DICTIONARY[char].english);
    }
  }

  if (pinyinParts.length > 0) {
    return {
      hanzi: clean,
      pinyin: pinyinParts.join(' '),
      english: englishParts.join(' / '),
    };
  }

  return {
    hanzi: clean,
    pinyin: '',
    english: '',
  };
}
