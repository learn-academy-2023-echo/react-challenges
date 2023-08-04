import React,{useState} from "react"

import './App.css';
import Box from "./components/Box"

function App() {
  const [box, setBox] = useState([]) 

const addBox = () => {
    setBox(box.concat(<Box />))
}

const removeBox = () => {
    const newBox = box.slice(0, box.length - 1)
    setBox(newBox)
}

  return (
    <div className="App">
      <h1>Color Box Challenge</h1>
      <button onClick={addBox}>add a box</button>
      <button onClick={removeBox}>remove a box</button>
      <div className="boxes">
      {box.map(val => <Box />)}
      </div>
      
      
    </div>
  );
}

export default App;
