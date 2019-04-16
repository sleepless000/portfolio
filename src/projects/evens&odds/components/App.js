import { connect } from 'react-redux';
import React from 'react';
import Card from './Card';

import { cancelGame, startGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import DrawCard from './DrawCard';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';

function App({
  startGame,
  gameStarted,
  cancelGame,
  fetchNewDeck,
  fetchState,
  message
}) {
  const startingGame = () => {
    startGame();
    fetchNewDeck();
  };

  if (fetchState === fetchStates.error) {
    return (
      <>
        <p>Please try reloading the app. An error occurred.</p>
        <p>{message}</p>
      </>
    );
  }
  return (
    <>
      <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
      {gameStarted ? (
        <>
          <h3>The game is on!</h3>
          <br />
          <DrawCard />

          <Card />
          <hr />
          <button onClick={cancelGame}>Cancel Game</button>
        </>
      ) : (
        <>
          <h3>A new game awaits</h3>
          <br />
          <button onClick={startingGame}>Start Game</button>
          <hr />
          <Instructions />
        </>
      )}
    </>
  );
}

const mapStateToProps = state => {
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;
  return { gameStarted, fetchState, message };
};

export default connect(
  mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
)(App);
