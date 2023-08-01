import React, { useState } from "react"


const Square = () => {

//     const [setColor] = useState('white')
//     const crayolaColors = [red, orange, yellow, green, blue, purple, pink]
//    const setColor = changeColor(crayolaColors['index'])

//     const changeColor = (array) => {
//         (numClick % 6 = index)
//     }

//         return (
//     <>
//       <h1>Color Box</h1>
//       <button class = "Square" style={{backgroundColor:"white", borderColor: "black", height: "200px", width: "200px"}} onClick={changeColor}>"white"</button>
//      </>
//     )
//         }

const [color, setColor] = useState('white')
const [words, setWords] = useState('white')

const crayolaColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
const colorsArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

const changClick = () => {
    const randomIndex = Math.floor(Math.random() * crayolaColors.length)
  setColor(crayolaColors[randomIndex])
  setWords(colorsArray[randomIndex])
}

return (
  <button 
  style={{backgroundColor: color, borderColor: "black", height: "200px", width: "200px"}}
  onClick={changClick}
  >
    {words}
  </button>
)

}
export default Square