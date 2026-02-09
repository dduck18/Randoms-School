
import { Game, GameCategory } from './types';

export const GAMES: Game[] = [
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://picsum.photos/seed/2048/400/250',
    iframeUrl: 'https://play2048.co/',
    category: GameCategory.PUZZLE,
    description: 'Join the numbers and get to the 2048 tile!'
  },
  {
    id: 'hextris',
    title: 'Hextris',
    thumbnail: 'https://picsum.photos/seed/hextris/400/250',
    iframeUrl: 'https://hextris.io/',
    category: GameCategory.ARCADE,
    description: 'A fast-paced puzzle game inspired by Tetris.'
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    thumbnail: 'https://picsum.photos/seed/mines/400/250',
    iframeUrl: 'https://minesweeper.online/game/1',
    category: GameCategory.STRATEGY,
    description: 'Classic minesweeper gameplay. Clear the board without hitting a mine.'
  },
  {
    id: 'tower-game',
    title: 'Tower Master',
    thumbnail: 'https://picsum.photos/seed/tower/400/250',
    iframeUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: GameCategory.ARCADE,
    description: 'Classic arcade experience in your browser.'
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    thumbnail: 'https://picsum.photos/seed/crossy/400/250',
    iframeUrl: 'https://poki.com/en/g/crossy-road',
    category: GameCategory.ACTION,
    description: 'Why did the chicken cross the road? Find out in this endless hopper.'
  },
  {
    id: 'sudoku',
    title: 'Daily Sudoku',
    thumbnail: 'https://picsum.photos/seed/sudoku/400/250',
    iframeUrl: 'https://www.websudoku.com/',
    category: GameCategory.PUZZLE,
    description: 'Classic number placement puzzle for brain training.'
  },
  {
    id: 'retro-snake',
    title: 'Retro Snake',
    thumbnail: 'https://picsum.photos/seed/snake/400/250',
    iframeUrl: 'https://snake.io/',
    category: GameCategory.ARCADE,
    description: 'The legendary snake game with a modern twist.'
  }
];
