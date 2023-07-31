import React, {useState} from "react"


const ColorChange = () => {
    const [color, setColor] = useState("white")

    let colors = ["red", "green", "blue", "yellow"]

    let randomColor = colors[Math.floor(Math.random()*colors.length)]

    const colorChange = () => {
        setColor(randomColor)
    }  
    return(
        <div style={{background: randomColor,
        height: "150px", width: "150px",
        border: "3px solid black",}}>
        <button onClick={colorChange} 
          style={{margin: "35%", padding: "5px",
          display: "inlineBlock",
          backgroundColor: "#363636",
          color: "white",
          borderRadius: "30%",
    
        }}>{randomColor}</button>
       </div> 
    )
}
export default ColorChange