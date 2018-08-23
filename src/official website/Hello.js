import React from 'react';
import '../App.css'

class MyHead extends React.Component{
  constructor(props){
    super(props);
    this.props='2';
  }
  render(){
    //return React.createElement("h1", null, "bakayaro"); 標題bakayaro，大小為H1，無屬性
    return(<div className="head"><h1>bakayaro{this.props.level}</h1></div>);
  }
}

export default MyHead;