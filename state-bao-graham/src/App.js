import React, {useState} from "react"


function App() {
  const [color, setColor] = useState("white")
  const colorChange = () => {
      setColor("red")

}


  return (
   <div style={{background: "white", height: "150px", width: "150px", border: "3px solid black", margin: "50%" }} onClick={colorChange}>
    <button onClick={colorChange} style={{margin: "37%"}}>{color}</button>
   </div>
  );
}




export default App;
