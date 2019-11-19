import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,

  localTime: PropTypes.string.isRequired,
  minuteHand: PropTypes.number.isRequired,
  hourHand: PropTypes.number.isRequired,
};

const defaultProps = {
  componentName: 'degree-angle',
};

const DegreeAngle = props => (
  <div className={props.componentName}>
        <h2>{props.localTime}</h2>

        <div>
          {props.minuteHand > props.hourHand ? (
            <React.Fragment>
              <h3 className="first-condition">
                The current angle of the clock hands: {props.minuteHand - props.hourHand} degrees
              </h3>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h3 className="second-condition">
                The current angle of the clock hands: {props.hourHand - props.minuteHand} degrees
              </h3>
            </React.Fragment>
          )}
        </div>
    </div>
);

DegreeAngle.propTypes = propTypes;
DegreeAngle.defaultProps = defaultProps;

export default DegreeAngle;