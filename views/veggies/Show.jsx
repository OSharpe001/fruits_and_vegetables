import React from 'react';
import Default from "../layout/Default";


module.exports = function Show({ vegetable }) {

  const myStyle = {
    textAlign: "center",
  };

  return (
    <Default bodyStyle={myStyle} title={`The ${vegetable.name} is ${vegetable.color}`}>
      {
        vegetable.readyToEat ? "It's ready to eat!" : "Eww, yuck!"
      }
      <br/><br/>
      <a href="/vegetables">Go Back to Vegetables Selection</a>
    </Default>
  );
};
