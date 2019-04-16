import { DECK, DECK_DRAW } from './types';

export const fetchDeckSuccess = ({ remaining, deck_id }) => ({
  type: DECK.FETCH_SUCCESS,
  remaining,
  deck_id
});

export const fetchDeckError = error => ({
  type: DECK.FETCH_ERROR,
  message: error.message
});

export const fetchNewDeck = () => async dispatch => {
  try {
    const res = await fetch(
      'https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle'
    );
    if (res.status !== 200)
      throw new Error('Unsuccessful request to deckofcardsapi.com');
    const json = await res.json();
    return dispatch(fetchDeckSuccess(json));
  } catch (err) {
    dispatch(fetchDeckError(err));
  }
};

export const fetchDrawCard = deck_id => async dispatch => {
  try {
    const res = await fetch(
      `https://deck-of-cards-api-wrapper.appspot.com/deck/${deck_id}/draw`
    );
    if (res.status !== 200)
      throw new Error('Unsuccessful request to deckofcardsapi.com');
    const json = await res.json(res);
    return dispatch({
      type: DECK_DRAW.FETCH_SUCCESS,
      cards: json.cards,
      remaining: json.remaining
    });
  } catch (err) {
    dispatch({ type: DECK_DRAW.FETCH_ERROR, message: err.message });
  }
};
