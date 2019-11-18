import React from 'react';
import Clock from './components/Clock';
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Clock />
          <CurrentTime />
        </div>
      </div>
    </div>
  );
}

export default App;
