import React from 'react';

class MyHead extends React.Component{
  constructor(props){
    super(props);
    this.state={maxLevel:3};
    window.setTimeout((
      this.setState((currentState)=>({maxLevel:currentState+1}))
    ),2000);
  }
  render(){
    return React.createElement(
      "H"+this.state.maxLevel,null,"jfiojfijei"
    );
  }
}
export default MyHead;