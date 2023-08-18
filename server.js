const express = require("express");
const fruits = require("./models/fruits.js");


const app = express();
const port = 5005;

// SETTING UP VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// const fruits = ["apple", "banana", "pear"];
// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// LISTENER
app.listen(port, (req, res) => {
    console.log(`This Express Server is brought to you, today, by Port ${port}.`);
});

// ROUTES
app.get("/fruits", (req, res) => {
    // res.send(fruits);
    res.render("Index", {
        fruits: fruits
    });
});

app.get("/fruits/:index", (req, res) => {
    // console.log(req.params);
    // res.send(fruits[req.params.index]);
    res.render("Show", { // SECOND PARAM MUST BE AN OBJECT
    fruit: fruits[req.params.index]
});
});