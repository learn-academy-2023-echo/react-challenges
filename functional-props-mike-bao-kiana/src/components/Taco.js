import React from "react"

const Taco = (props) => {
  // console.log("prop:", props.foodObj.name)
  return (
    <>
      <div className="taco">
        <h4>{props.foodObj.name} price: {props.foodObj.price}</h4>
        <button onClick={()=>{props.addTaco(props.index)}}>Add To Cart</button>
      </div>
    </>
)
}

export default Taco