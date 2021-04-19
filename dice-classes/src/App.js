import React, { Component } from 'react';
import DiceRoll from './DiceRoll';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title-text">Welcome to React Dice!</div>
        <DiceRoll />
      </div>
    );
  };
};

export default App;
