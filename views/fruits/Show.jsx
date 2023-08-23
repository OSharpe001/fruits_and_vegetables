import React from 'react';

function Show({ fruit }) {
  return (
    <div>
      <h1>The {fruit.name} is {fruit.color}</h1>
      {
        fruit.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
      <br/>
      <br/>
      <a href="/fruits">Go Back to Fruits Selection</a>
    </div>
  );
};

module.exports = Show;