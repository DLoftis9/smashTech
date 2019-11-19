import React from 'react';
import PropTypes from 'prop-types';

export default class DegreeAngle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    hourTime() {
        return this.state.time.getHours() % 12 || 12;
    }

    minuteTime() {
        return this.state.time.getMinutes();
    }

    tick() {
      this.setState({
        time: new Date()
      });
    }
  
    render() {
        var minuteHand = 360 * (this.minuteTime(this.state.time)/60);
        var hourHand = (360 * (this.hourTime(this.state.time)/12)) + ((360/12) * (this.minuteTime(this.state.time)/60));

        return (
            <React.Fragment>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                
                <div>{minuteHand > hourHand ? (
                    <React.Fragment>
                        <p className="first-condition">The current angle of the clock hands: {minuteHand - hourHand} degrees</p>
                        <p>{this.hourTime(this.state.time)}</p>
                        <p>{this.minuteTime(this.state.time)}</p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="second-condition">The current angle of the clock hands: {hourHand - minuteHand} degrees</p>
                        <p>{this.hourTime(this.state.time)}</p>
                        <p>{this.minuteTime(this.state.time)}</p>
                    </React.Fragment>
                )}</div>
            </React.Fragment>
        );
    }
  }