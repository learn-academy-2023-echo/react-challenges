import React from "react"
import { useState } from "react"
import Taco from "./components/Taco"
import "./App.css"
import Total from "./components/Total"


const App =() => {
  const [foodItem, setFoodItem] = useState([
    { name: "Barbacoa Tacos", price: 5, toCart: false},
    { name: "Birria Tacos", price: 5, toCart: false},
    { name: "Carne Asada Tacos", price: 5, toCart: false},
    { name: "Tacos Al Pastor", price: 5, toCart: false},
    { name: "Tacos Campechanos", price: 5, toCart: false},
  ])

  const addTaco = (indexOfSelectedTaco) => {
    foodItem[indexOfSelectedTaco].toCart = true
    setFoodItem([...foodItem])
    //console.log(foodItem[indexOfSelectedTaco])
  }
  // const [totalCost, setTotalCost] = useState(0)
  // const calTotal = (indexOfSelectedTaco) => {
    // return 
  // }

  return (
    <>
    <h1>Taco Slayers</h1>

     <div className="tacoMenu">
      {foodItem.map((foodObj, index) => {
        return <Taco foodObj={foodObj} index={index} addTaco={addTaco}/>
      })}
     </div>

     <div className="order">
      <h2>Order</h2>
      {foodItem.filter((foodObj)=> foodObj.toCart === true).map((item)=> {
        return <h2>{item.name} Price ${item.price}</h2>
      })}
     </div>

     {/* <div className="totalPrice">
      <h2>Total Price</h2>
      {foodItem.filter((foodObj)=> foodObj.toCart === true).map((item, index)=> {
        return <Total indexP={index} total={calTotal}/>
      })}
     </div> */}
    </>
  )
}
export default App;
