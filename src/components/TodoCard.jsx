import React from 'react';
import '../Styles/TodoCard.css';

export default function TodoCard(props) {
    const {children, handleDleteTodo, index, handleEditTodo} = props

    



  return (
    <div>
    <li id='liId'>
    {children}
    <div id='TodoCardButtons' >
    <button  onClick={() => {handleEditTodo(index)}}><i className="fa-solid fa-pen"></i></button>
    
    <button onClick={() => {handleDleteTodo(index)}}><i className="fa-solid fa-trash-can"></i></button>
    </div>
    </li></div>
  )
}
