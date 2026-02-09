
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  iframeUrl: string;
  category: GameCategory;
  description: string;
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  STRATEGY = 'Strategy',
  SPORTS = 'Sports',
  ARCADE = 'Arcade'
}

export type ViewState = 'home' | 'game';
