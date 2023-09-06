import React from 'react';
import Default from "../layout/Default";


module.exports = function Index({ vegetables }) {

  return (
    <Default title={"Our Selection of Vegetables"}>
      <nav>
        <a href="/vegetables/new">Create New Vegetable</a>
      </nav>
      <ul>
        {vegetables.map((vegetable, index) => {
          return (
            <li key = {index}>The <a href={`/vegetables/${vegetable.id}`}>{vegetable.name}</a> is {vegetable.color}.<br/>
              {
                vegetable.readyToEat ? "it is ready to eat." : "It is not ready, yet."
              }
              <form  method ="POST" action={`/vegetables/${vegetable.id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/vegetables/${vegetable._id}/edit`}>Edit This Vegetable</a>
              <br/><br/>
            </li>
          )
        })}
      </ul>
      <br/><br/>
      <a href="/fruits">Go To The Fruits Page</a>
      <br/><br/>
      <a href="/">Back to Main Page</a>
    </Default>
  );
};
