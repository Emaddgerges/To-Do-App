import { useState } from "react";
import '../Styles/TodoInput.css';

export default function TodoInput(props) {
    const {handleNewTodos, todoValue,setTodoValue} = props;

    function Task() {
      if(todoValue == ""){
        return(alert("No Task"
        ))
        
      }
      else{handleNewTodos(todoValue)
        setTodoValue('');}
    }
  


    return (
        <>
           <div className="inputcontener" id="inputcontener">
             <input type="text"
              id="inputInput" 
              value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
               }} placeholder="New Todo ...." 
               maxLength={100} minLength={4} required />
             <button id="inputButton" onClick={() => {
              Task()
               }} >
                    Add 
             </button>
             <span>{}</span>
             
           </div>
        </>
    )
}