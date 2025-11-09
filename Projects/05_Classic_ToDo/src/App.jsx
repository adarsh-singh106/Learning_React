import React from 'react'
import AppName from './components/AppName'
import TaskList from './components/TaskList'
const App = () => {
  function onDelete(index){
    
  }
  let mytasks = [
    { name:"chess",
      due:"12-09-2025",
      cat:"work"
    },
    { name:"cricket",
      due:"11-09-2025",
      cat:"play"
    },
    { name:"study",
      due:"13-09-2025",
      cat:"study"
    }
  ]
  return (
    <><AppName></AppName>
    <hr />
    <TaskList tasks={mytasks}></TaskList>
    </>
  )
}

export default App