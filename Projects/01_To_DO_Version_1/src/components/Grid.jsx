import React from 'react'

const Grid = ({
  task,
  setTask,
  dueDate,
  setDueDate,
  todos,
  setTodos,
  errorMsg,
  addTodo,
  deleteTodo
}) => {



  return (
    <div className="container text-center">
  
  <div className="row">
    <div className="col-6">
        <input type="text" placeholder='Enter To-Dos Here' value={task} onChange={(e)=>setTask(e.target.value)}/>
    </div>
    <div className="col-4">
        <input type="date"  value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
    </div>
    <div className="col-2">
        <button type="button" className="btn btn-success ashbutt" onClick={addTodo}>Add</button>
    </div>
  </div>
</div>
  )
}

export default Grid;