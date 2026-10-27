# 华音 HuāYīn — Free Mandarin Chinese Speaking Academy

> **"Speak and Understand Mandarin Chinese with Confidence."**  
> A complete, modern, interactive web application designed to take you from absolute beginner to real-life conversational fluency. Completely free, with **no subscriptions, paywalls, logins, or paid API keys required**.

---

## 🌟 Key Features

### 1. Spoken Communication First
- **Real Spoken Mandarin (普通话)**: Teaches Simplified Chinese using Pinyin with tone marks, Chinese characters (汉字), and English translations.
- **Web Speech Synthesis**: High-quality native Mandarin speech playback (`zh-CN`) with **1.0x (Normal)** and **0.75x (Slow)** speed options for every word, sentence, and dialogue.
- **Web Speech Recognition**: Practice speaking out loud into your microphone (`zh-CN`) with instant accuracy scoring, phonetic feedback, and character breakdown. Includes graceful fallback for browsers without microphone access.
- **Tone Master Lab**: Visual pitch contours for the 4 Mandarin tones + neutral tone (High Flat 55, Rising 35, Dipping 214, Falling 51), tone sandhi transformation rules (3+3 ➔ 2+3, 不 bù ➔ bú), minimal pair drills, and two-syllable tone pair rhythm practice.

### 2. Structured 4-Level Curriculum (HSK Aligned)
- **Level 1 — Absolute Beginner**:
  - 1.1: The Secrets of Pinyin & The Four Tones
  - 1.2: Essential Daily Greetings & Politeness
  - 1.3: Introducing Yourself & Asking Names
  - 1.4: Numbers 1-100, Dates & Telling Time
  - 1.5: Yes/No Questions with 吗 (ma) and 是/不是
  - 1.6: Basic Chinese Sentence Order (Subject + Time + Location + Verb + Object)
- **Level 2 — Everyday Conversations**:
  - 2.1: Ordering Food & Customizing Boba (Sugar & Ice)
  - 2.2: Shopping, Prices & Friendly Bargaining (多少钱 / 太贵了 / 便宜一点吧)
  - 2.3: Asking for Directions & Navigation (一直走 / 向左拐 / 地铁站)
  - 2.4: Family & Siblings (哥哥, 姐姐, 弟弟, 妹妹, 有 vs 没有)
  - 2.5: Hobbies & Free Time (看电影, 听音乐, 运动, 旅游)
  - 2.6: Everyday Questions & Chat (你吃了吗？你在干嘛？)
- **Level 3 — Building Real Sentences**:
  - 3.1: Past, Present & Future with 了 and 会
  - 3.2: Expressing Likes, Dislikes & Nuanced Opinions (我觉得……)
  - 3.3: Making Weekend Plans with Friends (你有空吗 / 怎么样 / 不见不散)
  - 3.4: Describing People, Weather & Places (又……又…… / 热闹 / 热情)
  - 3.5: Essential Spoken Slang & Native Expressions (哪里哪里 / 随便 / 没问题 / 加油)
- **Level 4 — Conversational Mandarin**:
  - 4.1: Natural Connectors & Flow (虽然……但是…… / 首先……然后……最后……)
  - 4.2: Storytelling & Personal Experiences (……的时候 / 突然 / 没想到 / 结果)
  - 4.3: Handling Unexpected Situations & Clarifications (请慢一点说 / 请再说一遍)
  - 4.4: Master Roleplay: A Full Day in Shanghai (Airport taxi, hotel check-in, dining toasts & etiquette)

### 3. Interactive Lesson Experience
Every lesson is broken down into a 7-step guided journey:
1. **Overview & Cultural/Grammar Rule**: Clear explanations in simple English.
2. **Vocabulary Deck**: 5–8 targeted words with Hanzi, Pinyin, English, normal & slow audio, and example sentences.
3. **Realistic Conversation Sample**: Native conversational dialogue in context.
4. **Pronunciation Focus**: Tone rules, phonetic tips, and audio comparisons.
5. **Interactive Practice Exercises**: Multiple-choice, sentence-ordering word chips, fill-in-the-blank, and listening comprehension drills.
6. **Speaking Challenge**: Speak the target phrase into your microphone with instant recognition grading.
7. **Summary & Celebration**: Confetti, XP bonus, and review takeaways.

### 4. Interactive Conversation Simulator
- Branching dialogue trainer with multiple realistic scenarios:
  - First Meeting in Beijing Teahouse
  - Ordering Boba Milk Tea with sweetness & ice options
  - Friendly Bargaining at Chengdu Night Market
  - Finding the Subway Station in Shanghai
  - Coordinating Weekend Hotpot Plans over WeChat
- **Immersion Controls**: Toggle Pinyin ON/OFF, toggle English translations ON/OFF.
- **Hints & Input Flexibility**: Respond via microphone speech recognition, multiple-choice selection, or manual typing.
- Cultural tips explaining native nuances (e.g. why people ask "吃了吗", toast etiquette, WeChat QR code exchanges).

### 5. Spaced Repetition (SRS) Vocabulary Notebook & Review Center
- Local `localStorage`-persisted spaced repetition system (Leitner 5-box algorithm).
- Reviews difficult words more frequently (1 day) and mastered words less frequently (30 days).
- Searchable by Hanzi, Pinyin, or English translation with level and status filters.
- **4 Dedicated Review Modes**:
  - Smart Flip Flashcards with grading (Forgot, Hard, Good, Easy)
  - Listening Comprehension Quiz
  - Tone Ear Identification Drills
  - Sentence Scrambler Practice

### 6. Daily 10–15 Minute Guided Practice Mode
- Duration options: **5 min (Quick Spark)**, **10 min (Standard Routine)**, or **15 min (Deep Immersion)**.
- Combines Listening Comprehension ➔ Speaking Practice ➔ Vocab Flashcards ➔ Mini Spoken Dialogue in one session.
- Protects your daily streak and awards XP rewards.

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- Modern web browser (Google Chrome, Microsoft Edge, or Safari recommended for best Web Speech API support)

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
This produces an optimized build in the `dist/` directory that can be deployed to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages) completely free with zero server dependencies.

---

## 🛠 Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with custom Chinese Vermilion / Jade / Gold palette and Dark Mode support
- **Icons**: Lucide React
- **Celebrations**: Canvas Confetti
- **Speech Tech**: Web Speech API (`SpeechSynthesis` & `SpeechRecognition` in `zh-CN`)
- **State & Storage**: React Context + browser `localStorage`
