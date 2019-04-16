import { SET_GUESS } from './types';

export const setGuessEven = () => ({
  type: SET_GUESS,
  guess: 'even'
});

export const setGuessOdd = () => ({
  type: SET_GUESS,
  guess: 'odd'
});
