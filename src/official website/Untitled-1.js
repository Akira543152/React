import React from 'react';
import '../App.css';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={
      circle:0,
      marks:[-1,-1,-1,-1,-1,-1,-1,-1,-1],
      winner:null,
    };
  }
  render(){
    let cells=[];
    for(let i=0;i<this.state.marks.length;i++){
      cells.push(<Cell index={i} update={this.updateMark.bind(this)} mark={this.state.marks[i]}/>)
    }
    if(this.state.winner!==null){
      cells.push(<Line
        startIndex={this.state.winner.startIndex}
        endIndex={this.state.winner.endIndex}/>)
    }
    return(
      <div className="board">{cells}</div>
    );
  }
  updateMark(index){
    let currentMark=this.state.marks[index];
    //目前標記是-1，表示框框空白 & winner=null表示沒贏家
    if(currentMark===-1 && this.state.winner===null){
      this.setState((preState)=>{
        let mark = preState.circle%2;
        preState.marks[index]=mark;
        let winner=this.checkWinner(preState.marks);
        return{
          circle:preState.circle+1,
          marks:preState.marks,
          winner:winner,
        }
      });
    }
  }
  //check
  checkWinner(marks){
    //Level
    for(let y=0;y<3;y++){
      if(marks[y*3]!==-1 && marks[y*3]===marks[y*3+1] && marks[y*3+1]===[y*3+2]){
        return{side:marks[y*3], startIndex:y*3, endIndex:y*3+2};
      }
    }
    //vertical
    for(let x=0; x<3; x++){
      if(marks[x]!==-1 && marks[x]===marks[3+x] && marks[3+x]===marks[2*3+x]){
        return {side:marks[x], startIndex:x, endIndex:2*3+x};
      }
    }
    //Slash
    if(marks[0]!==-1 && marks[0]===marks[4] && marks[4]===marks[8]){
      return{side:marks[0], startIndex:0, endIndex:8};
    }
    else if(marks[2]!==-1 && marks[2]===marks[4] && marks[4]===marks[6]){
      return{side:marks[2], startIndex:2, endIndex:6};
    }
    return null;
  }
}

class Cell extends React.Component{
  render(){
    let text=""
    if(this.props.mark===0){
      text="O";
    }else if(this.props.mark===1){
      text="X";
    }
    return(
      <div className="cell" onClick={this.Click.bind(this)}>{text}</div>
    )
  }
  Click(){
    this.props.update(this.props.index);
  }
}
class Line extends React.Component{
  //根據贏家資訊：startIndex & endIndex，把線條svg標籤畫在畫面上
  render(){
    let startX=this.props.startIndex%3;
    let startY=Math.floor(this.props.startIndex/3);
    let endX=this.props.endIndex%3;
    let endY=Math.floor(this.props.endIndex/3);
    return<svg className="line"><line x1={startX*100+50} y1={startY*100+50} x2={endX*100+50} y2={endY*100+50} stroke="red" strokeWidth="5" />></svg>
  }
}

export default Board;