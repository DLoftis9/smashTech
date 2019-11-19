import React from 'react';
import Clock from './components/Clock';
import DegreeAngle from './components/DegreeAngle';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Clock />
          <DegreeAngle />
        </div>
      </div>
    </div>
  );
}

export default App;
