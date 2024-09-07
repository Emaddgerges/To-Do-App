import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'


function App() {
  

   const [todos, setTodos] = useState ([])
   const [todoValue, setTodoValue] = useState('');

   function persisData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos:newList }
   ))
  }

   function handleNewTodos(newTodo) {
    const newTodoList = [...todos,newTodo]
    persisData(newTodoList)
    setTodos(newTodoList)

   }  
   


   function handleDleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persisData(newTodoList)
    setTodos(newTodoList);
  }


  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDleteTodo(index)

  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)


  },[])


  function err() {
    if(todoValue == ""){
      return(alert(Error
      ))
    }
  }



  return (
    <div id='mainSours'>

             <h1 className='header' id='header'>To-Do App</h1>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleNewTodos={handleNewTodos} err={err}/>
    
      <TodoList todos={todos} handleDleteTodo={handleDleteTodo} handleEditTodo={handleEditTodo}/>
      
     
      
   
    </div>
  )
}

export default App
