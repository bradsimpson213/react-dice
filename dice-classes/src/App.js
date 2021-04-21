import React, { Component } from 'react';
import DiceRoll from './DiceRoll';
import './App.css';

// TODO: Refactor this component to be a functional component

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
