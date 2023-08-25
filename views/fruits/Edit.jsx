import React from 'react';
const Default = require("../layout/Default");


module.exports = function Edit({ fruit }) {

  return (
    <Default title={`Edit ${fruit.name}`}>
    <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
            <label htmlFor="name"> Name: </label>
            <input name="name" type="text" defaultValue={fruit.name} />
            <br/>
            <label htmlFor="color">Color: </label>
            <input name="color" type="text" defaultValue={fruit.color}/>
            <br/>
            <label htmlFor="readyToEat">Ready to Eat?</label>
            {
                fruit.readyToEat ?
                <input name="readyToEat" type="checkbox" defaultChecked/>
                :
                <input name="readyToEat" type="checkbox"/>
            }
            <br/>
            <input type="submit" value="Update Fruit"/>
            <br/>
        </form>
  </Default>
  );
};
