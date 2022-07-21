const express = require("express");
const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Middlewares
const errorHandling = (err, req, res, next) => {
    res.status(500).send("Ha ocurrido un error, maminga");
};


// Routes
app.use(indexRoutes);
app.use(userRoutes);
app.get("/admin", (req, res) => {
    const name = req.params.name
    res.send("Panel de administracion")
});

// Middlewares that handle errores must be placed after all the routes, at the end.
app.use(errorHandling);

app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

