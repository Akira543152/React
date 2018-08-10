import React, { Component } from 'react';
import {Hello, Hello2 } from './Hello';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      text:''
    }

  }
  handleChange = (e) =>{
    this.setState({text: e.target.value});
    this.props.onChange(this.state.text);
  }
  render() {
    return (
      <div>
        <div id="App-title">
        To do list
        </div>
        <div className="Conall">
          {
          <Hello text="代辦清單" title={this.state.text} onTextChange={this.handleChange}></Hello>
          <Hello2 text="完成清單"></Hello2>
          }
        </div>
      </div>
    );
  }
}

export default App;
