import React from 'react';

function Show({ vegetable }) {
  return (
    <div>
      <h1>The {vegetable.name} is {vegetable.color}</h1>
      {
        vegetable.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
      <br/>
      <br/>
      <a href="/vegetables">Go Back to Vegetables Selection</a>
    </div>
  );
};

module.exports = Show;