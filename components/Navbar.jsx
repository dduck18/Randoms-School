import React from 'react';
import { GameCategory } from '../constants.js';

const Navbar = ({ 
  onSearch, 
  onLogoClick, 
  activeCategory, 
  onCategoryChange,
  isHome
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 px-4 py-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          onClick={onLogoClick} 
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/20 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            Nexus<span className="text-cyan-400">Games</span>
          </span>
        </div>

        {isHome && (
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64 lg:w-96">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block pl-10 p-2.5 outline-none transition-all placeholder-slate-600"
                placeholder="Search your favorite games..."
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              {Object.values(GameCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-900/30' 
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {!isHome && (
          <button 
            onClick={onLogoClick}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Exit Game</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;