import React, { Component } from 'react';
import logo from './logo.svg';
import './Global.css';
import Header from './components/Header.js';
import Bigcircles from './components/Bigcircles.js';
import WorkSamples from './components/WorkSamples.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bigcircles />
        <WorkSamples />
      </div>
    );
  }
}

export default App;
