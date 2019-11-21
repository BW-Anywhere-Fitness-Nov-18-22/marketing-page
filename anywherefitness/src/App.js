import React from 'react';
import './App.css';
import Nav from './components/nav';
import MainContent from './components/main';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      < Footer/>
    </div>
  );
}

export default App;