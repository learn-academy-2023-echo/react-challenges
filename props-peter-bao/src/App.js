import React, {useState} from "react"
import './App.css';
import dice1 from "./assets/1-dice.png"
import dice2 from "./assets/2-dice.png"
import dice3 from "./assets/3-dice.png"
import dice4 from "./assets/4-dice.png"
import dice5 from "./assets/5-dice.png"
import dice6 from "./assets/6-dice.png"
import Logger from "./components/Logger"

const App = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

  const [currentImg, setCurrentImg] = useState(diceImages[0])
  const [currentNum, setCurrentNum] = useState([])

  const rollDice = () => {
    let randomIndex = Math.floor(Math.random() * diceImages.length)
    let rolledNum = diceImages[randomIndex]
    setCurrentImg(rolledNum)
    setCurrentNum(currentNum.concat(diceImages.indexOf(rolledNum) + 1))
    console.log((currentNum.concat(diceImages.indexOf(rolledNum) + 1)).join(" "))
  }
  
  const restartRoll = () => {
    setCurrentNum([])
  }

  return (
    <>
    <div className="containers">
      <div className="diceRoll">
        <h1>Dice</h1>
        <img src={currentImg} alt="diceImg" onClick={rollDice} className="dice-image"/>
        <h2>Click Box to Roll</h2>
      </div>
      <div className="logRoll">
        <h1>Rolls</h1>
        <button onClick={restartRoll}>Reset</button>
        <Logger num={currentNum} />
      </div>
    </div>
    </>
  );
}

export default App;
