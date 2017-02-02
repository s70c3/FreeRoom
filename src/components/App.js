import React, { Component } from 'react';
import '../styles/App.css';
import Map from './Map.js'

class App extends Component {
  static render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to FreeRoom App</h2>
        </div>
          <nav className="App-menu">
              <div className="Menu-element">Map</div>
              <div className="Menu-element">List</div>
              <div className="Menu-element">Occupy</div>
              <div className="Menu-element">Stats</div>
          </nav>
          <div className="Map">
          <Map />
          </div>
        <p className="App-intro">
          The application try to help you find a free room in Main Campus of ITMO University.
            You can use the map to see enable rooms now or use a list of free room.
            You can occupy room too.
            At same time you can see a stats.
        </p>
      </div>
    );
  }
}

export default App;
