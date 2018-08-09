import React, { Component } from 'react';
import Hello from './Hello';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="App-title">
        To do list
        </div>
        <div className="Conall">
          <Hello text="代辦清單"></Hello>
          <Hello text="完成清單"></Hello>
        </div>
      </div>
    );
  }
}

export default App;
