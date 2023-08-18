import React from 'react';

function Index({ vegetables }) {
  return (
    <div>
        {vegetables.map((vegetable, index) => {
            return (
                <li key = {index}>The <a href={`/vegetables/${index}`}>{vegetable.name}</a> is {vegetable.color}.<br/>
                  {
                    vegetable.readyToEat ? "it is ready to eat." : "It is not ready, yet."
                  }
                  <br/><br/>
                </li>
            )
        })}
        <br/><br/>
        <a href="/fruits">Go To The Fruits Page</a>
    </div>
  );
};

module.exports = Index;