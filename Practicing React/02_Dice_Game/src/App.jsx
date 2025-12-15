import { useState } from 'react'
import './App.css'
import Game from './components/Game Page/Game'
import Home from './components/HomePage/Home'

function App() {
  const [isGameStarted ,setisGameStrted] = useState()
  const toggleGamePlay = () =>{
    setisGameStrted((prev) => !(prev))
  }


  return (
    <>
    {isGameStarted ? <Game/> : <Home toggle={toggleGamePlay} />}
    </>
  )
}

export default App
