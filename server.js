require("dotenv").config();
const mongoose = require('mongoose');
const methodOverride = require("method-override");

const express = require("express");
const Fruit = require("./models/fruit.js");
const Veggie = require("./models/vegetable.js");

const app = express();
const port = 5005;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true // *- DEPRICATED! -*
});

mongoose.connection.once("open", () => {
console.log("connected to mongoDB")
});

// SETTING UP VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log("I run for all routes!");
    next();
});
// THIS ALLOWS THE BODY OF A POST REQUEST
app.use(express.urlencoded({extended: false}));
// THIS LETS YOU USE HTTP VERBS (PUT, DELETE,...) IN PLACES WHERE CLIENT DOESN'T SUPPORT IT
app.use(methodOverride("_method"));

// LISTENER
app.listen(port, (req, res) => {
    console.log(`This Express Server is brought to you, today, by Port ${port}.`);
});

// MAIN INDEX PAGE ***(NEED TO CREATE A REACT-TYPE INDEX PAGE AND RENDER IT LIKE LEO!)***
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
app.get("/fruits", async function(req, res) {
    const foundFruits = await Fruit.find({})
    res.render("fruits/Index", {
        fruits: foundFruits
    });
});

// -FRUITS "NEW" ROUTE-
app.get("/fruits/new", (req, res) => {
    res.render("fruits/New");
});

// CREATE = POST (ROUTE FOR FRUITS SECTION)
app.post("/fruits", async (req,res) => {
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    console.log("FRUIT REQ.BODY AFTER CHANGE: ", req.body);
    const createdFruit = await Fruit.create(req.body);
    res.redirect("/fruits");
});

// FRUIT SHOW ROUTE
app.get("/fruits/:id", async (req, res) => {
    const oneFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Show", {
        fruit: oneFruit
    });
});

// FRUITS' EDIT METHOD
app.get("/fruits/:id/edit", async (req, res) => {
    const changingFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Edit", {
        fruit: changingFruit
    });
});

// FRUITS' UPDATE METHOD
app.put("/fruits/:id", async (req, res) => {
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/fruits/${req.params.id}`);
});

// FRUITS' DELETE METHOD
app.delete("/fruits/:id", async (req, res) => {
    // res.send("deleting...");
    await Fruit.findByIdAndRemove(req.params.id);
    res.redirect("/fruits");
});


// VEGETABLE ROUTES
app.get("/vegetables", async function(req, res) {
    const foundVeggies = await Veggie.find({});
    res.render("veggies/Index", {
        vegetables: foundVeggies
    });
});

// -VEGGIES "NEW" ROUTE-
app.get("/vegetables/new", (req, res) => {
    res.render("veggies/New");
});

// CREATE = POST (ROUTE FOR VEGETABLE SECTION)
app.post("/vegetables", async (req,res) => {
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    console.log("VEGETABLES REQ.BODY AFTER CHANGE: ", req.body);
    const createdVegetable = await Veggie.create(req.body);
    res.redirect("/vegetables");
});

// VEGETABLE SHOW ROUTE
app.get("/vegetables/:id", async (req, res) => {
    const oneVeggie = await Veggie.findById(req.params.id);
    res.render("veggies/Show", {
        vegetable: oneVeggie
    });
});