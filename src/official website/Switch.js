import React from 'react';
import '../App.css'

class Switch extends React.Component{
  constructor(props){
    super(props);
    this.state={on:false};
  }
  render(){
    let className="switch";
    if(this.state.on){
      className+=" switch-on"
    }
    return(
      <div onClick={this.click.bind(this)} className={className}>
        <div className="btn"></div>
      </div>
    );
  }
  click(){
    this.setState((currentState)=>({on:!currentState.on}));
  }
}

export default Switch;