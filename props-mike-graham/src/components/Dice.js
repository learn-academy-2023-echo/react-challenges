import React from "react"

const Dice = (props) => {
return (    
    <div className="diceSquare" onClick={props.diceClick}>
      {props.setNumber}
    </div>
    )
}
export default Dice