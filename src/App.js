import React, { Component } from 'react';
import Clock from './components/Clock/Clock';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className = "App">
        <h1 className = 'title'>Countdown</h1>
        <Clock />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;