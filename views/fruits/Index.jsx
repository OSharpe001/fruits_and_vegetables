import React from 'react';

function Index({ fruits }) {
  return (
    <div>
        {fruits.map((fruit, index) => {
            return (
                <li key = {index}>The <a href={`/fruits/${index}`}>{fruit.name}</a> is {fruit.color}.<br/>
                  {
                    fruit.readyToEat ? "it is ready to eat." : "It is not ready, yet."
                  }
                  <br/><br/>
                </li>
            )
        })}
        <br/><br/>
        <a href="/vegetables">Go To The Vegetables Page</a>
    </div>
  );
};

module.exports = Index;