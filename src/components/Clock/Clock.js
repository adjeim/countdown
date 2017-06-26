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

	getTime() {
		const hours = this.props.hours;
		const minutes = this.props.minutes;
		const seconds = this.props.seconds;

		this.setState({ hours, minutes, seconds});
	}

	leadingZero(num) {
		return num < 10 ? '0' + num : num;
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

