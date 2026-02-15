import React, { useState, useRef, useEffect } from 'react';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reliable royalty-free sources (Fallbacks included)
  const PLAYLIST = [
    // Source: Pixabay - "Inspirational Background"
    "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3",
    // Fallback 1: "Ambient Classical Guitar"
    "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3",
    // Fallback 2: "Soft Piano"
    "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    const handleError = (e: any) => {
       console.warn(`Audio source ${currentSourceIndex} failed. Switching...`, e);
       if (currentSourceIndex < PLAYLIST.length - 1) {
           setCurrentSourceIndex(prev => prev + 1);
       } else {
           console.error("All audio sources failed.");
           setAudioError(true);
       }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    // --- Aggressive Autoplay Logic ---
    const playAudio = async () => {
      try {
        await audio.play();
        console.log("Autoplay successful");
      } catch (err) {
        console.log("Autoplay prevented by browser. Waiting for interaction.");
      }
    };

    // 1. Try immediately
    playAudio();

    // 2. Try on first interaction (Click, Touch, Key)
    const unlockHandler = () => {
      playAudio();
      // Remove listeners once we've tried to unlock
      ['click', 'touchstart', 'keydown'].forEach(event => 
        document.removeEventListener(event, unlockHandler)
      );
    };

    ['click', 'touchstart', 'keydown'].forEach(event => 
      document.addEventListener(event, unlockHandler)
    );

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      ['click', 'touchstart', 'keydown'].forEach(event => 
        document.removeEventListener(event, unlockHandler)
      );
    };
  }, [currentSourceIndex]); // Re-run if source changes

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio || audioError) return;

    if (audio.paused) {
      audio.play().catch(e => console.error("Manual play failed:", e));
    } else {
      audio.pause();
    }
  };

  if (audioError) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-all duration-500">
      <audio 
        ref={audioRef} 
        src={PLAYLIST[currentSourceIndex]} 
        loop 
        preload="auto"
        crossOrigin="anonymous"
      />

      <button
        onClick={togglePlay}
        className={`group flex items-center gap-3 pl-1 pr-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 shadow-xl hover:scale-105 ${
          isPlaying
            ? 'bg-brand-gold/90 border-brand-gold text-brand-navy'
            : 'bg-brand-navy/80 border-white/10 text-white/70 hover:bg-brand-navy hover:text-white hover:border-brand-gold/50'
        }`}
      >
        <div className={`w-9 h-9 rounded-full flex items-center justify-center border border-white/10 relative overflow-hidden transition-colors ${isPlaying ? 'bg-white/20' : 'bg-black/20'}`}>
            {isPlaying ? (
                <div className="flex items-end gap-[2px] h-3">
                    <span className="w-[2px] bg-current h-full animate-[music-bar_0.6s_ease-in-out_infinite]"></span>
                    <span className="w-[2px] bg-current h-1/2 animate-[music-bar_0.8s_ease-in-out_infinite_0.1s]"></span>
                    <span className="w-[2px] bg-current h-3/4 animate-[music-bar_0.5s_ease-in-out_infinite_0.2s]"></span>
                </div>
            ) : (
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            )}
        </div>

        <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                {isPlaying ? 'Sound On' : 'Play Music'}
            </span>
            <span className="text-[8px] opacity-80 leading-none mt-1 font-mono">
                Motivation Flow
            </span>
        </div>
      </button>

      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
};