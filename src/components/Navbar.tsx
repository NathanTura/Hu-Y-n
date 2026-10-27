import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  Mic, 
  MessageSquare, 
  Headphones, 
  Layers, 
  Sparkles, 
  Settings, 
  Sun, 
  Moon, 
  Target,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { ActiveView } from '../context/AppContext';
import { getDueWords } from '../utils/srs';

export const Navbar: React.FC = () => {
  const { 
    progress, 
    activeView, 
    setActiveView, 
    openDailyPractice, 
    openSettings,
    updateSettings 
  } = useApp();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const goalPercent = Math.min(100, Math.round((progress.todayXp / progress.dailyGoalXp) * 100));
  const dueWords = getDueWords(progress.vocabSRS);

  const toggleTheme = () => {
    updateSettings({
      theme: progress.settings.theme === 'dark' ? 'light' : 'dark'
    });
  };

  // 5 core dock items for mobile thumb reach
  const mobileDockItems: { id: ActiveView; label: string; icon: any; badge?: number }[] = [
    { id: 'dashboard', label: 'Roadmap', icon: BookOpen },
    { id: 'pronunciation', label: 'Tones', icon: Mic },
    { id: 'conversation', label: 'Dialogue', icon: MessageSquare },
    { id: 'listening', label: 'Listen', icon: Headphones },
    { id: 'review', label: 'Review', icon: Sparkles, badge: dueWords.length },
  ];

  // Full 6 items for desktop dock & mobile drawer
  const allNavItems: { id: ActiveView; label: string; icon: any; badge?: number }[] = [
    { id: 'dashboard', label: 'Roadmap', icon: BookOpen },
    { id: 'pronunciation', label: 'Tones & Speech', icon: Mic },
    { id: 'conversation', label: 'Dialogue Trainer', icon: MessageSquare },
    { id: 'listening', label: 'Listening Lab', icon: Headphones },
    { id: 'vocab', label: 'Vocab Bank', icon: Layers },
    { id: 'review', label: 'SRS Review', icon: Sparkles, badge: dueWords.length },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ======================================================== */}
      {/* TOP HEADER: 100% RESPONSIVE WITH ZERO HORIZONTAL OVERFLOW */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            
            {/* 1. Brand Logo */}
            <div 
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-2 cursor-pointer group shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform shrink-0">
                <span className="font-chinese font-black text-sm sm:text-base">华音</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-black text-slate-100 tracking-tight text-sm sm:text-base">
                  HuāYīn
                </span>
                <span className="hidden xs:inline-block text-[9px] font-black px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 uppercase">
                  Free
                </span>
              </div>
            </div>

            {/* 2. Desktop Navigation Dock (Visible on Large screens) */}
            <nav className="hidden xl:flex items-center p-1 rounded-2xl bg-slate-900/90 border border-white/[0.08] gap-1 shadow-inner">
              {allNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-500/25'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className={`text-[10px] font-black px-1.5 rounded-full ${
                        isActive ? 'bg-white text-red-600' : 'bg-red-500/30 text-red-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* 3. Right Status & Controls (Mobile Optimized: No Overflow!) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              
              {/* Streak Pill */}
              <div 
                className="flex items-center gap-1 px-2 py-1 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/25 font-black text-xs shrink-0"
                title={`${progress.streak} Day Learning Streak`}
              >
                <Flame size={14} className="text-amber-500 fill-amber-500 animate-pulse" />
                <span>{progress.streak}</span>
                <span className="hidden sm:inline text-[10px] text-amber-400/80 font-normal">d</span>
              </div>

              {/* XP Pill (Hidden on tiny mobile screens to avoid cramming) */}
              <div 
                className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-xl bg-red-500/10 text-red-400 border border-red-500/25 font-black text-xs shrink-0"
                title={`${progress.xp} Total XP earned`}
              >
                <Zap size={13} className="text-red-500 fill-red-500" />
                <span>{progress.xp}</span>
              </div>

              {/* Daily Target Pill (Visible on md+) */}
              <button 
                onClick={openDailyPractice}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-white/[0.08] text-xs font-semibold text-slate-300 hover:border-emerald-500/40 transition-colors"
                title={`Daily Target: ${progress.todayXp}/${progress.dailyGoalXp} XP`}
              >
                <Target size={13} className="text-emerald-400" />
                <span className="text-xs font-bold">{progress.todayXp}/{progress.dailyGoalXp}</span>
                <div className="w-8 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${goalPercent}%` }}
                  />
                </div>
              </button>

              {/* Glowing Daily 10m CTA Button (Visible on sm+) */}
              <button
                onClick={openDailyPractice}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white font-extrabold text-xs shadow-md shadow-red-500/20 active:scale-95 transition-all shrink-0"
              >
                <Sparkles size={12} className="text-amber-200" />
                <span>Daily 10m</span>
              </button>

              {/* PROMINENT AUTO DARK / LIGHT MODE SWITCH (Always Visible!) */}
              <button
                onClick={toggleTheme}
                title={progress.settings.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-slate-900 border border-white/[0.12] hover:border-amber-400/50 text-slate-300 font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
                aria-label="Toggle dark mode"
              >
                {progress.settings.theme === 'dark' ? (
                  <>
                    <Moon size={15} className="text-blue-400 fill-blue-400/30" />
                    <span className="hidden md:inline text-[10px]">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun size={15} className="text-amber-400 fill-amber-400/30" />
                    <span className="hidden md:inline text-[10px]">Light</span>
                  </>
                )}
              </button>

              {/* Settings Gear */}
              <button
                onClick={openSettings}
                title="Settings"
                className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
              >
                <Settings size={17} />
              </button>

              {/* Mobile Drawer Hamburger */}
              <button
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="xl:hidden p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
                aria-label="Toggle navigation drawer"
              >
                {mobileDrawerOpen ? <X size={19} /> : <Menu size={19} />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileDrawerOpen && (
          <div className="xl:hidden border-t border-white/[0.08] bg-slate-950/95 backdrop-blur-2xl px-4 py-4 space-y-3 animate-fade-in shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {allNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 p-3 rounded-2xl text-xs font-bold text-left transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                        : 'text-slate-300 bg-slate-900/80 border border-white/[0.06] hover:bg-slate-800'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full bg-red-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                setMobileDrawerOpen(false);
                openDailyPractice();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-extrabold text-xs shadow-md"
            >
              <Sparkles size={15} />
              <span>Launch 10-Min Daily Practice Session</span>
            </button>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* REACTBITS STYLE: MOBILE FLOATING BOTTOM DOCK */}
      {/* Ergonomic 5-item thumb dock on mobile */}
      {/* ======================================================== */}
      <div className="xl:hidden fixed bottom-2 inset-x-2 sm:inset-x-4 z-40 pointer-events-none pb-[env(safe-area-inset-bottom)]">
        <nav className="pointer-events-auto max-w-sm mx-auto p-1.5 rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-white/[0.12] shadow-2xl flex items-center justify-between gap-1">
          {mobileDockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all flex-1 ${
                  isActive
                    ? 'text-white font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-red-600/40 to-amber-500/20 border border-red-500/30 -z-10" />
                )}

                <div className="relative">
                  <Icon size={18} className={isActive ? 'text-amber-400 scale-105' : ''} />
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1 -right-2 px-1 rounded-full bg-red-500 text-white text-[8px] font-black leading-tight shadow-sm">
                      {item.badge > 99 ? '99+' : item.badge}
                    </span>
                  )}
                </div>

                <span className="text-[10px] mt-0.5 tracking-tight leading-none font-medium">
                  {item.label}
                </span>

                {isActive && (
                  <span className="w-1 h-1 bg-amber-400 rounded-full mt-0.5" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};
