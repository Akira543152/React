import '../App.css'

class Line extends React.Component{
  render(){

    return
  }
}

class Cell extends React.Component{ //框框組件
  render(){
    let text=""; //變數
    if(this.props.mark===0){ //如果mark是0，它就是圈圈
      text="O"
    }else if(this.props.mark===1){ //如果mark是1，它就是叉叉
      text="X";
    }
    return(
      <div className="cell" onClick={this.click.bind(this)}>{text}</div>
    );
  }
  click(){
    this.props.update(this.props.index); //呼叫update並且把編號當成參數傳遞進去
  }
}
/*
框框編號
    0 1 2
    3 4 5
    6 7 8
ex.
  0-3-6等於一條線
  0-4-8等於一條線
*/;

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={ //初始化狀態
      circle:0, //回合數
      marks:[-1,-1,-1,-1,-1,-1,-1,-1,-1], //九宮格，-1無 0圈 1叉
      winner:null, //贏家資訊，預設沒有
    }
  }
  render(){
    let cells=[]; //建立cells陣列
    for(let i=0; i<this.state.marks.length;i++){ //利用for迴圈去巡迴marks陣列
      //在for迴圈中建立框框組件 <組件名稱 index={傳框框編號（0~8）到index}>
      //uptate={}點擊時呼叫（callback）updateMark
      //mark={this.state.marks[i]} 把marks標記（-1, 0, 1）記錄到Cell的mark裡面
      cells.push(<Cell index={i} mark={this.state.marks[i]} update={this.updateMark.bind(this)}/>)
    }
    if(this.state.winner!==null){ //如果winner不等於null，代表遊戲有贏家(一條線))
      cells.push(<Line/>); //有連線就把線放上去
    }
    return( //製作遊戲盤
      <div className="board">{cells}</div>
    );
  }
  updateMark(index){ //更新框框的標記
    let currentMark=this.state.marks[index];
    if(currentMark===-1 && this.state.winner===null){ //目前ㄧ標記必須是-1 and 無贏家，才做更新
      this.setState((preState)=>{
        let mark=preState.circle%2; //輪流點擊，如果目前1以點擊完，就換0
        preState.marks[index]=mark; //把圈叉的標記記錄到marks裡面
        let winner=this.checkWinner(preState.marks);
        return{
          circle:preState.circle+1,
          marks:preState.marks,
          winner:winner,
        };
      })
    }
  }
  checkWinner(marks){//檢查又沒有連成一條線
    let index;
    //檢查水平方向
    for(let y=0; y<3; y++){
      if(marks[y*3]!==-1 && mark[y*3]===marks[y*3+1] && [y*3+1]===marks[y*3+2]){
        return {side:marks[y*3], startIndex:y*3, endIndex:y*3+2};
      }
    }
  }
}
