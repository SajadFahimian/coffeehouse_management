
const express = require("express");
const mongoose = require("mongoose");

const app = express()

mongoose.connect("mongodb://localhost:27017/coffeehouse")
.then(() => {
    console.log("Connect to database");
})
.catch((error) => {
    console.log("Can't connect to database");
    console.log(error);
});





app.listen(8001, () => {
    console.log("Server run on port 8001");
});




