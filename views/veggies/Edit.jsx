import React from 'react';
const Default = require("../layout/Default");


module.exports = function Edit({ vegetable }) {

  const myStyle = {
    textAlign: "center",
  };

  return (
    <Default bodyStyle={myStyle} title={`Edit ${vegetable.name}`}>
      <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">
        <label htmlFor="name"> Name: </label>
        <input name="name" type="text" defaultValue={vegetable.name} />
        <br/>
        <label htmlFor="color">Color: </label>
        <input name="color" type="text" defaultValue={vegetable.color}/>
        <br/>
        <label htmlFor="readyToEat">Ready to Eat?</label>
        {
            vegetable.readyToEat ?
            <input name="readyToEat" type="checkbox" defaultChecked/>
            :
            <input name="readyToEat" type="checkbox"/>
        }
        <br/>
        <input type="submit" value="Update Vegetable"/>
        <br/>
      </form>
  </Default>
  );
};