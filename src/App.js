import React from 'react';
import BoxFood from './boxfood';
import './App.css';
import 'bulma/css/bulma.css';
import allFoods from './foods.json';
import { useState } from 'react';
import Form from './form';
import Search from './Search';
import TodaysFood from './TodaysFood';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [todaysFood, setTodaysFood] = useState([]);
  const [searchedFood, setSearchedFood] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  let searchedFoods = null;
  if (searchedFood !== '') {
    searchedFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase());
    });
  } else {
    searchedFoods = foods;
  }

  const selectFood = (name, quantity) => {
    const found = allFoods.find((f) => f.name === name);
    console.log(found)
    const calories = found.calories * quantity;
    setTodaysFood([...todaysFood, { name: found.name, calories, quantity }]);
  };

console.log("toddays food >", todaysFood, ":)")

  return (
    <div className="App">
      <h1>
        Add a food{' '}
        <button onClick={() => setIsAdd(!isAdd)}>{isAdd ? '-' : '+'}</button>{' '}
      </h1>

      {isAdd && <Form addFood={addFood} />}

      <hr />
      <h2>Search your food</h2>

      <Search searchedFood={searchedFood} callbackSearch={setSearchedFood} />

      <aside>
        <TodaysFood data={todaysFood} />
      </aside>

      <h2>List of foods</h2>
      {searchedFoods.map((food, i) => {
        //console.log(food);
        return (
          <BoxFood
            key={i}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
            selectFood={selectFood}
          />
        );
      })}
    </div>
  );
}

export default App;
