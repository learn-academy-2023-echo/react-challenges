import "./Box.css"
import { useState } from "react";
const colors = ["red", "blue", "purple", "pink", "green", "orange", "magenta"]
const Box = () => {

const [color, setColor] = useState("white")
const changeColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    const randomColor = colors[index]
    setColor(randomColor)
}


    return ( 
        <>
        
        
        <div className="squareBox"
         onClick={changeColor}
         style={{backgroundColor: color}}>
        <h3>{color}</h3>
        
        
        </div>
        </>
    )
}

export default Box;