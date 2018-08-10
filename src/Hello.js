import React, {Component} from 'react';
import './App.css';
import TextInput from './Todo/TodoInput'

export class Hello extends Component{
    render(){
        return(
            <div className="Content">
                <h2>{this.props.text}</h2>
                <TextInput title={this.props.title} onTextChange={this.props.onTextChange}/>
            </div>
        );
    }
}
export class Hello2 extends Component{
    render(){
        return(
            <div className="Content">
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}
