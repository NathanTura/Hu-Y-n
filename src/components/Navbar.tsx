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
  Menu, 
  X,
  Target
} from 'lucide-react';
import { useApp, ActiveView } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { 
    progress, 
    activeView, 
    setActiveView, 
    openDailyPractice, 
    openSettings,
    updateSettings 
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goalPercent = Math.min(100, Math.round((progress.todayXp / progress.dailyGoalXp) * 100));

  const toggleTheme = () => {
    updateSettings({
      theme: progress.settings.theme === 'dark' ? 'light' : 'dark'
    });
  };

  const navItems: { id: ActiveView; label: string; chinese: string; icon: any }[] = [
    { id: 'dashboard', label: 'Roadmap', chinese: '课程', icon: BookOpen },
    { id: 'pronunciation', label: 'Tones & Speech', chinese: '发音', icon: Mic },
    { id: 'conversation', label: 'Conversations', chinese: '对话', icon: MessageSquare },
    { id: 'listening', label: 'Listening Lab', chinese: '听力', icon: Headphones },
    { id: 'vocab', label: 'Vocab Bank', chinese: '生词', icon: Layers },
    { id: 'review', label: 'SRS Review', chinese: '复习', icon: Sparkles },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="font-chinese font-bold text-lg">华音</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-lg">
                  HuāYīn
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 font-bold uppercase tracking-wider">
                  Free
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                Mandarin Speaking Academy
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-red-600 dark:text-red-400' : ''} />
                  <span>{item.label}</span>
                  <span className="font-chinese text-[11px] opacity-70">({item.chinese})</span>
                </button>
              );
            })}
          </nav>

          {/* Stats & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Counter */}
            <div 
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900 font-bold text-xs"
              title={`${progress.streak} Day Learning Streak!`}
            >
              <Flame size={16} className="text-amber-500 fill-amber-500 animate-pulse" />
              <span>{progress.streak}</span>
              <span className="hidden sm:inline font-normal text-[11px]">days</span>
            </div>

            {/* Total XP */}
            <div 
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400 border border-red-200/60 dark:border-red-900 font-bold text-xs"
              title={`${progress.xp} Total XP earned`}
            >
              <Zap size={16} className="text-red-500 fill-red-500" />
              <span>{progress.xp}</span>
              <span className="hidden sm:inline font-normal text-[11px]">XP</span>
            </div>

            {/* Daily Goal Progress */}
            <div 
              onClick={openDailyPractice}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={`Daily Goal: ${progress.todayXp}/${progress.dailyGoalXp} XP`}
            >
              <Target size={15} className="text-emerald-500" />
              <span>{progress.todayXp}/{progress.dailyGoalXp}</span>
              <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${goalPercent}%` }}
                />
              </div>
            </div>

            {/* Daily Practice CTA */}
            <button
              onClick={openDailyPractice}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-xs shadow-md shadow-red-500/20 hover:brightness-105 active:scale-95 transition-all"
            >
              <Sparkles size={14} />
              <span>Daily 10m</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle dark mode"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {progress.settings.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Settings */}
            <button
              onClick={openSettings}
              title="Settings"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Settings size={18} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2 animate-fade-in">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon size={16} />
                  <div>
                    <div>{item.label}</div>
                    <div className="text-[10px] opacity-60 font-chinese">{item.chinese}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openDailyPractice();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-sm shadow-md"
          >
            <Sparkles size={16} />
            <span>Launch 10-Min Daily Practice Session</span>
          </button>
        </div>
      )}
    </header>
  );
};
