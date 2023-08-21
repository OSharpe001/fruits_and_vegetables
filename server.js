const express = require("express");
const fruits = require("./models/fruits.js");
const vegetables = require("./models/vegetables.js");


const app = express();
const port = 5005;

// SETTING UP VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log("I run for all routes!")
    next();
});
// THIS ALLOWS THE BODY OF A POST REQUEST
app.use(express.urlencoded({extended: false}))

// LISTENER
app.listen(port, (req, res) => {
    console.log(`This Express Server is brought to you, today, by Port ${port}.`);
});

// MAIN INDEX PAGE
app.get("/", (req, res) => {
    res.send(`
        <h1>Here at the Fruits And Veggies Page, we have a wide assortment of healthy items.</h1>
        <br/><br/>
        <h2>What will you check first?</h2>
        <br/><br/>
        <a href="/fruits">Our Fruits Selection<a/>
        <br/><br/>
        <a href="/vegetables">Our Veggie Selection<a/>
        `);
});

// FRUIT ROUTES
app.get("/fruits", (req, res) => {
    res.render("fruits/Index", {
        fruits: fruits
    });
});

// -"NEW" FRUITS ROUTE-
app.get("/fruits/new", (req, res) => {
    res.render("fruits/New")
});
// -  -
// CREATE = POST ROUTE FOR FRUITS SECTION
app.post("/fruits", (req,res) => {
    // console.log("REQ.BODY: ", req.body);
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    fruits.push(req.body);
    // console.log(`The fruits array is now ${fruits}.`);
    console.log("REQ.BODY After Change: ", req.body);
    // res.send("data recieved");
    res.redirect("/fruits");
});

app.get("/fruits/:index", (req, res) => {
    res.render("fruits/Show", { // SECOND PARAM MUST BE AN OBJECT
        fruit: fruits[req.params.index]
    });
});

// VEGETABLE ROUTES
app.get("/vegetables", (req, res) => {
    res.render("veggies/Index", { // THIS REGARDS YOUR COMPONENTS FOLDER AND FILE.
        vegetables: vegetables
    });
});

// -"NEW" VEGETABLE ROUTE-
app.get("/vegetables/new", (req, res) => {
    res.render("veggies/New")
});
// -  -
// CREATE = POST ROUTE FOR VEGETABLE SECTION
app.post("/vegetables", (req,res) => {
    // console.log("REQ.BODY: ", req.body);
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    vegetables.push(req.body);
    // console.log(`The vegetables array is now ${vegetables}.`);
    console.log("REQ.BODY After Change: ", req.body);
    // res.send("data recieved");
    res.redirect("/vegetables");
});

app.get("/vegetables/:index", (req, res) => {
    res.render("veggies/Show", {
        vegetable: vegetables[req.params.index]
    });
});