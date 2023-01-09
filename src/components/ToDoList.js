import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import AddToDo from "./AddToDo";
export default class ToDoList extends Component {
    state ={
        todos:[
            {Id:'1', Title:'Push you code to GitHub', Status:'Done'},
            {Id:'2', Title:'Email your manager', Status:'Pending'}
        ]
    }

    deleteToDo =(todos) => {
        const filteredItems = this.state.todos.filter(x=> x.Id !== todos.Id);
        this.setState({
            todos:filteredItems
        });
    };

    AddToDo=(todo)=>{
        this.setState({

            todos:[...this.state.todos,todo]
        });

    };
    editToDo =(x)=>{
        this.setState(state=>({
            todos:state.todos.map(todo=>{
                if(todo.Id === x.Id){
                    return{
                        ...todo,
                        Status:todo.Status ==="Done" ? "Pending":"Done"
                    };

                }else{
                    return todo;
                }
            })

        }));

    };
    render(){
        return(
            <div>
                <AddToDo onAdd={this.AddToDo}></AddToDo>
                <h1>To Do List</h1>
                <table width="100%">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Title </th>
                            <th> Status </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(x =>{
                            return (
                                <tr key={x.Id}>
                                    <td>{x.Id}</td>
                                    <td>{x.Title}</td>
                                    <td style={{color:x.Status === "Done"?"green":"red"}}>{x.Status}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>this.deleteToDo(x)}>
                                           <span>
                                            <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                           </span>
                                        </button>
                                        |
                                        <button className="btn btn-primary" onClick={()=>this.editToDo(x)}>
                                           <span>
                                            <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                           </span>
                                        </button>
                                        |
                                           <button className="btn btn-primary">
                                           <span>
                                            <FontAwesomeIcon icon="faPlus"></FontAwesomeIcon>
                                           </span>
                                        
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}