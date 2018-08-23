import React from 'react';
import '../App.css'

class MyHead extends React.Component{
  constructor(props){
    super(props);
    this.state={color:"pink"};
  }
  render(){
    //return React.createElement("h1", null, "bakayaro"); 標題bakayaro，大小為H1，無屬性
    return(<div className="head"
    style={{color:this.state.color}}
    onClick={this.clickHandler.bind(this)}
    onMouseOver={this.mouseOverHhadle.bind(this)}
    onMouseOut={this.mouseOut.bind(this)}>
      <h1>bakayaro{this.props.level}</h1>
    </div>);
  }
  clickHandler(e){
    //點擊時換顏色
    this.setState({color:"blue"});
  }
  mouseOverHhadle(){
    //滑鼠移進時換顏色
    this.setState({color:"red"});
  }
  mouseOut(){
    this.setState({color:"pink"});
  }
}

export default MyHead;
