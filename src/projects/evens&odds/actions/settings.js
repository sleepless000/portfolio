import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from './types';

export const startGame = () => ({
  type: SET_GAME_STARTED,
  gameStarted: true
});

export const cancelGame = () => ({
  type: SET_GAME_STARTED,
  gameStarted: false
});

export const expandInstructions = () => ({
  type: SET_INSTRUCTIONS_EXPANDED,
  instructionsExpanded: true
});

export const collapseInstructions = () => ({
  type: SET_INSTRUCTIONS_EXPANDED,
  instructionsExpanded: false
});
