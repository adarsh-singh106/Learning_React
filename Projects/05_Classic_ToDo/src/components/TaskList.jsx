import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
  return (
    <>
    
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </>
  )
}

export default TaskList;
