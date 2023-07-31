import React,{useState} from "react"

import './App.css';
import Box from "./components/Box"
function App() {
  const [box, setBox] = useState([]) 

const addBox = () => {
    setBox(box.concat(<Box />))
}
  return (
    <div className="App">
      <h1>Color Box Challenge</h1>
      <button onClick={addBox}>add a box</button>

      <Box />
      
    </div>
  );
}

export default App;
