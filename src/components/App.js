
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [displayFruits, setDisplayFruits] = useState(fruits);

  const handleChange=(e)=>{
      const searchFruits=fruits.filter((item)=>item.includes(e.target.value));
      setDisplayFruits(searchFruits);
  }
  return (
    <div>
      <h1>Search item</h1>
      <input onChange={handleChange} ></input>
      <ul>
        {displayFruits.map((item,index) => {
            return <li key={index}>{item}</li>
        })}
      </ul>

    </div>
  )
}

export default App
