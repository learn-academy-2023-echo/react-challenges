import React,{useState} from "react"

import './App.css';
import Box from "./components/Box"

function App() {
  const [box, setBox] = useState([]) 

const addBox = () => {
    
    setBox(box.concat(<Box />))
}

const removeBox = () => {
    setBox()
}

  return (
    <div className="App">
      <h1>Color Box Challenge</h1>
      <button onClick={addBox}>add a box</button>
      <button onClick={removeBox}>remove a box</button>
      
      
    </div>
  );
}

export default App;
