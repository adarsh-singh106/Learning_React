import React from 'react'
import Entries from './Entries'

const Items = ({TaskList ,dletefn}) => {
    if (TaskList.length === 0) {
    return <h3>No tasks yet. Add one!</h3>;
  }
  return (
    <>
    {
        TaskList.map((entry,index)=>( <Entries key={index} TaskName={entry.TaskName} DueDate={entry.DueDate} dletefn={dletefn} id={index}/>))
    }
    </>
  )
}

export default Items