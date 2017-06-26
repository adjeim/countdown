import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: 0,
			minutes: 0,
			seconds: 0,
			deadline: ''
		}
		// console.log(this.props);
	}

	getCountdown(props) {
		const hours = props.countdown.hours;
		const minutes = props.countdown.minutes;
		const seconds = props.countdown.seconds;

		this.setState({ hours, minutes, seconds});
		// console.log(this.state);
	}

	leadingZero(num) {
		return num < 10 ? '0' + num : num;
	}

	componentWillReceiveProps(nextProps) {
		this.getCountdown(nextProps);
	}




	render() {

		return (
			<div>
				<div className = 'Clock-face'>
					<div>
						<span className = 'hours'>{ this.leadingZero(this.state.hours) }:</span>
						<span className = 'minutes'>{ this.leadingZero(this.state.minutes) }:</span>
						<span className = 'seconds'>{ this.leadingZero(this.state.seconds) }</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Clock;

