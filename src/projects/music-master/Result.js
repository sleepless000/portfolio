import React from 'react';
import Artist from './Artist';
import Tracks from './Tracks';

function Result({ artist, tracks }) {
  return (
    <>
      <Artist artist={artist} />
      <Tracks tracks={tracks} />{' '}
    </>
  );
}

export default Result;
