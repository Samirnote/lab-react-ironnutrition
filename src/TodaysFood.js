import React from 'react';

const TodayFood = ({ data }) => {
  const total = data.reduce((a, o) => o.calories + a, 0);

  console.log(total);

  return (
    <>
      <h1>Today's foods</h1>
      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {el.quantity} - {el.name} - {el.calories}
          </li>
        ))}
      </ul>
      <h2>Total : {total} cal</h2>
    </>
  );
};

export default TodayFood;
