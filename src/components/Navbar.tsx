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

  const navItems: { id: ActiveView; label: string; shortLabel: string; icon: any; badge?: number }[] = [
    { id: 'dashboard', label: 'Roadmap', shortLabel: 'Roadmap', icon: BookOpen },
    { id: 'pronunciation', label: 'Tones & Speech', shortLabel: 'Tones', icon: Mic },
    { id: 'conversation', label: 'Dialogue Trainer', shortLabel: 'Chat', icon: MessageSquare },
    { id: 'listening', label: 'Listening Lab', shortLabel: 'Listen', icon: Headphones },
    { id: 'vocab', label: 'Vocab Bank', shortLabel: 'Vocab', icon: Layers },
    { id: 'review', label: 'SRS Review', shortLabel: 'Review', icon: Sparkles, badge: dueWords.length },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ======================================================== */}
      {/* DESKTOP & MOBILE TOP HEADER */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            
            {/* 1. Left: Brand Logo & Title */}
            <div 
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            >
              {/* Chinese Seal Stamp Icon with glowing gradient */}
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-200">
                  <span className="font-chinese font-black text-base sm:text-lg tracking-wider">华音</span>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-slate-100 tracking-tight text-base sm:text-lg">
                    HuāYīn
                  </span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider">
                    Free
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium hidden md:block leading-none">
                  Mandarin Speaking Academy
                </p>
              </div>
            </div>

            {/* 2. Center: Sleek Desktop Navigation Dock (Clean & Uncrowded) */}
            <nav className="hidden xl:flex items-center p-1 rounded-2xl bg-slate-900/90 border border-white/[0.08] shadow-inner gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-500/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
                    <span>{item.label}</span>

                    {/* Badge for items due */}
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white text-red-600' : 'bg-red-500/30 text-red-400 border border-red-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* 3. Right: Consolidated Status Capsule & Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              
              {/* Streak Pill */}
              <div 
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/25 font-black text-xs shadow-sm hover:bg-amber-500/20 transition-colors"
                title={`${progress.streak} Day Learning Streak!`}
              >
                <Flame size={15} className="text-amber-500 fill-amber-500 animate-pulse" />
                <span>{progress.streak}</span>
                <span className="hidden sm:inline text-[10px] text-amber-400/80 font-semibold">d</span>
              </div>

              {/* XP Pill */}
              <div 
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/25 font-black text-xs shadow-sm hover:bg-red-500/20 transition-colors"
                title={`${progress.xp} Total XP earned`}
              >
                <Zap size={14} className="text-red-500 fill-red-500" />
                <span>{progress.xp}</span>
                <span className="hidden sm:inline text-[10px] text-red-400/80 font-semibold">XP</span>
              </div>

              {/* Daily Goal Progress Capsule */}
              <button 
                onClick={openDailyPractice}
                className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-white/[0.08] text-xs font-semibold hover:border-emerald-500/40 transition-colors"
                title={`Daily Target: ${progress.todayXp}/${progress.dailyGoalXp} XP`}
              >
                <Target size={14} className="text-emerald-400" />
                <span className="text-slate-300 font-bold">{progress.todayXp}/{progress.dailyGoalXp}</span>
                <div className="w-10 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${goalPercent}%` }}
                  />
                </div>
              </button>

              {/* Glowing Daily 10m CTA Button */}
              <button
                onClick={openDailyPractice}
                className="relative group flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white font-extrabold text-xs shadow-lg shadow-red-500/25 hover:shadow-red-500/40 active:scale-95 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Sparkles size={13} className="text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="tracking-wide">Daily 10m</span>
              </button>

              {/* Settings Gear */}
              <button
                onClick={openSettings}
                title="Audio & Application Settings"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] border border-transparent hover:border-white/[0.08] transition-all"
              >
                <Settings size={17} />
              </button>

              {/* Mobile Drawer Toggle (Tablet & below) */}
              <button
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Open menu"
              >
                {mobileDrawerOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer for Tablet / Screen sizes below XL */}
        {mobileDrawerOpen && (
          <div className="xl:hidden border-t border-white/[0.08] bg-slate-950/95 backdrop-blur-2xl px-4 py-4 space-y-3 animate-fade-in shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold text-left transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                        : 'text-slate-300 bg-slate-900/80 border border-white/[0.06] hover:bg-slate-800'
                    }`}
                  >
                    <Icon size={16} />
                    <div className="flex-1">
                      <div>{item.label}</div>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full bg-red-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Theme / Mode</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 font-bold"
              >
                {progress.settings.theme === 'dark' ? (
                  <><Sun size={14} className="text-amber-400" /> Light</>
                ) : (
                  <><Moon size={14} className="text-blue-400" /> Dark</>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* REACTBITS STYLE: MOBILE FLOATING BOTTOM DOCK */}
      {/* Touch-optimized for phones and small screens */}
      {/* ======================================================== */}
      <div className="xl:hidden fixed bottom-3 inset-x-3 z-40 pointer-events-none">
        <nav className="pointer-events-auto max-w-md mx-auto p-1.5 rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-white/[0.12] shadow-2xl flex items-center justify-around gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex flex-col items-center justify-center py-2 px-2.5 rounded-2xl transition-all duration-200 flex-1 ${
                  isActive
                    ? 'text-white font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Active ambient glow pill */}
                {isActive && (
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-600/40 to-amber-500/20 border border-red-500/30 -z-10" />
                )}

                <div className="relative">
                  <Icon size={18} className={isActive ? 'text-amber-400 scale-110 transition-transform' : ''} />
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 bg-red-500 text-white rounded-full text-[9px] font-black flex items-center justify-center shadow-sm">
                      {item.badge > 99 ? '99+' : item.badge}
                    </span>
                  )}
                </div>

                <span className="text-[10px] mt-1 tracking-tight leading-none">
                  {item.shortLabel}
                </span>

                {/* Micro LED dot under active item */}
                {isActive && (
                  <span className="w-1 h-1 bg-amber-400 rounded-full mt-1 shadow-sm shadow-amber-400" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};
