import React, {Component} from 'react';
import './App.css';

class Hello extends Component{
    render(){
        return <div className="Content"><h2>{this.props.text}</h2></div>;
    }
}
export default Hello