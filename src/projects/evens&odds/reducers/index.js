import { combineReducers } from 'redux';

import deckReducer from './deck';
import gameStateReducer from './gameState';
import settingsReducer from './settings';

export default combineReducers({
  settings: settingsReducer,
  deck: deckReducer,
  gameState: gameStateReducer
});
