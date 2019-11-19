import React from 'react';

import Clock from './components/Clock';
import DegreeAngle from './components/DegreeAngle';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  indicatorSeconds() {
    return 'indicator seconds ' + (this.state.time.getSeconds() === 0 ? '' : 'transition-effect');
  }

  indicatorMinutes() {
    return 'indicator minutes ' + (this.state.time.getMinutes() === 0 ? '' : 'transition-effect');
  }

  indicatorHours() {
    return 'indicator hours ' + (this.state.time.getHours() === 0 ? '' : 'transition-effect');
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  hourTime() {
    return this.state.time.getHours() % 12 || 12;
  }

  minuteTime() {
    return this.state.time.getMinutes();
  }

  render() {
    const hoursDegrees = this.state.time.getHours() * 30 + this.state.time.getMinutes() / 2;
    const minutesDegrees = this.state.time.getMinutes() * 6 + this.state.time.getSeconds() / 10;
    const secondsDegrees = this.state.time.getSeconds() * 6;

    const divStyleSeconds = {
      transform: 'rotateZ(' + secondsDegrees + 'deg)',
    };

    const divStyleMinutes = {
      transform: 'rotateZ(' + minutesDegrees + 'deg)',
    };

    const divStyleHours = {
      transform: 'rotateZ(' + hoursDegrees + 'deg)',
    };

    const minuteHand = 360 * (this.minuteTime(this.state.time) / 60);
    const hourHand =
      360 * (this.hourTime(this.state.time) / 12) +
      (360 / 12) * (this.minuteTime(this.state.time) / 60);

    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <Clock
              indicatorSeconds={this.indicatorSeconds()}
              indicatorMinutes={this.indicatorMinutes()}
              indicatorHours={this.indicatorHours()}
              divStyleSeconds={divStyleSeconds}
              divStyleMinutes={divStyleMinutes}
              divStyleHours={divStyleHours}
            />

            <DegreeAngle
              localTime={this.state.time.toLocaleTimeString()}
              minuteHand={minuteHand}
              hourHand={hourHand}
              minuteTime={this.minuteTime}
              hourTime={this.hourTime}
            />
          </div>
        </div>
      </div>
    );
  }
}
