import React from 'react';
import PropTypes from 'prop-types';

import ClockSVG from './ClockSVG';

const propTypes = {
  componentName: PropTypes.string,

  indicatorSeconds: PropTypes.string.isRequired,
  indicatorMinutes: PropTypes.string.isRequired,
  indicatorHours: PropTypes.string.isRequired,

  divStyleSeconds: PropTypes.object.isRequired,
  divStyleMinutes: PropTypes.object.isRequired,
  divStyleHours: PropTypes.object.isRequired,
};

const defaultProps = {
  componentName: 'clock',
};

const Clock = props => (
  <React.Fragment>
    <div className={props.componentName}>
      <div className={props.componentName + `-content`}>
        <ClockSVG />
        <div
          className={props.indicatorHours}
          style={props.divStyleHours}
        ></div>

        <div
          className={props.indicatorMinutes}
          style={props.divStyleMinutes}
        ></div>

        <div
          className={props.indicatorSeconds}
          style={props.divStyleSeconds}
        ></div>
        
        <div className={props.componentName + `-center`}></div>
      </div>
    </div>
  </React.Fragment>
);

Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;

export default Clock;
