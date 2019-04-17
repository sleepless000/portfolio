import { connect } from 'react-redux';
import React from 'react';

import { fetchDrawCard } from '../actions/deck';

const DrawCard = ({ deck_id, fetchDrawCard }) => {
  return (
    <div>
      <button onClick={() => fetchDrawCard(deck_id)} disabled={!deck_id}>
        Draw the next card!
      </button>
    </div>
  );
};

export default connect(
  ({ deck: { deck_id } }) => ({ deck_id }),
  { fetchDrawCard }
)(DrawCard);
