import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Volume2, 
  Mic, 
  Keyboard, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2,
  ChevronRight,
  Send,
  Flame,
  Award
} from 'lucide-react';
import { CONVERSATION_SCENARIOS } from '../data/conversations';
import { ConversationScenario, DialogueNode } from '../types';
import { AudioButton } from './AudioButton';
import { SpeechMicButton } from './SpeechMicButton';
import { useApp } from '../context/AppContext';
import { speakChinese } from '../utils/speech';

export const ConversationSimulator: React.FC = () => {
  const { currentScenarioId, setActiveView, addXP, triggerCelebration } = useApp();

  const [selectedScenario, setSelectedScenario] = useState<ConversationScenario>(() => {
    return (
      CONVERSATION_SCENARIOS.find(s => s.id === currentScenarioId) ||
      CONVERSATION_SCENARIOS[0]
    );
  });

  const [currentNodeId, setCurrentNodeId] = useState<string>(selectedScenario.initialNodeId);
  const [history, setHistory] = useState<
    { speaker: string; avatar: string; isUser: boolean; hanzi: string; pinyin: string; english: string }[]
  >([]);

  // Toggles for immersion mode
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [showEnglish, setShowEnglish] = useState<boolean>(true);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [inputMode, setInputMode] = useState<'choice' | 'speak' | 'type'>('choice');
  const [typedMessage, setTypedMessage] = useState<string>('');
  const [isScenarioFinished, setIsScenarioFinished] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentNode: DialogueNode = selectedScenario.nodes[currentNodeId] || selectedScenario.nodes[selectedScenario.initialNodeId];

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, currentNodeId]);

  // When partner speaks, automatically play audio if auto-play enabled
  useEffect(() => {
    if (currentNode && !isScenarioFinished) {
      speakChinese(currentNode.audioText || currentNode.hanzi, 1.0);
    }
  }, [currentNodeId, isScenarioFinished]);

  // Reset or switch scenario
  const handleSelectScenario = (sc: ConversationScenario) => {
    setSelectedScenario(sc);
    setCurrentNodeId(sc.initialNodeId);
    setHistory([]);
    setIsScenarioFinished(false);
    setShowHint(false);
    setInputMode('choice');
  };

  const handleRestart = () => {
    setCurrentNodeId(selectedScenario.initialNodeId);
    setHistory([]);
    setIsScenarioFinished(false);
    setShowHint(false);
    setInputMode('choice');
  };

  // Handle user making a response
  const handleUserChooseOption = (option: DialogueNode['userOptions'][0]) => {
    // Append partner message to history first
    const updatedHistory = [
      ...history,
      {
        speaker: currentNode.speaker,
        avatar: currentNode.avatar,
        isUser: false,
        hanzi: currentNode.hanzi,
        pinyin: currentNode.pinyin,
        english: currentNode.english
      },
      {
        speaker: 'You',
        avatar: '🧑',
        isUser: true,
        hanzi: option.textHanzi,
        pinyin: option.textPinyin,
        english: option.textEnglish
      }
    ];

    setHistory(updatedHistory);
    addXP(option.xpBonus || 15);
    setShowHint(false);

    // Transition to next node
    const nextNode = selectedScenario.nodes[option.nextNodeId];
    if (nextNode) {
      setCurrentNodeId(option.nextNodeId);
      if (nextNode.userOptions.length === 0) {
        setIsScenarioFinished(true);
        triggerCelebration();
      }
    } else {
      setIsScenarioFinished(true);
      triggerCelebration();
    }
  };

  const handleTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    // Fuzzy match against user options
    const match = currentNode.userOptions.find(opt => 
      opt.textHanzi.includes(typedMessage.trim()) || 
      typedMessage.trim().includes(opt.textHanzi) ||
      opt.textPinyin.toLowerCase().includes(typedMessage.toLowerCase().trim())
    );

    if (match) {
      handleUserChooseOption(match);
      setTypedMessage('');
    } else if (currentNode.userOptions.length > 0) {
      // Pick closest first option
      handleUserChooseOption(currentNode.userOptions[0]);
      setTypedMessage('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-fade-in">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('dashboard')}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>{selectedScenario.title}</span>
              <span className="font-chinese text-slate-500 text-base font-semibold">({selectedScenario.chineseTitle})</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Location: {selectedScenario.location} • Partner: {selectedScenario.partnerRole}
            </p>
          </div>
        </div>

        {/* View Controls: Hide Pinyin / English, Restart */}
        <div className="flex items-center gap-2 self-start">
          <button
            onClick={() => setShowPinyin(!showPinyin)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all ${
              showPinyin 
                ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-700 dark:text-slate-300' 
                : 'bg-red-50 dark:bg-red-950 border-red-300 text-red-600'
            }`}
            title="Toggle Pinyin visibility"
          >
            {showPinyin ? <Eye size={14} /> : <EyeOff size={14} />}
            <span>Pinyin</span>
          </button>

          <button
            onClick={() => setShowEnglish(!showEnglish)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all ${
              showEnglish 
                ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-700 dark:text-slate-300' 
                : 'bg-red-50 dark:bg-red-950 border-red-300 text-red-600'
            }`}
            title="Toggle English translations"
          >
            {showEnglish ? <Eye size={14} /> : <EyeOff size={14} />}
            <span>English</span>
          </button>

          <button
            onClick={handleRestart}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400"
            title="Restart dialogue from beginning"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Scenario Selector Carousel / Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {CONVERSATION_SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            onClick={() => handleSelectScenario(sc)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
              selectedScenario.id === sc.id
                ? 'bg-red-600 text-white border-red-600 shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-red-300'
            }`}
          >
            <span>{sc.partnerAvatar}</span>
            <span>{sc.chineseTitle}</span>
            <span className="opacity-75 font-normal">({sc.title})</span>
          </button>
        ))}
      </div>

      {/* Main Conversation Theater */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col h-[580px]">
        
        {/* Chat History Messages Container */}
        <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Previous Dialogue History */}
          {history.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 max-w-xl animate-fade-in ${
                msg.isUser ? 'ml-auto flex-row-reverse' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-lg shrink-0">
                {msg.avatar}
              </div>

              <div
                className={`p-4 rounded-3xl border space-y-1 ${
                  msg.isUser
                    ? 'bg-red-600 text-white border-red-600 rounded-tr-sm'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 rounded-tl-sm text-slate-900 dark:text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-[11px] font-bold ${msg.isUser ? 'text-red-100' : 'text-slate-500'}`}>
                    {msg.speaker}
                  </span>
                  {!msg.isUser && <AudioButton text={msg.hanzi} size="sm" showSlowOption={false} />}
                </div>

                <div className="text-base sm:text-lg font-chinese font-bold">
                  {msg.hanzi}
                </div>

                {showPinyin && (
                  <div className={`text-xs font-semibold ${msg.isUser ? 'text-red-100' : 'text-red-600 dark:text-red-400'}`}>
                    {msg.pinyin}
                  </div>
                )}

                {showEnglish && (
                  <div className={`text-xs ${msg.isUser ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>
                    {msg.english}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Current Active Partner Line (if not finished) */}
          {!isScenarioFinished && currentNode && (
            <div className="flex gap-3 max-w-xl animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-lg shrink-0">
                {currentNode.avatar}
              </div>

              <div className="p-4 sm:p-5 rounded-3xl rounded-tl-sm bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white space-y-1.5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {currentNode.speaker}
                  </span>
                  <AudioButton text={currentNode.audioText || currentNode.hanzi} size="sm" />
                </div>

                <div className="text-lg sm:text-xl font-chinese font-black tracking-wide">
                  {currentNode.hanzi}
                </div>

                {showPinyin && (
                  <div className="text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400">
                    {currentNode.pinyin}
                  </div>
                )}

                {showEnglish && (
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {currentNode.english}
                  </div>
                )}

                {currentNode.culturalTip && (
                  <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-amber-700 dark:text-amber-400 flex items-center gap-1 font-medium">
                    <Sparkles size={12} className="shrink-0" />
                    <span>Cultural Tip: {currentNode.culturalTip}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Finished Celebration Banner */}
          {isScenarioFinished && (
            <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-scale-up">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-black text-emerald-900 dark:text-emerald-200">
                Conversation Completed! 太棒了！
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                You successfully navigated this real-life scenario and practiced spontaneous Mandarin communication.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md"
                >
                  Practice Again
                </button>
                <button
                  onClick={() => {
                    const nextIdx = (CONVERSATION_SCENARIOS.findIndex(s => s.id === selectedScenario.id) + 1) % CONVERSATION_SCENARIOS.length;
                    handleSelectScenario(CONVERSATION_SCENARIOS[nextIdx]);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 font-bold text-xs border border-emerald-300 hover:bg-emerald-50"
                >
                  Next Scenario
                </button>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* User Interaction Dock */}
        {!isScenarioFinished && (
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-700 space-y-3">
            
            {/* Input Mode Controls: Tap Choice | Speak Mic | Type */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Your Response Options:
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                    showHint 
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <HelpCircle size={14} />
                  <span>Hint</span>
                </button>

                <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

                <button
                  onClick={() => setInputMode('choice')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    inputMode === 'choice' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Choices
                </button>
                <button
                  onClick={() => setInputMode('speak')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${
                    inputMode === 'speak' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Mic size={13} /> Speak
                </button>
                <button
                  onClick={() => setInputMode('type')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${
                    inputMode === 'type' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Keyboard size={13} /> Type
                </button>
              </div>
            </div>

            {/* Hint Box */}
            {showHint && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 animate-fade-in">
                💡 <span className="font-bold">Suggested response:</span> Try answering with "{currentNode.userOptions[0]?.textHanzi}" ({currentNode.userOptions[0]?.textPinyin}).
              </div>
            )}

            {/* Mode 1: Choice Buttons */}
            {inputMode === 'choice' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentNode.userOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleUserChooseOption(opt)}
                    className="text-left p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-red-400 hover:shadow-sm active:scale-[0.98] transition-all space-y-0.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-chinese font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400">
                        {opt.textHanzi}
                      </span>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    {showPinyin && (
                      <div className="text-xs font-semibold text-red-600 dark:text-red-400">
                        {opt.textPinyin}
                      </div>
                    )}
                    {showEnglish && (
                      <div className="text-xs text-slate-500">
                        {opt.textEnglish}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Mode 2: Speak Out Loud */}
            {inputMode === 'speak' && (
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-3 text-center">
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Say aloud one of the responses below:
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {currentNode.userOptions.map((opt, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-xl text-xs font-chinese font-bold">
                      "{opt.textHanzi}"
                    </span>
                  ))}
                </div>

                <SpeechMicButton
                  targetText={currentNode.userOptions[0]?.textHanzi || ''}
                  onSuccess={() => {
                    handleUserChooseOption(currentNode.userOptions[0]);
                  }}
                  size="md"
                />
              </div>
            )}

            {/* Mode 3: Manual Type Input */}
            {inputMode === 'type' && (
              <form onSubmit={handleTypeSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={typedMessage}
                  onChange={(e) => setTypedMessage(e.target.value)}
                  placeholder="Type in Chinese or Pinyin..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-md flex items-center gap-1.5"
                >
                  <Send size={15} />
                  <span>Send</span>
                </button>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
