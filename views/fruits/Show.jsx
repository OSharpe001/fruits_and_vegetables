import React from 'react'

function Show({ fruit }) {
  // console.log("My fruit object: ", fruit);
  return (
    <div>
      <h1>The {fruit.name} is {fruit.color}</h1>
      {
        fruit.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
      <br/>
      <br/>
      <a href="/fruits">Go Back to Fruits Main Page</a>
    </div>
  );
};

module.exports = Show;