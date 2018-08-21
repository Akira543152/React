import React from 'react';

class Timing extends React.Component{
  constructor(props){
    super(props);
    this.state = {munite:0 ,seconds: 0};
  }
  tick(){
    this.setState(prevState =>({
      seconds: prevState.seconds + 1,
    }));
  }
  componentDidMount(){
    this.interval = setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return(
      <div>
        Munite: {this.state.munite}<br/>
        Seconds: {this.state.seconds}<br/>
        <button >reset</button>
      </div>
    );
  }
}

export default Timing;