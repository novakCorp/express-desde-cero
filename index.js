const express = require("express");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Routes

app.all("/users", (req, res, next) => {
    console.log("Primer URL");
    next();
});


// get
app.get("/users", (req, res) => {
    res.send("Accesing to the first route, get.")
});

// post
app.post("/users", (req, res)=> {
    res.send("Accesing to the first route, post, post.")
});

// put
app.put("/users", (req, res)=> {
    res.send("Accesing to the first route, put.")
});

// patch
app.patch("/users", (req, res)=> {
    res.send("Accesing to the first route, patch.")
});

// delete
app.delete("/users", (req, res)=> {
    res.send("Accesing to the first route, delete.")
});


app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

