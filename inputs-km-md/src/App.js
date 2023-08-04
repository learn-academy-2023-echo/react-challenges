import React, { useState } from 'react';
import GoodRobot from './Components/GoodRobot'
import BadRobot from './Components/BadRobot'
import KanyeBot from './Components/KanyeBot'

import './App.css';


const App = () => {

  const [userInput, setUserInput] = useState ("")
  const handleChange = (e) => {
    setUserInput(e.target.value) 
  }

  return (
    <>
    <h1> Robot Active Listening</h1>
    <label>Say Something!</label>
    <input type="text" onChange={handleChange} value={userInput}/>
    <GoodRobot />
   
    <BadRobot />
    
    <KanyeBot />
    
    

    
    </>
  )
}


export default App;
