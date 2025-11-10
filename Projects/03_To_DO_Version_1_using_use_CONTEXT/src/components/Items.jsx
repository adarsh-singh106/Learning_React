import React, { useContext } from 'react'
import Entries from './Entries'
import { TodoItemsStore } from '../store/ToDo-App-Store';

const Items = () => {

  const FXS = useContext(TodoItemsStore);
  const todoItemsFromContext = FXS.todos;
    if (todoItemsFromContext.length === 0) {
    return <h3>No tasks yet. Add one!</h3>;
  }
  return (
    <>
    {
        todoItemsFromContext.map((entry,index)=>( <Entries key={index} TN={entry.TaskName} DD={entry.DueDate} dletefn={FXS.deleteTodo} id={index}/>))
    }
    </>
  )
}

export default Items