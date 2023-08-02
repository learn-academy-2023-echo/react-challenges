import React from "react"

const Box = (props) => {
        
    return (
      <>
        <div className="box"></div>
        <button onClick={props.triggerNextRoll}>Roll The Dice</button>
      </>
    )
  }
export default Box