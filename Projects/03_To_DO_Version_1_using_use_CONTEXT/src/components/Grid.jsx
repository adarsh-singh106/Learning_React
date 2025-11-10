import React, { useContext } from 'react'
import { useState } from 'react'
import { TodoItemsStore } from '../store/ToDo-App-Store'

const Grid = ({

  errorMsg,

}) => {


  const addToDo_from_Context = useContext(TodoItemsStore);


  return (
    <div className="container text-center">

      <div className="row">
        <div className="col-6">
          <input type="text" placeholder='Enter To-Dos Here' value={addToDo_from_Context.task} onChange={(e) => addToDo_from_Context.setTask(e.target.value)} />
        </div>
        <div className="col-4">
          <input type="date" value={addToDo_from_Context.duedate} onChange={(e) => addToDo_from_Context.setDueDate(e.target.value)} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success ashbutt"
            onClick={() => addToDo_from_Context.addToDO(
              addToDo_from_Context.task,
              addToDo_from_Context.duedate
            )}
          >
            Add
          </button>

        </div>
      </div>
    </div>
  )
}

export default Grid;