import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './UserEffect'
import Friends from './Friends'

function handleClick(){
  alert('button click')
}

const handleClick2 = () =>{
  alert('button 2 clicked')
}

const handleClick3 = (num) =>{
  alert(num + 4)
}
function App() {
  return (
    <>
      <h2>React Core Concepts 2</h2>
      <button onClick={handleClick}>click Me</button>
      <button onClick={handleClick2}>click Me 2</button>
      {/* vejal function */}
      <button onClick={() => handleClick3(4)}>click Me 3</button>



    {/* use state */}
    <Counter></Counter>
    <Player></Player>
    {/* useEffect */}
    <Users></Users>
    <Friends></Friends>
    </>
  )
}

export default App
