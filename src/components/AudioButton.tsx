import React, { useState } from 'react';
import { Volume2, Volume1, Snail } from 'lucide-react';
import { speakChinese } from '../utils/speech';
import { useApp } from '../context/AppContext';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  showSlowOption?: boolean;
  className?: string;
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  showSlowOption = true,
  className = '',
  label
}) => {
  const { progress } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSlowPlaying, setIsSlowPlaying] = useState(false);

  const handlePlayNormal = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;
    setIsPlaying(true);
    await speakChinese(text, progress.settings.speechRate || 1.0);
    setIsPlaying(false);
  };

  const handlePlaySlow = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSlowPlaying) return;
    setIsSlowPlaying(true);
    await speakChinese(text, 0.75);
    setIsSlowPlaying(false);
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'p-3 text-base',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <button
        onClick={handlePlayNormal}
        title="Listen to native audio (Normal speed)"
        aria-label={`Listen to ${text}`}
        className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-red-50 text-red-700 hover:bg-red-100 active:scale-95 transition-all duration-150 border border-red-200 shadow-sm dark:bg-red-950/60 dark:text-red-300 dark:border-red-800 ${sizeClasses[size]} ${
          isPlaying ? 'ring-2 ring-red-400 animate-pulse' : ''
        }`}
      >
        {isPlaying ? (
          <Volume1 size={iconSizes[size]} className="animate-bounce" />
        ) : (
          <Volume2 size={iconSizes[size]} />
        )}
        {label && <span className="font-semibold">{label}</span>}
      </button>

      {showSlowOption && (
        <button
          onClick={handlePlaySlow}
          title="Listen at slow speed (0.75x)"
          aria-label={`Listen slowly to ${text}`}
          className={`inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-700 active:scale-95 transition-all duration-150 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 ${sizeClasses[size]} ${
            isSlowPlaying ? 'ring-2 ring-amber-400 bg-amber-50 text-amber-700' : ''
          }`}
        >
          <Snail size={iconSizes[size] - 2} />
        </button>
      )}
    </div>
  );
};
