import React from 'react';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({text: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }
    const newItem = {
      rext: this.state.text,
      id:Date.now()
    };
    this.setState(prevState =>({
      items: prevState.items.concat(newItem),
      text:''
    }));
  }

  render(){
    return(
      <div>
        <h3>Todo</h3>
        <Todolist items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">what needs to be done ?</label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>add {this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

class Todolist extends React.Component{
  render(){
    return(
      <ul>
        {this.props.items.map(item=>(
          <li key= {item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, mountNode);
