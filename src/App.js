import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import HelloMessage from './official website/Hello';
// import MyForm from './official website/Form';
// import Switch from './official website/Switch';
import Board from './official website/OXGame';



class App extends Component {
  render() {
    return (
      /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */
      <div className="App">
          <Board/>
      </div>
    );
  }
}

export default App;
