import React from 'react';
import styled from 'styled-components';

function Footer() {

  const Footer = styled.div`
    text-align: center;
    margin: 30px;
    background-color: black;
    color: white;
  `
  return (
    <Footer className="Footer">
      Copyright © Anywhere Fitness Team 2019
    </Footer>
  );
}

export default Footer;
