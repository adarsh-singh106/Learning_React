import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import './App.css'
import Items from './components/Items'
const App = () => {
  // let Task_Object = []
  const [task , setTask] = useState('')
  const [duedate , setDueDate] = useState('')
  const [todos , setTodos] = useState([{ TaskName:"anime" ,DueDate: "12-09-2025" }])
  const [errormsg ,setErrorMsg] = useState("")

  // cheking function , wether entries are valid or not before adding in to todos
  function addToDO() {
    const istrue = (task.trim() === "" || duedate.trim() === "")
    if (istrue){
      setErrorMsg("⚠ Please enter both Task and Due Date!"); 
      return;
    }
    else if (istrue === false){
      let new_todo = {TaskName:task , DueDate:duedate}
      setTodos([new_todo , ...todos])
       // clear input + error
      setTask("");
      setDueDate("");
      setErrorMsg("")
      return;
    } 
  }
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    return;
    
  };

  // // after validation making new todo
  // let new_todo = {task , duedate}

  // // adding onto the todos list 
  // setTodos([new_todo , ...todos])
  // // clear input + error
  

  return (
    <center>
      <Navbar></Navbar>
      <hr />
      <h1>MY TODO's</h1>
      <hr />
     <Grid
  task={task}
  setTask={setTask}
  dueDate={duedate}
  setDueDate={setDueDate}
  todos={todos}
  setTodos={setTodos}
  errorMsg={setErrorMsg}
  addTodo={addToDO}
  deleteTodo={deleteTodo}
/>
      <Items TaskList = {todos} dletefn = {deleteTodo}/>
      
      </center>
  )
}

export default App;