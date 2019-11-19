import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    minute: PropTypes.number,
    hour: PropTypes.number,
    time: PropTypes.objectOf(PropTypes.func).isRequired,
};

const defaultProps = {
    minute: 38,
    hour: 7,
    time: new Date(),
};

function hourTime(time) {
    return time.getHours() % 12 || 12;
}

function minuteTime(time) {
    return time.getMinutes();
}

function DegreeAngle (props) {

    // var minuteHand = 360 * (props.minute/60);
    // var hourHand = (360 * (props.hour/12)) + ((360/12) * (props.minute/60));

    var minuteHand = 360 * (minuteTime(props.time)/60);
    var hourHand = (360 * (hourTime(props.time)/12)) + ((360/12) * (minuteTime(props.time)/60));
    
    return (
        <React.Fragment>
            <h3>I'm a test {minuteHand} and {hourHand}</h3>
            
            <div>{minuteHand > hourHand ? (
                <React.Fragment>
                    <p className="first-condition">The current degrees for the angle of the clock hands: {minuteHand - hourHand}</p>
                    <p>{hourTime(props.time)}</p>
                    <p>{minuteTime(props.time)}</p>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <p className="second-condition">{hourHand - minuteHand}</p>
                    <p>{hourTime(props.time)}</p>
                    <p>{minuteTime(props.time)}</p>
                </React.Fragment>
            )}</div>
        </React.Fragment>
    );
}

export default DegreeAngle;

DegreeAngle.propTypes = propTypes;
DegreeAngle.defaultProps = defaultProps;