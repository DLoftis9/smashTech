import React from 'react';

class DegreeChart extends React.Component {
    constructor(props) {
      super(props);
      
      this.drawSlices = this.drawSlices.bind(this);
    }
    
    componentDidMount() {
      this.drawSlices();
    }
  
    getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);
      
      return [x, y];
    }
    
    drawSlices() {
      let cumulativePercent = 0;
      
      this.props.slices.forEach(slice => {
        // destructuring assignment sets the two variables at once
        const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);
  
        // each slice starts where the last slice ended, so keep a cumulative percent
        cumulativePercent += Number(slice.percent);
  
        const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);
  
        // if the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag = slice.percent > .5 ? 1 : 0;
  
        // create an array and join it just for code readability
        const pathData = [
          `M ${startX} ${startY}`, // Move
          `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          `L 0 0`, // Line
        ].join(' ');
  
        // create a <path> and append it to the <svg> element
        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', pathData);
        pathEl.setAttribute('fill', slice.color);
        
        this.svg.appendChild(pathEl);
      });
    }
    
    render() {
      return (
        <svg 
          className="pie-chart"
          viewBox="-1 -1 2 2"
          ref={(svg) => { this.svg = svg; }}
         ></svg>
      );
    }
    
    componentDidUpdate() {
      while (this.svg.hasChildNodes()) {
        this.svg.removeChild(this.svg.lastChild);
      }
      
      this.drawSlices();
    }
  }
  
export default class Container extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        fillPercent: 0
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.getSlicesFromPercent = this.getSlicesFromPercent.bind(this);
    }
    
    handleChange(event) {    
      this.setState({
        fillPercent: event.target.value
      });
    }
    
    getSlicesFromPercent() {
      const start = this.state.fillPercent;
      const end = 1 - this.state.fillPercent;
          
      return [
        { percent: start, color: '#CE2B37' },
        { percent: end, color: '#009246' }
      ];
    }
    
    render() {
      const slices = this.getSlicesFromPercent();
      
      return (
        <main>
          <DegreeChart slices={slices}/>
          <input 
            type="number" 
            name="percent" 
            step="0.01" min="0" max="1"
            value={this.state.fillPercent} 
            onChange={this.handleChange}
            />
        </main>
      )
    }
  }