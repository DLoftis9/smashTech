import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,

  localTime: PropTypes.string,
  minuteHand: PropTypes.number,
  hourHand: PropTypes.number,
};

const defaultProps = {
  componentName: 'degree-angle',
};

const DegreeAngle = props => (
  <div className={props.componentName}>
    <h2 className="local-time">{props.localTime}</h2>

    <React.Fragment>
      {props.minuteHand > props.hourHand ? (
        <h3 className="first-condition">
          The current angle of the clock hands: {props.minuteHand - props.hourHand} degrees
        </h3>
      ) : (
        <h3 className="second-condition">
          The current angle of the clock hands: {props.hourHand - props.minuteHand} degrees
        </h3>
      )}
    </React.Fragment>
  </div>
);

DegreeAngle.propTypes = propTypes;
DegreeAngle.defaultProps = defaultProps;

export default DegreeAngle;
