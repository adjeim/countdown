import React, { Component } from 'react';
import Clock from './components/Clock/Clock';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0     
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ 
      [name]: value
    });

  }

  handleSubmit(event) {
    console.log('Timer data was submitted: ' + this.state.hours + ' hours ' + this.state.minutes + ' minutes ' + this.state.seconds + ' seconds');
    event.preventDefault();
  }

  render() {
    return (
      <div className = "App">
        <h1 className = 'title'>Countdown</h1>

        <form className = 'SelectTime' onSubmit = {this.handleSubmit}>
          <label>
            <input type = 'number' name = 'hours' value = {this.state.hours} onChange = {this.handleChange} min ='0' max = '24' /> hours
          </label>
          <label>
            <input type = 'number' name = 'minutes' value = {this.state.minutes} onChange = {this.handleChange} min ='0' max = '60' /> minutes
          </label>
          <label>
            <input type = 'number' name = 'seconds' value = {this.state.seconds} onChange = {this.handleChange} min ='0' max = '60' /> seconds
          </label>
          <button type = 'submit'>Set Timer</button>
        </form>

        <Clock 
          countdown = {this.state}
          />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;