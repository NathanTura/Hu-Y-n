import { ConversationScenario } from '../types';

export const CONVERSATION_SCENARIOS: ConversationScenario[] = [
  // 1. Meeting Someone for the First Time
  {
    id: 'sc-first-meeting',
    title: 'First Meeting in Beijing',
    chineseTitle: '初次相遇',
    difficulty: 'Beginner',
    category: 'Social',
    description: 'You strike up a friendly chat with someone sitting beside you at a bustling Beijing tea house.',
    location: 'Beijing Teahouse',
    targetRole: 'Foreign Learner',
    partnerRole: 'Li Ming (University Student)',
    partnerAvatar: '🧑‍🎓',
    initialNodeId: 'node-start',
    nodes: {
      'node-start': {
        id: 'node-start',
        speaker: 'Li Ming',
        speakerRole: 'partner',
        avatar: '🧑‍🎓',
        hanzi: '你好！这里有人坐吗？我可以坐这里吗？',
        pinyin: 'Nǐ hǎo! Zhèlǐ yǒu rén zuò ma? Wǒ kěyǐ zuò zhèlǐ ma?',
        english: 'Hello! Is anyone sitting here? May I sit here?',
        culturalTip: 'Asking if a seat is taken in crowded cafes is standard polite etiquette.',
        userOptions: [
          {
            textHanzi: '你好！没有人，请坐吧！',
            textPinyin: 'Nǐ hǎo! Méi yǒu rén, qǐng zuò ba!',
            textEnglish: 'Hello! No one is here, please take a seat!',
            nextNodeId: 'node-intro',
            xpBonus: 10
          },
          {
            textHanzi: '请坐，没关系！',
            textPinyin: 'Qǐng zuò, méi guānxi!',
            textEnglish: 'Please sit, no worries!',
            nextNodeId: 'node-intro',
            xpBonus: 10
          }
        ]
      },
      'node-intro': {
        id: 'node-intro',
        speaker: 'Li Ming',
        speakerRole: 'partner',
        avatar: '🧑‍🎓',
        hanzi: '谢谢你！你的普通话真标准！请问你叫什么名字？',
        pinyin: 'Xièxie nǐ! Nǐ de pǔtōnghuà zhēn biāozhǔn! Qǐngwèn nǐ jiào shénme míngzi?',
        english: 'Thank you! Your Mandarin is truly standard! May I ask what your name is?',
        culturalTip: 'Chinese speakers often compliment your Mandarin early to encourage you!',
        userOptions: [
          {
            textHanzi: '哪里哪里！我叫大卫。你叫什么名字？',
            textPinyin: 'Nǎlǐ nǎlǐ! Wǒ jiào Dàwèi. Nǐ jiào shénme míngzi?',
            textEnglish: 'You flatter me! My name is David. What is your name?',
            nextNodeId: 'node-name-exchanged',
            xpBonus: 15
          },
          {
            textHanzi: '谢谢！我叫大卫。很高兴认识你！',
            textPinyin: 'Xièxie! Wǒ jiào Dàwèi. Hěn gāoxìng rènshi nǐ!',
            textEnglish: 'Thanks! My name is David. Very glad to meet you!',
            nextNodeId: 'node-name-exchanged',
            xpBonus: 10
          }
        ]
      },
      'node-name-exchanged': {
        id: 'node-name-exchanged',
        speaker: 'Li Ming',
        speakerRole: 'partner',
        avatar: '🧑‍🎓',
        hanzi: '我叫李明，是这里的大学生。你在中国工作还是旅游？',
        pinyin: 'Wǒ jiào Lǐ Míng, shì zhèlǐ de dàxuésheng. Nǐ zài Zhōngguó gōngzuò háishi lǚyóu?',
        english: 'My name is Li Ming, I am a university student here. Are you working or traveling in China?',
        culturalTip: 'Asking whether you are working, studying, or traveling is the classic friendly inquiry.',
        userOptions: [
          {
            textHanzi: '我来这里旅游，我也在认真学中文！',
            textPinyin: 'Wǒ lái zhèlǐ lǚyóu, wǒ yě zài rènzhēn xué Zhōngwén!',
            textEnglish: 'I came here to travel, and I am also earnestly learning Chinese!',
            nextNodeId: 'node-study-chinese',
            xpBonus: 15
          },
          {
            textHanzi: '我在这里工作，中国文化非常有意思。',
            textPinyin: 'Wǒ zài zhèlǐ gōngzuò, Zhōngguó wénhuà fēicháng yǒu yìsi.',
            textEnglish: 'I work here, Chinese culture is extremely interesting.',
            nextNodeId: 'node-study-chinese',
            xpBonus: 15
          }
        ]
      },
      'node-study-chinese': {
        id: 'node-study-chinese',
        speaker: 'Li Ming',
        speakerRole: 'partner',
        avatar: '🧑‍🎓',
        hanzi: '太棒了！难怪你说得这么好！我们加个微信吧，以后常联系！',
        pinyin: 'Tài bàng le! Nánguài nǐ shuō de zhème hǎo! Wǒmen jiā gè Wēixìn ba, yǐhòu cháng liánxì!',
        english: 'Awesome! No wonder you speak so well! Let\'s add WeChat and stay in touch!',
        culturalTip: 'Adding WeChat ("加微信") is the definitive sign of a new friendship in China.',
        userOptions: [
          {
            textHanzi: '好啊！我扫你还是你扫我？',
            textPinyin: 'Hǎo a! Wǒ sǎo nǐ háishi nǐ sǎo wǒ?',
            textEnglish: 'Great! Should I scan you or you scan me?',
            nextNodeId: 'node-finish',
            xpBonus: 20
          },
          {
            textHanzi: '没问题！我的微信二维码在这里。',
            textPinyin: 'Méi wèntí! Wǒ de Wēixìn èrwèimǎ zài zhèlǐ.',
            textEnglish: 'No problem! My WeChat QR code is right here.',
            nextNodeId: 'node-finish',
            xpBonus: 20
          }
        ]
      },
      'node-finish': {
        id: 'node-finish',
        speaker: 'Li Ming',
        speakerRole: 'partner',
        avatar: '🧑‍🎓',
        hanzi: '加上了！认识你很高兴，大卫，祝你在中国玩得开心！',
        pinyin: 'Jiāshang le! Rènshi nǐ hěn gāoxìng, Dàwèi, zhù nǐ zài Zhōngguó wán de kāixīn!',
        english: 'Added! Very glad to have met you, David, wish you a wonderful time in China!',
        culturalTip: 'You successfully made your first local friend in Mandarin!',
        userOptions: []
      }
    }
  },

  // 2. Ordering Boba & Snacks
  {
    id: 'sc-boba-order',
    title: 'Ordering Boba Milk Tea',
    chineseTitle: '奶茶店点单',
    difficulty: 'Beginner',
    category: 'Dining',
    description: 'Customize your bubble milk tea sweetness, ice level, and toppings like an experienced pro.',
    location: 'Boba Tea Shop',
    targetRole: 'Customer',
    partnerRole: 'Xiao Jie (Tea Barista)',
    partnerAvatar: '🧋',
    initialNodeId: 'boba-start',
    nodes: {
      'boba-start': {
        id: 'boba-start',
        speaker: 'Xiao Jie',
        speakerRole: 'partner',
        avatar: '🧋',
        hanzi: '您好！欢迎光临！今天想喝点什么？',
        pinyin: 'Nín hǎo! Huānyíng guānglín! Jīntiān xiǎng hē diǎn shénme?',
        english: 'Hello! Welcome! What would you like to drink today?',
        culturalTip: 'Baristas greet quickly and expect straightforward drink orders.',
        userOptions: [
          {
            textHanzi: '你好，我要一杯珍珠奶茶。',
            textPinyin: 'Nǐ hǎo, wǒ yào yì bēi zhēnzhū nǎichá.',
            textEnglish: 'Hello, I want one cup of pearl milk tea.',
            nextNodeId: 'boba-customize',
            xpBonus: 10
          },
          {
            textHanzi: '请问，你们店里最受欢迎的是什么？',
            textPinyin: 'Qǐngwèn, nǐmen diànlǐ zuì shòu huānyíng de shì shénme?',
            textEnglish: 'Excuse me, what is the most popular drink in your shop?',
            nextNodeId: 'boba-recommend',
            xpBonus: 15
          }
        ]
      },
      'boba-recommend': {
        id: 'boba-recommend',
        speaker: 'Xiao Jie',
        speakerRole: 'partner',
        avatar: '🧋',
        hanzi: '我们家的黑糖啵啵厚乳茶最火！很多客人都点这个！',
        pinyin: 'Wǒmen jiā de hēitáng bōbō hòurǔ chá zuì huǒ! Hěn duō kèrén dōu diǎn zhège!',
        english: 'Our brown sugar boba thick milk tea is the hottest! Many customers order this!',
        culturalTip: '"最火" (zuì huǒ) is spoken slang for "most popular / trending".',
        userOptions: [
          {
            textHanzi: '好，那我就要一杯这个！',
            textPinyin: 'Hǎo, nà wǒ jiù yào yì bēi zhège!',
            textEnglish: 'Great, then I\'ll take one cup of that!',
            nextNodeId: 'boba-customize',
            xpBonus: 15
          }
        ]
      },
      'boba-customize': {
        id: 'boba-customize',
        speaker: 'Xiao Jie',
        speakerRole: 'partner',
        avatar: '🧋',
        hanzi: '好的！请问甜度和冰度怎么选？有全糖、半糖、微糖；正常冰、少冰、去冰。',
        pinyin: 'Hǎo de! Qǐngwèn tiándù hé bīngdù zěnme xuǎn? Yǒu quántáng, bàntáng, wēitáng; zhèngcháng bīng, shǎobīng, qùbīng.',
        english: 'Alright! What sweetness and ice level? We have 100%, 50%, 30%; regular ice, less ice, no ice.',
        culturalTip: 'Most young Chinese people choose 半糖 (half sugar) and 少冰 (less ice) for perfect balance.',
        userOptions: [
          {
            textHanzi: '我要半糖，少冰，谢谢！',
            textPinyin: 'Wǒ yào bàn táng, shǎo bīng, xièxie!',
            textEnglish: 'I want half sugar, less ice, thank you!',
            nextNodeId: 'boba-pay',
            xpBonus: 15
          },
          {
            textHanzi: '微糖，去冰，可以多加一份珍珠吗？',
            textPinyin: 'Wēitáng, qù bīng, kěyǐ duō jiā yí fèn zhēnzhū ma?',
            textEnglish: 'Low sugar, no ice, can I add an extra portion of pearls?',
            nextNodeId: 'boba-pay',
            xpBonus: 20
          }
        ]
      },
      'boba-pay': {
        id: 'boba-pay',
        speaker: 'Xiao Jie',
        speakerRole: 'partner',
        avatar: '🧋',
        hanzi: '可以的！大杯一共十八块钱，请问怎么支付？',
        pinyin: 'Kěyǐ de! Dàbēi yígòng shíbā kuài qián, qǐngwèn zěnme zhīfù?',
        english: 'Sure! Large cup is 18 kuai total, how would you like to pay?',
        culturalTip: 'Cash is rarely used in China; 99% of transactions are WeChat or Alipay QR scan.',
        userOptions: [
          {
            textHanzi: '微信支付，我扫你！',
            textPinyin: 'Wēixìn zhīfù, wǒ sǎo nǐ!',
            textEnglish: 'WeChat pay, I will scan you!',
            nextNodeId: 'boba-complete',
            xpBonus: 15
          },
          {
            textHanzi: '支付宝，这是我的付款码。',
            textPinyin: 'Zhìfùbǎo, zhè shì wǒ de fùkuǎnmǎ.',
            textEnglish: 'Alipay, here is my payment code.',
            nextNodeId: 'boba-complete',
            xpBonus: 15
          }
        ]
      },
      'boba-complete': {
        id: 'boba-complete',
        speaker: 'Xiao Jie',
        speakerRole: 'partner',
        avatar: '🧋',
        hanzi: '收到！这是您的取餐号56号，请稍等两分钟，做好了叫您！',
        pinyin: 'Shōudào! Zhè shì nín de qǔcānhào wǔshíliù hào, qǐng shāo děng liǎng fēnzhōng, zuòhǎo le jiào nín!',
        english: 'Payment received! Here is your ticket #56, please wait 2 minutes, we\'ll call you when ready!',
        culturalTip: 'Keep your number ticket ready or watch the counter screen.',
        userOptions: []
      }
    }
  },

  // 3. Bargaining at the Night Market
  {
    id: 'sc-bargain',
    title: 'Bargaining at the Night Market',
    chineseTitle: '夜市砍价',
    difficulty: 'Elementary',
    category: 'Shopping',
    description: 'Find a cool souvenir, chat with a market boss, and negotiate a friendly win-win price.',
    location: 'Chengdu Night Market',
    targetRole: 'Shopper',
    partnerRole: 'Lao Chen (Market Vendor)',
    partnerAvatar: '🏮',
    initialNodeId: 'market-start',
    nodes: {
      'market-start': {
        id: 'market-start',
        speaker: 'Lao Chen',
        speakerRole: 'partner',
        avatar: '🏮',
        hanzi: '小伙子/姑娘，来看看！纯手工制作的熊猫玩偶，特别可爱！',
        pinyin: 'Xiǎohuǒzi/Gūniang, lái kànkan! Chún shǒugōng zhìzuò de xióngmāo wán\'ǒu, tèbié kě\'ài!',
        english: 'Young man/lady, come take a look! Handcrafted panda plushies, super adorable!',
        culturalTip: 'Friendly vendors often address shoppers warmly as "小伙子" (young man) or "姑娘" (young lady).',
        userOptions: [
          {
            textHanzi: '老板，请问这个大熊猫多少钱？',
            textPinyin: 'Lǎobǎn, qǐngwèn zhège dà xióngmāo duōshao qián?',
            textEnglish: 'Boss, excuse me, how much is this big panda?',
            nextNodeId: 'market-price',
            xpBonus: 10
          },
          {
            textHanzi: '哇，真好看！这个质量怎么样？多少钱一个？',
            textPinyin: 'Wā, zhēn hǎokàn! Zhège zhìliàng zěnmeyàng? Duōshao qián yí gè?',
            textEnglish: 'Wow, really nice! How is the quality? How much for one?',
            nextNodeId: 'market-price',
            xpBonus: 15
          }
        ]
      },
      'market-price': {
        id: 'market-price',
        speaker: 'Lao Chen',
        speakerRole: 'partner',
        avatar: '🏮',
        hanzi: '这个质量没得说！原价一百五，今天看你有缘，给你一百二！',
        pinyin: 'Zhège zhìliàng méideshuō! Yuánjià yìbǎiwǔ, jīntiān kàn nǐ yǒuyuán, gěi nǐ yìbǎi\'èr!',
        english: 'The quality is unquestionable! Original price 150, today seeing good fortune between us, 120 for you!',
        culturalTip: '"有缘" (yǒuyuán = having a shared affinity) is a classic sales charm.',
        userOptions: [
          {
            textHanzi: '哎呀老板，一百二太贵了！八十块卖不卖？',
            textPinyin: 'Āiyā lǎobǎn, yìbǎi\'èr tài guì le! Bāshí kuài mài bu mài?',
            textEnglish: 'Aiya boss, 120 is too pricey! Will you sell for 80 kuai?',
            nextNodeId: 'market-counter',
            xpBonus: 20
          },
          {
            textHanzi: '我是个学生，便宜一点吧，九十块可以吗？',
            textPinyin: 'Wǒ shì gè xuésheng, piányi yìdiǎn ba, jiǔshí kuài kěyǐ ma?',
            textEnglish: 'I\'m a student, make it cheaper please, is 90 kuai okay?',
            nextNodeId: 'market-counter',
            xpBonus: 15
          }
        ]
      },
      'market-counter': {
        id: 'market-counter',
        speaker: 'Lao Chen',
        speakerRole: 'partner',
        avatar: '🏮',
        hanzi: '八十块我进货都进不来！这样吧，各退一步，九十五块，不能再低了！',
        pinyin: 'Bāshí kuài wǒ jìnhuò dōu jìn bù lái! Zhèyàng ba, gè tuì yí bù, jiǔshíwǔ kuài, bù néng zài dī le!',
        english: 'At 80 I can\'t even cover my wholesale cost! How about this: let\'s meet halfway, 95 kuai, can\'t go lower!',
        culturalTip: '"各退一步" (gè tuì yí bù) = each take a step back / meet in the middle.',
        userOptions: [
          {
            textHanzi: '行！看老板这么爽快，九十五成交！',
            textPinyin: 'Xíng! Kàn lǎobǎn zhème shuǎngkuai, jiǔshíwǔ chéngjiāo!',
            textEnglish: 'Deal! Seeing you are so straightforward boss, 95 it is!',
            nextNodeId: 'market-deal',
            xpBonus: 20
          },
          {
            textHanzi: '那如果我买两个呢？一百六十块两个行不行？',
            textPinyin: 'Nà rúguǒ wǒ mǎi liǎng gè ne? Yìbǎi liùshí kuài liǎng gè xíng bu xíng?',
            textEnglish: 'What if I buy two? 160 kuai for two, will that work?',
            nextNodeId: 'market-deal',
            xpBonus: 25
          }
        ]
      },
      'market-deal': {
        id: 'market-deal',
        speaker: 'Lao Chen',
        speakerRole: 'partner',
        avatar: '🏮',
        hanzi: '哈哈！你太会做生意了！行，包装给你包好，祝你在成都玩得开心！',
        pinyin: 'Hāhā! Nǐ tài huì zuò shēngyì le! Xíng, bāozhuāng gěi nǐ bāohǎo, zhù nǐ zài Chéngdū wán de kāixīn!',
        english: 'Haha! You really know how to do business! Done, I\'ll wrap it nicely for you, enjoy Chengdu!',
        culturalTip: 'Successful bargaining always ends with mutual smiles and good wishes.',
        userOptions: []
      }
    }
  },

  // 4. Lost in Shanghai: Asking Directions to the Subway
  {
    id: 'sc-directions',
    title: 'Lost in the City: Finding the Subway',
    chineseTitle: '街头问路寻地铁',
    difficulty: 'Elementary',
    category: 'Travel',
    description: 'You\'re on a quiet street and need to find the nearest subway line to get back to your hotel.',
    location: 'Shanghai Street Corner',
    targetRole: 'Traveler',
    partnerRole: 'Auntie Zhao (Local Resident)',
    partnerAvatar: '👵',
    initialNodeId: 'dir-start',
    nodes: {
      'dir-start': {
        id: 'dir-start',
        speaker: 'Auntie Zhao',
        speakerRole: 'partner',
        avatar: '👵',
        hanzi: '小伙子/姑娘，你看地图看了半天，是不是迷路了呀？',
        pinyin: 'Xiǎohuǒzi/Gūniang, nǐ kàn dìtú kàn le bàntiān, shì bu shì mílù le ya?',
        english: 'Young person, you\'ve been staring at the map for a while, are you lost?',
        culturalTip: 'Local aunties are often observant, friendly, and eager to help lost travelers.',
        userOptions: [
          {
            textHanzi: '阿姨您好！请问最近的地铁站在哪儿？',
            textPinyin: 'Āyí nín hǎo! Qǐngwèn zuì jìn de dìtiě zhàn zài nǎr?',
            textEnglish: 'Hello Auntie! Excuse me, where is the nearest subway station?',
            nextNodeId: 'dir-explain',
            xpBonus: 15
          },
          {
            textHanzi: '不好意思打扰了，我想去人民广场，应该怎么走？',
            textPinyin: 'Bù hǎoyìsi dǎrǎo le, wǒ xiǎng qù Rénmín Guǎngchǎng, yīnggāi zěnme zǒu?',
            textEnglish: 'Pardon the disturbance, I want to go to People\'s Square, which way should I go?',
            nextNodeId: 'dir-explain',
            xpBonus: 15
          }
        ]
      },
      'dir-explain': {
        id: 'dir-explain',
        speaker: 'Auntie Zhao',
        speakerRole: 'partner',
        avatar: '👵',
        hanzi: '很近的！你沿着这条路一直向前走，过了红绿灯向右拐，就能看到2号线2号口！',
        pinyin: 'Hěn jìn de! Nǐ yánzhe zhè tiáo lù yìzhí xiàng qián zǒu, guò le hónglǜdēng xiàng yòu guǎi, jiù néng kàndào èr hào xiàn èr hào kǒu!',
        english: 'Very close! Follow this street straight ahead, pass the traffic light and turn right, you\'ll see Line 2, Exit 2!',
        culturalTip: 'Notice: 一直走 (straight) ➔ 红绿灯 (traffic light) ➔ 向右拐 (turn right).',
        userOptions: [
          {
            textHanzi: '走路大概需要几分钟？',
            textPinyin: 'Zǒulù dàgài xūyào jǐ fēnzhōng?',
            textEnglish: 'About how many minutes does walking take?',
            nextNodeId: 'dir-time',
            xpBonus: 10
          },
          {
            textHanzi: '过了红绿灯向右拐，对吗？',
            textPinyin: 'Guò le hónglǜdēng xiàng yòu guǎi, duì ma?',
            textEnglish: 'Past the traffic light turn right, correct?',
            nextNodeId: 'dir-time',
            xpBonus: 10
          }
        ]
      },
      'dir-time': {
        id: 'dir-time',
        speaker: 'Auntie Zhao',
        speakerRole: 'partner',
        avatar: '👵',
        hanzi: '对对对！走得快三分钟，走得慢五分钟。不用坐车，走过去最方便！',
        pinyin: 'Duì duì duì! Zǒu de kuài sān fēnzhōng, zǒu de màn wǔ fēnzhōng. Bú yòng zuòchē, zǒu guòqu zuì fāngbiàn!',
        english: 'Right right right! If you walk fast 3 mins, walk slow 5 mins. No need for a cab, walking is easiest!',
        culturalTip: '"对对对" (duì duì duì) is enthusiastic affirmative confirmation.',
        userOptions: [
          {
            textHanzi: '太清楚了，非常感谢阿姨！再见！',
            textPinyin: 'Tài qīngchu le, fēicháng gǎnxiè āyí! Zàijiàn!',
            textEnglish: 'So clear, thank you so much Auntie! Goodbye!',
            nextNodeId: 'dir-finish',
            xpBonus: 15
          }
        ]
      },
      'dir-finish': {
        id: 'dir-finish',
        speaker: 'Auntie Zhao',
        speakerRole: 'partner',
        avatar: '👵',
        hanzi: '不客气！慢走啊，过马路小心车！',
        pinyin: 'Bú kèqi! Màn zǒu a, guò mǎlù xiǎoxīn chē!',
        english: 'You\'re welcome! Take care now, watch out for cars when crossing!',
        culturalTip: '"慢走" (màn zǒu - literally walk slow) is a caring, affectionate farewell.',
        userOptions: []
      }
    }
  },

  // 5. Inviting a Friend for Weekend Hotpot
  {
    id: 'sc-hotpot',
    title: 'Weekend Hotpot Plans with a Friend',
    chineseTitle: '周末约吃火锅',
    difficulty: 'Intermediate',
    category: 'Social',
    description: 'Coordinate an evening out with a friend, decide on spicy levels, and confirm time and place.',
    location: 'WeChat Audio Call',
    targetRole: 'Friend',
    partnerRole: 'Xiao Lin (Close Colleague)',
    partnerAvatar: '🍲',
    initialNodeId: 'hotpot-start',
    nodes: {
      'hotpot-start': {
        id: 'hotpot-start',
        speaker: 'Xiao Lin',
        speakerRole: 'partner',
        avatar: '🍲',
        hanzi: '喂！大卫！最近忙不忙？周末有什么安排吗？',
        pinyin: 'Wéi! Dàwèi! Zuìjìn máng bu máng? Zhōumò yǒu shénme ānpái ma?',
        english: 'Hey! David! Busy lately or not? Any plans for the weekend?',
        culturalTip: 'Calling someone on the phone always starts with a rising tone "喂！" (Wéi!).',
        userOptions: [
          {
            textHanzi: '喂，小林！我周末刚好有空，我们一起去吃火锅怎么样？',
            textPinyin: 'Wéi, Xiǎo Lín! Wǒ zhōumò gānghǎo yǒu kòng, wǒmen yìqǐ qù chī huǒguō zěnmeyàng?',
            textEnglish: 'Hey Xiao Lin! I happen to be free this weekend, how about we eat hotpot together?',
            nextNodeId: 'hotpot-choose-broth',
            xpBonus: 15
          },
          {
            textHanzi: '最近挺好的！听说附近新开了一家四川火锅，你想去尝尝吗？',
            textPinyin: 'Zuìjìn tǐng hǎo de! Tīngshuō fùjìn xīn kāi le yì jiā Sìchuān huǒguō, nǐ xiǎng qù chángchang ma?',
            textEnglish: 'Doing pretty well lately! I heard a new Sichuan hotpot opened nearby, want to try it?',
            nextNodeId: 'hotpot-choose-broth',
            xpBonus: 20
          }
        ]
      },
      'hotpot-choose-broth': {
        id: 'hotpot-choose-broth',
        speaker: 'Xiao Lin',
        speakerRole: 'partner',
        avatar: '🍲',
        hanzi: '哇！太懂我了，我正馋火锅呢！不过你能吃辣吗？我们要全辣锅还是鸳鸯锅？',
        pinyin: 'Wā! Tài dǒng wǒ le, wǒ zhèng chán huǒguō ne! Búguò nǐ néng chī là ma? Wǒmen yào quán là guō háishi yuānyang guō?',
        english: 'Wow! You know me so well, I was craving hotpot! But can you handle spicy? Full spicy or twin pot?',
        culturalTip: '"鸳鸯锅" (yuānyang guō) is the split pot with one side spicy red broth, one side mild mushroom/bone broth.',
        userOptions: [
          {
            textHanzi: '我们点鸳鸯锅吧！一边微辣，一边番茄菌汤，两全其美！',
            textPinyin: 'Wǒmen diǎn yuānyang guō ba! Yìbiān wēilà, yìbiān fānqié jùntāng, liǎngquánqíměi!',
            textEnglish: 'Let\'s order the split pot! One side mild spicy, one side tomato-mushroom, best of both!',
            nextNodeId: 'hotpot-time',
            xpBonus: 20
          },
          {
            textHanzi: '没问题，我特别能吃辣！直接来个中辣锅！',
            textPinyin: 'Méi wèntí, wǒ tèbié néng chī là! Zhíjiē lái gè zhōnglà guō!',
            textEnglish: 'No problem, I can handle spice very well! Let\'s go straight for medium spicy!',
            nextNodeId: 'hotpot-time',
            xpBonus: 20
          }
        ]
      },
      'hotpot-time': {
        id: 'hotpot-time',
        speaker: 'Xiao Lin',
        speakerRole: 'partner',
        avatar: '🍲',
        hanzi: '哈哈有魄力！那我们周六晚上六点半在餐厅门口碰头，我提前去排队拿号！',
        pinyin: 'Hāhā yǒu pòlì! Nà wǒmen zhōuliù wǎnshang liù diǎn bàn zài cāntīng ménkǒu pèngtóu, wǒ tíqián qù páiduì náhào!',
        english: 'Haha bold! Then let\'s meet at 6:30 Saturday evening at the restaurant door, I\'ll line up early for a queue ticket!',
        culturalTip: 'Popular hotpot places in China get huge queues, so getting a ticket early ("排队拿号") is thoughtful.',
        userOptions: [
          {
            textHanzi: '太贴心了！辛苦你啦，周六不见不散！',
            textPinyin: 'Tài tiēxīn le! Xīnkǔ nǐ la, zhōuliù bú jiàn bú sàn!',
            textEnglish: 'So considerate of you! Thanks for the effort, see you Saturday, be there or be square!',
            nextNodeId: 'hotpot-finish',
            xpBonus: 20
          }
        ]
      },
      'hotpot-finish': {
        id: 'hotpot-finish',
        speaker: 'Xiao Lin',
        speakerRole: 'partner',
        avatar: '🍲',
        hanzi: '好嘞！不见不散，周六好好搓一顿！拜拜！',
        pinyin: 'Hǎolei! Bú jiàn bú sàn, zhōuliù hǎohǎo cuō yí dùn! Bàibai!',
        english: 'Awesome! Be there or be square, let\'s feast on Saturday! Bye bye!',
        culturalTip: '"好好搓一顿" (hǎohǎo cuō yí dùn) is a beloved northern colloquialism for having a delicious hearty meal.',
        userOptions: []
      }
    }
  }
];
