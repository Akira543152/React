import React from 'react';

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state={name:"", gender:"male", story:""}; //記錄表單輸入內容
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.name} onChange={this.nameChange.bind(this)}/>
        <input type="submit" value="Submit"/>
          <br/>
        <select name="" id="" value={this.state.gender} onChange={this.hadleHuman.bind(this)}>
          <option value="male">man</option> <option value="female">woman</option>
        </select>
          <br/>
        <textarea name="" id="" cols="30" rows="10" value={this.state.story} onChange={this.handleStory.bind(this)}/>
        </form>
      </div>
    );
    }
    handleSubmit(e){
      e.preventDefault();
      console.log("已送出");
      console.log(this.state.name);
      console.log(this.state.gender);
      console.log(this.state.story);
    }
    nameChange(e){
      this.setState({name:e.currentTarget.value});
    }
    hadleHuman(e){
      this.setState({gender:e.currentTarget.value});
    }
    handleStory(e){
      this.setState({story:e.currentTarget.value});
    }
}
export default MyForm;