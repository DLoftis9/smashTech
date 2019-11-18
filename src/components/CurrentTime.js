import React from 'react';
import PropTypes from 'prop-types';

function CurrentTime() {
    var getTime = new Date();
    var time = getTime.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
    // var time = getTime.getHours()+':'+ getTime.getMinutes()+':'+ getTime.getSeconds();
    const currTime = "Current Time= "+time;

    return (
      <p>{currTime}</p>
    );
  }

  export default CurrentTime;