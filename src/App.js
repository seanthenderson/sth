import React, { Component } from 'react';
import './Global.css';
import Header from './components/Header.js';
import Circles from './components/Circles.js';
import WorkSamples from './components/WorkSamples.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Circles />
        <WorkSamples />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
