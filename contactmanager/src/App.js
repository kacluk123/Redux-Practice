import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
          <Contact name = "John Doe" email="jdoe@gmail.com

            " phone="555-555-5555"/>
          <Contact name = "Caren Doe" email="cdoe@gmail.com

          " phone="342-423-6543"/>
          <Contact name = "Caren Hoe" email="csdoe@gmail.com

          " phone="342-4223-6543"/>
      </div>
    );
  }
}

export default App;
