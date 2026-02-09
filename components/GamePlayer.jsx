import React, { useState, useEffect } from 'react';

const GamePlayer = ({ game, onBack }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleFullscreen = () => {
    const frame = document.getElementById('game-frame-container');
    if (!frame) return;

    if (!document.fullscreenElement) {
      frame.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <button 
            onClick={onBack}
            className="text-cyan-500 hover:text-cyan-400 text-sm font-semibold flex items-center gap-1 mb-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Library
          </button>
          <h2 className="text-3xl font-black text-white">{game.title}</h2>
          <div className="flex items-center gap-4 mt-2">
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
              {game.category}
            </span>
            <div className="flex items-center text-yellow-500">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-slate-400 text-xs">(12.4k plays)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all font-bold text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Mode'}
          </button>
          <button 
            className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            title="Favorite"
          >
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        id="game-frame-container"
        className={`relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/10 border-4 border-slate-900 ${isFullscreen ? 'h-screen w-screen rounded-none border-none' : ''}`}
      >
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-10">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-cyan-400 font-bold tracking-widest animate-pulse">BOOTING GAME ENGINE...</p>
            <p className="mt-2 text-slate-500 text-sm">Please wait while we connect to the server</p>
          </div>
        )}
        
        <iframe
          src={game.iframeUrl}
          className="w-full h-full border-none"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={game.title}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">About the Game</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            {game.description} Immerse yourself in {game.title}, a top-tier {game.category.toLowerCase()} experience. 
            Designed to be lightweight and fast, this version is specifically optimized for browser-based play. 
            No downloads, no installations, just pure gaming fun.
          </p>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pro Tips
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-xs">F</kbd> to toggle full-screen at any time.
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    Some games work better with an external mouse.
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    If the game doesn't load, try refreshing the page.
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;