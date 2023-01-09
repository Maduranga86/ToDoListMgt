import React from 'react';
/*import Demo from './components/Demo.js';

import Demo1 from './components/Demo1.js';
import Parent from './components/Parent.js';
import Sample from './components/Sample.js';*/
import './App.css';
import ToDoList from './components/ToDoList.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash,faPlus,faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash,faEdit,faPlus);

function App() {
  return (
    <div className="App">
        
       <ToDoList></ToDoList>
       
     
    </div>
  );
}

export default App;
