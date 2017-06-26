import React, { Component } from 'react';
import Clock from './components/Clock/Clock';
import SelectTime from './components/SelectTime/SelectTime';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Countdown</h1>
        <SelectTime />
        <Clock />
        <Button />
        <Button />
        <Button />

      </div>
    );
  }
}

export default App;