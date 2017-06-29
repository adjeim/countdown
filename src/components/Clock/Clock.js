import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: 0,
			minutes: 0,
			seconds: 0,
      onTimer: 0
		}
		console.log(this.props);
	}

	getInitialCountdown(props) {
    const hours = props.countdown.hours;
    const minutes = props.countdown.minutes;
    const seconds = props.countdown.seconds;
    const onTimer = (hours * 1000 * 60 * 60) + (minutes * 1000 * 60) + (seconds * 1000);

    this.setState({ hours, minutes, seconds, onTimer});
	}

	updateCountdown() {
    const onTimer = this.state.onTimer - 1000;
    console.log(onTimer);

    const seconds = (Math.floor(onTimer / 1000) % 60);
    const minutes = (Math.floor(onTimer / 1000 / 60) % 60);
    const hours = (Math.floor(onTimer / 1000 / 60 / 60) % 24);

    this.setState({ hours, minutes, seconds, onTimer });



	}

	leadingZero(num) {
		return num < 10 ? '0' + num : num;
	}

	componentWillReceiveProps(nextProps) {
		this.getInitialCountdown(nextProps);
	}

	componentDidMount() {
		setInterval(() => this.updateCountdown(this.state.onTimer), 1000);
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

