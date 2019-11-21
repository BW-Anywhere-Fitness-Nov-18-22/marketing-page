import React from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';

function Nav() {

  const Navigation = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: auto;

.nav-menu {
  margin-top: 30px;
}
  
    .nav-menu a{
      margin: 10px;
      text-decoration: none;
    
    }

    img {
      margin-top: 20px;
    }

    .nav-menu .button{
      background-color: red;
      padding: 20px;
      color:white;
      border-radius: 20px;
      margin-top: 80px;
      width: 200px;
    }
  `
  return (
    <Navigation className="Navigation">
      <header className="nav-logo">
        <img src={logo} alt="logo" height="50px" width="120px" />
      </header>
      <header className="nav-menu">
        <a href="#">Login</a>
        <a href="https://anywherefitnessn1822.netlify.com/" class="button">Sign Up</a>
      </header>
    </Navigation>
  );
}

export default Nav;
