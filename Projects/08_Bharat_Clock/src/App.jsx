import React from 'react'
import Title from './components/Title'
import Discription from './components/Discription'
import './App.css';
import Datet from './components/Date'
function App() {
  return (
    <center>
      <Title></Title>
      <hr />
      <Discription></Discription>
      <br />
      <Datet/>
    </center>
  )
}

export default App;