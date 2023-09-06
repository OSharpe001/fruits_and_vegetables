import React from 'react';
import Default from "./layout/Default";


module.exports = function Home() {

    const myStyle = {
        textAlign: "center",
    };

  return (
    <Default bodyStyle={myStyle} title={`Here at the Fruits And Veggies Page, we have a wide assortment of healthy items!`}>
        <br/><br/>
        <h2>What will you check first?</h2>
        <br/><br/>
        <a href="/fruits">Our Fruits Selection</a>
        <br/><br/>
        <a href="/vegetables">Our Veggie Selection</a>
    </Default>
  );
};