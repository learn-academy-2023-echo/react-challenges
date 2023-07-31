import React, {useState} from "react"


function App() {
  const [color, setColor] = useState("white")
  const colorChange = () => {
      setColor("red")

}

  return (
   <div style={{background: "white",
    height: "150px", width: "150px",
    border: "3px solid black",
    margin: "45%" }} 
    onClick={colorChange}>
    <button onClick={colorChange} 
      style={{margin: "35%", padding: "5px",
      display: "inlineBlock",
      backgroundColor: "#242562",
      color: "7f7f7f",
    }}>{color}</button>
   </div>
  );
}




export default App;
