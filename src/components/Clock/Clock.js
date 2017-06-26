import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	setTimer() {

	}

	render() {
		console.log(this.state.hours, 'hours', this.state.minutes, 'minutes', this.state.seconds, 'seconds');

		return (
			<div>
	      <form className = 'SelectTime'>
	      	<input type = 'number' min ='0' max = '24' default = { this.state.hours } /> hours
	      	<input type = 'number' min ='0' max = '60' default = { this.state.minutes } /> minutes
	      	<input type = 'number' min ='0' max = '60' default = { this.state.seconds } /> seconds
	      </form>
	      
				<div className = 'Clock-face'>
					This is where the clock will go.
				</div>
			</div>

		);
	}
}

export default Clock;

