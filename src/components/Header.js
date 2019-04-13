import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  // display: 'inline-block',
  // margin: 10,
  // marginBottom: 30
};

function Header({ children }) {
  return (
    <div id="nav-header">
      <div className="nav justify-content-center mb-2">
        <h3 style={style}>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </h3>

        <h3 style={style}>
          <NavLink className="nav-link" to="/music-master">
            Music Master
          </NavLink>
        </h3>
        <h3 style={style}>
          <NavLink className="nav-link" to="/evens-or-odds">
            Evens or Odds
          </NavLink>
        </h3>
      </div>
      {children}
    </div>
  );
}

export default Header;
