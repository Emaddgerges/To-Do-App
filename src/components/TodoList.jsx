import React from 'react'
import TodoCard from './TodoCard';
import '../Styles/TodoList.css';

export default function TodoList(props) {
    const {todos, err} = props
   
  return (
    <div >{todos.map((todo,todoIndex) =>{
      if(err )
        return(
      alert(bad)
         
        )
        else
        return( <TodoCard {...props} key={todoIndex} index={todoIndex}>
          <p id='todoP'>{todo}</p>
          </TodoCard>)
    })}</div>
  )
}
