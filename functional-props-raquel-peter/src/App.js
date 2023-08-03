import React, { useState } from 'react';
import './App.css';
import Food from './components/Food';
import Selected from './components/Selected';

function App() {
  const [foods, setFoods] = useState([
    {name:"tacos", price: 7.50, ordered: false},
    {name:"burger", price: 8.00, ordered: false},
    {name:"wings", price: 12.00, ordered: false},
    {name:"pizza", price: 4.50, ordered: false},
    {name:"bagel", price: 3.00, ordered: false}
  ])

  const orderFoodItem = (selectedItem) => {
    foods[selectedItem].ordered = true
    setFoods([...foods])
  }
  return (
    <div className="App">
      <div className='FoodList'>
<h1>Food Menu</h1>
{foods.map((foodItem, index) => {
  return (
    <Food
    foodItem={foodItem}
    index={index}
    orderFoodItem={orderFoodItem}
    />
  )
})}
      </div>
      <div className="SelectedItem">
        <h1>Selected Food</h1>
        {foods.filter((food)=>food.ordered===true)
        .map((item)=>{
          return <h3>{item.name}</h3>
        })}
      </div>
    </div>
  );
}

export default App;
