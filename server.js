
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");


const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/coffeehouse")
.then(() => {
    console.log("Connect to database");
})
.catch((error) => {
    console.log("Can't connect to database");
    console.log(error);
});



app.get("/", (req, res) => {
    res.render("home");
});




app.listen(8001, () => {
    console.log("Server run on port 8001");
});




