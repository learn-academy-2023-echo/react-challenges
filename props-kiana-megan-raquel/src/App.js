import React, {useState} from "react"
import Box from "./components/Box"
import "./App.css"

const App = () => {
  
    const roll = [1,2,3,4,5,6]
  
    const [currentRoll, setCurrentRoll] = useState(roll[0])
  
    const triggerRoll = () => {  //function that triggers next episode
        let nextRoll = roll.indexOf(currentRoll)
        setCurrentRoll(roll[nextRoll])
        console.log(nextRoll)
      }
    return (
    <>
      <h1>Dice Roll</h1>
      <Box title={currentRoll} triggerNextRoll={triggerNextRoll}/> 
      <div className="box">
        
      </div>
    </>
  )
}

export default App