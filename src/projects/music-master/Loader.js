import { GridLoader } from 'react-spinners';
import React from 'react';

const Loader = () => (
  <div
    style={{
      display: 'flex',
      height: '60vh'
    }}
  >
    <div style={{ margin: 'auto' }}>
      <GridLoader size={25} />
    </div>
  </div>
);

export default Loader;
