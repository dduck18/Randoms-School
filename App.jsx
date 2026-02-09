import React, { useState, useMemo } from 'react';
import { GAMES } from './games.js';
import { GameCategory } from './constants.js';
import Navbar from './components/Navbar.jsx';
import GameCard from './components/GameCard.jsx';
import GamePlayer from './components/GamePlayer.jsx';

const App = () => {
  const [view, setView] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(GameCategory.ALL);

  const filteredGames = useMemo(() => {
    return GAMES.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handlePlayGame = (game) => {
    setSelectedGame(game);
    setView('game');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar 
        onSearch={setSearchQuery} 
        onLogoClick={handleBackToHome}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        isHome={view === 'home'}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        {view === 'home' ? (
          <div className="animate-in fade-in duration-700">
            <header className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Explore The Nexus
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Discover a curated collection of premium web-based games. 
                Optimized for performance and completely unblocked.
              </p>
            </header>

            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onPlay={() => handlePlayGame(game)} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-block p-6 bg-slate-900 rounded-2xl border border-slate-800">
                  <p className="text-slate-500 text-xl">No games found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setActiveCategory(GameCategory.ALL)}}
                    className="mt-4 text-cyan-400 hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          selectedGame && (
            <GamePlayer 
              game={selectedGame} 
              onBack={handleBackToHome} 
            />
          )
        )}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nexus Games. Built for speed and accessibility.
          </p>
          <p className="text-slate-600 text-xs mt-2 italic">
            Disclaimer: All games belong to their respective creators. This site provides an iframe portal for easy access.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;