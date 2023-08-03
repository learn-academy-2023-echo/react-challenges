import React, {useState} from "react"
import Box from "./components/Box"
import "./App.css"

const App = () => {
  
    const rolls = [1,2,3,4,5,6]
  
    const [currentRoll, setCurrentRoll] = useState()
    const [logCount, setLogCount] = useState([])
    // state , method.                       empty array
    const triggerRoll = () => {  //function that triggers next episode
      //creating random index
       let rollIndex = Math.floor(Math.random() * rolls.length)
       //getting value at index  .length got us the entire length of array
        setCurrentRoll(rolls[rollIndex])
     const rollLog = logCount.concat(currentRoll)
     setLogCount(rollLog)
      }
    return (
    <>
      <h1>Dice Roll</h1>
      <Box title={currentRoll} triggerNextRoll={triggerRoll}/> 
      <div className="box">
        {roll.map((roll, index)=> {
          return < roll title = {roll} key = {index}/>
        })}
      </div>
    </>
  )
}

export default App

//Storing values in array ; put in state