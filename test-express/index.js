const express = require("express");
const userRouter = require("./routes/users");
const app = express();

// settings
app.set("port", 3000);
app.set("title", "The app");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(userRouter);

app.listen(app.get("port"), () => {
    console.log(`${app.get("title")} is running on port: ${app.get("port")}`);
});

module.exports = app;
