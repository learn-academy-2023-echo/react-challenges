import React, { useState } from "react"
import "./App.css"
import Menu from "./components/Menu"

const App = () => {
  const [menuItems, setMenuItems] = useState ([
   {item: "Burger $8.00", ordered: false},
   {item: "Burrito $8.50", ordered: false},
   {item: "Pizza $11.00", ordered: false}
  ])


const orderedItem = (selectedItems) => {
console.log("item data:", menuItems[selectedItems])
menuItems[selectedItems].ordered = true
setMenuItems([...menuItems])

// const [logPrice, setLogPrice] = useState()
//Attempted storage of order history/prices



}
return (
  <>
  <body>
   <h1>Burgittopizz</h1>
   <div className="cards">
    {menuItems.map((value, index) => {
      return <Menu object={value} orderedItem={orderedItem} index={index} />
    })} 

   </div>
  
  
   </body>
  </>
)
}





export default App