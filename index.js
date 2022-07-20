const express = require("express");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Routes
app.get("/", (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.send("Accesing to the first route.")
})

app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

