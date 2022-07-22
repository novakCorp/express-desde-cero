const express = require("express");
require('dotenv').config();
const app = express();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log("The app is running on port " + app.get("port"));
});