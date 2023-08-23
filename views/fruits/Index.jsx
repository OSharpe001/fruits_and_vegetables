import React from 'react';


module.exports = function Index({ fruits }) {

  return (
    <div>
      <nav>
        <a href="/fruits/new">Create New Fruit</a>
      </nav>
      <h1>Our Selection of Fruits</h1>
        {fruits.map((fruit, index) => {
            return (
                <li key = {index}>The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color}.<br/>
                  {
                    fruit.readyToEat ? "it is ready to eat." : "It is not ready, yet."
                  }
                  <br/><br/>
                </li>
            )
        })}
        <br/><br/>
        <a href="/vegetables">Go To The Vegetables Page</a>
        <br/><br/>
        <a href="/">Back to Main Page</a>
    </div>
  );
};
