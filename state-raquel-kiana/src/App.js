import React from "react"
import SquareBox from "./components/SquareBox"
import "./App.css" 
import {useState} from "react"
// As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

// 📚 User Stories
// As a user, I can see a square box on the screen with a black border and a white background

const App = () => {
  const [colorIndex, setColorIndex] = useState(0)
//Pseduo Code: Create a function that takes in an array of colors. Get index from array. .map method to iterate through array.
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

const change = colors.map((value) => {
  return value
})
  
return (
    <>
     <div className="title" ><h1>Color Box</h1> </div>
      <SquareBox />
      
    <button onClick={colors}>changeColors</button>
    
    </>
  )
}

// As a user, I can see the default color name "white" inside the box
// As a user, every time I click on the box the name of a different color appears
// Possible color names: red, orange, yellow, green, blue, purple, pink
// As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
// As a user, I can see many boxes on the page all acting independently of one another.
// 🏔 Stretch Goals
// As a user, I can start with no boxes on the screen
// As a user, I can see a button to add a box
// As a user, I can see a button to remove a box
// As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes
// As a user, every time I click the remove button, I can remove the last box in the series








export default App;
