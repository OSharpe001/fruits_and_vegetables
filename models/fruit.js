// WITH OUR DATABASE IMPORTED, LET'S CREATE A SCHEMA INSTEAD OF SETTING A LIST

const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: Boolean
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;