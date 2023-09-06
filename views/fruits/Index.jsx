import React from 'react';
const Default = require("../layout/Default");


module.exports = function Index({ fruits }) {

  return (
    <Default title={"Our Selection of Fruits"}>
      <nav>
        <a href="/fruits/new">Create New Fruit</a>
      </nav>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key = {index}>The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color}.<br/>
              {
                fruit.readyToEat ? "it is ready to eat." : "It is not ready, yet."
              }
              <form  method ="POST" action={`/fruits/${fruit.id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
              <br/><br/>
            </li>
          )
        })}
      </ul>
      <br/><br/>
      <a href="/vegetables">Go To The Vegetables Page</a>
      <br/><br/>
      <a href="/">Back to Main Page</a>
    </Default>
  );
};
