import React from 'react';

const GameCard = ({ game, onPlay }) => {
  return (
    <div 
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
      onClick={onPlay}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-all shadow-xl">
            PLAY NOW
          </button>
        </div>
        <span className="absolute top-3 left-3 px-2 py-1 bg-slate-950/80 backdrop-blur text-[10px] font-black tracking-widest uppercase rounded border border-slate-700/50 text-cyan-400">
          {game.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
          {game.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mt-1 min-h-[40px]">
          {game.description}
        </p>
      </div>

      <div className="absolute inset-0 cursor-pointer" aria-hidden="true" />
    </div>
  );
};

export default GameCard;