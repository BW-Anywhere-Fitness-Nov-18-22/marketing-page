import React from 'react';
import logo from './images/logo.png'

function Nav() {
  return (
    <div className="Navigation">
      <header className="nav-logo">
        <img src={logo} alt="logo" height="50px" width="100px" />
      </header>
      <header className="nav-menu">
        <a href="#">Login</a>
        <button href="#">Signup</button>
      </header>
    </div>
  );
}

export default Nav;
