// import React from 'react';

function Show({ vegetables }) {
  // console.log("My fruit object: ", fruit);
  return (
    <div>
      <h1>The {vegetables.name} is {vegetables.color}</h1>
      {
        vegetables.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
    </div>
  );
};

module.exports = Show;