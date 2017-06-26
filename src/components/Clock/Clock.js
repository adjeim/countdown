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
		console.log(this.props);
	}

	getCountdown() {
		const hours = this.props.countdown.hours;
		const minutes = this.props.countdown.minutes;
		const seconds = this.props.countdown.seconds;

		this.setState({ hours, minutes, seconds});
		console.log(this.state);
	}

	leadingZero(num) {
		return num < 10 ? '0' + num : num;
	}

	componentWillReceiveProps(nextProps) {
		this.getCountdown();
	}

	// componentDidMount() {
	// 	setInterval(() => this.getCountdown(), 1000);
	// }


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

