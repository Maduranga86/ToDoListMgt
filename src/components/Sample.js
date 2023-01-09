import React, { Component } from 'react';
export default class Sample extends Component {
    state ={
        a:'Hello Bro'
    };

    handleButtonClick =() => {
        console.log("Inside Button  Clicked");
        //this.state.a ="You Pressed Button";
        this.setState({
            a:"You Mother Fucker"
        });
    };
    render () {
        return (
            <div> 
                <h3> { this.state.a } </h3>
                <button type="button" onClick={this.handleButtonClick}>Click Me</button>
            </div>
            

        );
    }
}