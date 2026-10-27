import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { LessonViewer } from './components/LessonViewer';
import { ConversationSimulator } from './components/ConversationSimulator';
import { PronunciationTrainer } from './components/PronunciationTrainer';
import { ListeningLab } from './components/ListeningLab';
import { VocabNotebook } from './components/VocabNotebook';
import { ReviewCenter } from './components/ReviewCenter';
import { DailyPracticeModal } from './components/DailyPracticeModal';
import { SettingsModal } from './components/SettingsModal';
import { Heart } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeView, setActiveView } = useApp();

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-950 text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-hidden pb-24 xl:pb-16">
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'lesson' && <LessonViewer />}
        {activeView === 'conversation' && <ConversationSimulator />}
        {activeView === 'pronunciation' && <PronunciationTrainer />}
        {activeView === 'listening' && <ListeningLab />}
        {activeView === 'vocab' && <VocabNotebook />}
        {activeView === 'review' && <ReviewCenter />}
      </main>

      {/* Global Modals */}
      <DailyPracticeModal />
      <SettingsModal />

      {/* Modern Footer */}
      <footer className="border-t border-white/[0.08] bg-slate-950 py-10 pb-28 xl:pb-10 transition-colors w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white font-chinese font-bold text-sm shadow-sm">
                华
              </div>
              <div>
                <span className="font-extrabold text-sm text-white">
                  HuāYīn (华音) Mandarin Speaking Academy
                </span>
                <p className="text-xs text-slate-400">
                  Speak & Understand Mandarin Chinese • 100% Free Forever
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
              <button onClick={() => setActiveView('dashboard')} className="hover:text-red-400">Roadmap</button>
              <button onClick={() => setActiveView('pronunciation')} className="hover:text-red-400">Tones</button>
              <button onClick={() => setActiveView('conversation')} className="hover:text-red-400">Conversations</button>
              <button onClick={() => setActiveView('listening')} className="hover:text-red-400">Listening</button>
              <button onClick={() => setActiveView('vocab')} className="hover:text-red-400">Vocabulary</button>
              <button onClick={() => setActiveView('review')} className="hover:text-red-400">SRS Review</button>
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <p>
              Built for real-life conversational fluency. No accounts, paywalls, or paid APIs required.
            </p>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Made with</span>
              <Heart size={13} className="text-red-500 fill-red-500" />
              <span>for Mandarin learners worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
