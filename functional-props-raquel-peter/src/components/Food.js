import React from "react"

const Food = (props) => {
return(
    <div className="food-menu"> 
        <div>

<h2>Food</h2>    

        <h3>{props.foodItem.name}</h3>
        <button onClick={()=> {
            props.orderFoodItem(props.index)
        }}>Order</button> 
    </div>
    <div>
        <h2>Price</h2>
        <h3>{props.foodItem.price}</h3>
    </div>
     </div>
)
}
export default Food