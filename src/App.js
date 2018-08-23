import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import HelloMessage from './official website/Hello';
import MyHead from './official website/Hello';
=======
>>>>>>> 37019a2e1cb8778519f68218049f410a6cbf6b39

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyHead level="1"/>
        <MyHead level="2"/>
        <MyHead level="3"/>
      </div>
    );
  }
}

export default App;
