import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    minute: PropTypes.number,
    hour: PropTypes.number,
};

const defaultProps = {
    minute: 15,
    hour: 2,
};

function DegreeAngle (props) {

    var minuteHand = 360 * (props.minute/60);
    var hourHand = (360 * (props.hour/12)) + ((360/12) * (props.minute/60));
    
    console.log(minuteHand - hourHand);
    
    return (
        
        <React.Fragment>
            <p>I'm a test {minuteHand} and {hourHand}</p>
            
            <p>{minuteHand > hourHand ? (
                <span className="first-condition">{minuteHand - hourHand}</span>
            ) : (
                <span className="second-condition">{hourHand - minuteHand}</span>
            )}</p>
        </React.Fragment>
    );
}

export default DegreeAngle;

DegreeAngle.propTypes = propTypes;
DegreeAngle.defaultProps = defaultProps;

// function clock_angles(hour, minute) {
//     // first workout the minute angle
//       var minAngle = 360*(minute/60);
//     // then work out hour angle
//     // first the hour then the hour + mins
//       var hourAngle = (360*(hour/12))+((360/12)*(minute/60));
//       console.log("minute angle = " + minAngle);
//       console.log("hour angle = " + hourAngle);
//     //if minute angle greater than hour angle
//       if(minAngle > hourAngle) {
//           return minAngle - hourAngle;
//       }
//     //if minute angle less than minute angle
//       else {
//           return hourAngle - minAngle;
//       }
//   }
  
//   console.log(clock_angles(2,15));