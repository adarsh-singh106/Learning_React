import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import './App.css'
import Items from './components/Items'
import { TodoItemsStore } from './store/ToDo-App-Store'
const App = () => {
  // let Task_Object = []
  const [task, setTask] = useState('')
  const [duedate, setDueDate] = useState('')
  const [todos, setTodos] = useState([])
  const [errormsg, setErrorMsg] = useState("")

  // cheking function , wether entries are valid or not before adding in to todos
  function addToDO(task, duedate) {
    const istrue = (task.trim() === "" || duedate.trim() === "")
    if (istrue) {
      setErrorMsg("⚠ Please enter both Task and Due Date!");
      return;
    }
    else if (istrue === false) {
      let new_todo = { TaskName: task, DueDate: duedate }
      setTodos([new_todo, ...todos])
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
    <TodoItemsStore.Provider value={{ todos, addToDO, deleteTodo, task, setTask, duedate, setDueDate }}>
      <center>
        <Navbar></Navbar>
        <hr />
        <h1>MY TODO's</h1>
        <hr />
        <Grid />
        <Items />

      </center>
    </TodoItemsStore.Provider>
  )
}

export default App;