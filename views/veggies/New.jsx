import React from 'react';
import Default from "../layout/Default";


module.exports = function New() {

  const myStyle = {
    textAlign: "center",
  };

  return (
    <Default bodyStyle={myStyle} title={`New Vegetable Page`}>
        <form action="/vegetables" method="POST">
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" />
            <br/>
            <label htmlFor="color">Color: </label>
            <input name="color" type="text" />
            <br/>
            <label htmlFor="readyToEat">Ready to Eat?</label>
            <input name="readyToEat" type="checkbox" />
            <br/>
            <input type="submit" value="create vegetable"/>
            <br/>
        </form>
    </Default>
  );
};