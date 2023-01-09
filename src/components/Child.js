import React, { Component } from 'react';

export default class Child extends Component{
    render(){
        return (
            <div>
                <h3> I am Child Ass Hole </h3>
                <h6>{this.props.Title}</h6 >
            </div>
        );
    }

}