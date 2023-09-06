import React from 'react';
import Default from "../layout/Default";


module.exports = function Show({ fruit }) {

  const myStyle = {
    textAlign: "center",
  };

  return (
    <Default bodyStyle={myStyle} title={`The ${fruit.name} is ${fruit.color}`}>
      {
        fruit.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
      <br/><br/>
      <a href="/fruits">Go Back to Fruits Selection</a>
    </Default>
  );
};
