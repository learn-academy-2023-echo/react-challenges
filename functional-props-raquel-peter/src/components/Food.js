import React from "react"

const Food = (props) => {
return(
    <div className="food-menu">
     <div className="food-props">
         <h3>{props.foodItem.name}</h3>
         <h3>price: ${props.foodItem.price}</h3>
      </div> 
        <button onClick={()=> {
            props.orderFoodItem(props.index)
        }}>Order</button> 
   
     </div>
)
}
export default Food