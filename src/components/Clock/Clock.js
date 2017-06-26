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
		console.log(this.props);
	}

	setTimer() {
		// this.setState({ hours, minutes, seconds});

	}

	render() {
		// console.log(this.state.hours, 'hours', this.state.minutes, 'minutes', this.state.seconds, 'seconds');
		// console.log(this.props);

		return (
			<div>



				<div className = 'Clock-face'>
					This is where the clock will go.
					<div>
						<span className = 'hours'>{ this.props.hours }:</span>
						<span className = 'minutes'>{ this.props.minutes }:</span>
						<span className = 'seconds'>{ this.props.seconds }</span>
					</div>
				</div>
			</div>

		);
	}
}

export default Clock;

