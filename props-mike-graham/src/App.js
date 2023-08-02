import React, {useState} from "react";
import './App.css';
import Dice from "./components/Dice"

const App = () => {
  const [diceNumber, setDiceNumber] = useState("Click here to roll")

  const [numberLog, setNumberLog] = useState([])

  const diceClick = () => {
    let diceRoll = Math.floor(Math.random() * 6) + 1
      setDiceNumber(diceRoll)
      console.log(numberLog.concat(diceRoll))
      setNumberLog(numberLog.concat(diceRoll))
  }
    return(
  <>
    <body>
      <style>@import url('https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap');
      </style>
      <h1>Virtual Dice</h1>
      <br></br>
      <Dice diceClick={diceClick} setNumber={diceNumber}/>
      <br></br>
      <br></br>
      <div className="rollLog">
      {numberLog.map((number, index) => {
        return <p key={index}>{number}</p>
      })
      } 
      </div>
    </body>
  </>
)
//on click, when function produces a number, add current produced number and store it.





}

export default App;

