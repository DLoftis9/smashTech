import React from 'react';
import PropTypes from 'prop-types';

// export default class DegreeAngle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   hourTime() {
//     return this.state.time.getHours() % 12 || 12;
//   }

//   minuteTime() {
//     return this.state.time.getMinutes();
//   }

//   tick() {
//     this.setState({
//       time: new Date(),
//     });
//   }

//   render() {
//     const minuteHand = 360 * (this.minuteTime(this.state.time) / 60);
//     const hourHand =
//       360 * (this.hourTime(this.state.time) / 12) +
//       (360 / 12) * (this.minuteTime(this.state.time) / 60);
//     const firstCondition = minuteHand - hourHand;
//     const secondCondition = hourHand - minuteHand;

//     return (
//       <React.Fragment>
//         <h2>{this.state.time.toLocaleTimeString()}</h2>

//         <div>
//           {minuteHand > hourHand ? (
//             <React.Fragment>
//               <h3 className="first-condition">
//                 The current angle of the clock hands: {firstCondition} degrees
//               </h3>
//               <p>{this.hourTime(this.state.time)}</p>
//               <p>{this.minuteTime(this.state.time)}</p>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               <h3 className="second-condition">
//                 The current angle of the clock hands: {secondCondition} degrees
//               </h3>
//               <p>{this.hourTime(this.state.time)}</p>
//               <p>{this.minuteTime(this.state.time)}</p>
//             </React.Fragment>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }


const propTypes = {
  componentName: PropTypes.string,

  localTime: PropTypes.string.isRequired,
  minuteHand: PropTypes.string.isRequired,
  hourHand: PropTypes.string.isRequired,
  firstCondition: PropTypes.string.isRequired,
  secondCondition: PropTypes.string.isRequired,
  hourTime: PropTypes.string.isRequired,
  minuteTime: PropTypes.string.isRequired,
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