import React from 'react';
import PropTypes from 'prop-types';

import ClockSVG from './ClockSVG';

const propTypes = {
  componentName: PropTypes.string,

  indicatorSeconds: PropTypes.string,
  indicatorMinutes: PropTypes.string,
  indicatorHours: PropTypes.string,

  divStyleSeconds: PropTypes.object,
  divStyleMinutes: PropTypes.object,
  divStyleHours: PropTypes.object,
};

const defaultProps = {
  componentName: 'clock',
};

const Clock = props => (
  <div className={props.componentName}>
    <div className={props.componentName + `-content`}>
      <ClockSVG />
      <div className={props.indicatorHours} style={props.divStyleHours}></div>

      <div className={props.indicatorMinutes} style={props.divStyleMinutes}></div>

      <div className={props.indicatorSeconds} style={props.divStyleSeconds}></div>

      <div className={props.componentName + `-center`}></div>
    </div>
  </div>
);

Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;

export default Clock;
