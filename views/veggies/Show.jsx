import React from 'react';

function Show({ vegetable }) {
  // console.log("My fruit object: ", fruit);
  return (
    <div>
      <h1>The {vegetable.name} is {vegetable.color}</h1>
      {
        vegetable.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
    </div>
  );
};

module.exports = Show;