import React from 'react';
import { formatNumber } from '../../utils';

const Artist = ({ artist }) => {
  if (!artist) return null;

  const { images, name, followers, genres } = artist;

  return (
    <div>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        style={{
          margin: 20,
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover'
        }}
      />
      <h2>{name}</h2>
      <p>{formatNumber(followers.total)} followers</p>
      <p>{genres.join(', ')}</p>
    </div>
  );
};

export default Artist;
