const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars')
const app = express();

// settings
app.set("port", 3000);
app.set("title", "The app");

// settings for the templates
app.engine('handlebars', engine({extname: ".handlebars"}, {defaultLayout:'main'}))
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

const users = [
    {name: "user 1", age: 25},
    {name: "user 2", age: 28},
    {name: "user 3", age: 30},
];

const title = "Aplication with express";

app.get("/", (req, res) => {
    res.render("index", {users:users, title:title});
});

app.get("/admin", (req, res) => {
    res.render("admin");
});



app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log(`${app.get("title")} is running on port: ${app.get("port")}`);
});