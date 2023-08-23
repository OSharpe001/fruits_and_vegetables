import React from 'react';

module.exports = function New() {
  return (
    <div>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method="POST">
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" />
            <br/>
            <label htmlFor="color">Color: </label>
            <input name="color" type="text" />
            <br/>
            <label htmlFor="readyToEat">Ready to Eat?</label>
            <input name="readyToEat" type="checkbox" />
            <br/>
            <input type="submit" value="create fruit"/>
            <br/>
        </form>
    </div>
  );
};