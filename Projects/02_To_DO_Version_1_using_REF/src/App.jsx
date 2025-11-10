import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import './App.css'
import Items from './components/Items'
const App = () => {
  // let Task_Object = []
  const task = useRef();
  const duedate = useRef();
  const [todos, setTodos] = useState('')
  const [errormsg, setErrorMsg] = useState("")

  // cheking function , wether entries are valid or not before adding in to todos
  function addToDO() {
    const istrue = (task.current.value.trim() === "" || duedate.current.value.trim() === "")
    if (istrue) {
      setErrorMsg("⚠ Please enter both Task and Due Date!");
      return;
    }
    else if (istrue === false) {
      let new_todo = { TaskName: task.current.value, DueDate: duedate.current.value }
      setTodos([new_todo, ...todos])
      // clear input + error
      task.current.value = null
      duedate.current.value = null
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
        dueDate={duedate}
        todos={todos}
        setTodos={setTodos}
        errorMsg={setErrorMsg}
        addTodo={addToDO}
        deleteTodo={deleteTodo}
      />
      <Items TaskList={todos} dletefn={deleteTodo} />

    </center>
  )
}

export default App;