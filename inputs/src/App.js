import React, { useState } from "react" 
import Badbot from "./components/Badbot"
import "./App.css"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <>
    <body>
      <h1>Active Listen Bot <img className="bot1" src="https://i1.theportalwiki.net/img/thumb/0/04/Atlas.png/300px-Atlas.png"></img></h1>
      <label>Say something:&nbsp;&nbsp;</label>
      <input type="text" value={userInput} onChange={handleChange} placeholder="&nbsp;&nbsp;Type here..."/>
      <h2>Good Robot</h2>
      <p>I hear you saying {userInput}. Is that correct? </p>
      <Badbot name={userInput} />
      
      <h2>Kanye Bot</h2>
      <p>I'm gon' let you finish, but Beyonce is {userInput}</p>
    <img className="bot2" src="https://www.pngmart.com/files/22/Portal-2-Download-PNG-Image.png"></img>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&family=Rubik+Microbe&display=swap');
</style>
    </body>
    </>
  )
}

export default App