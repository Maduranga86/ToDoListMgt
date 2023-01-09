import React, { Component } from 'react';
import Child from './Child';
import Demo1 from './Demo1';


export default class Parent extends Component{
    render() {
        return (
            <div>
                <h1> I am Parent Ass Hole</h1>
                <Child Title ="I am Text from Parent Component JackAss"> </Child>
                <Demo1 Title="I am Text form Functional Components"></Demo1>
            </div>

        );
    }
}