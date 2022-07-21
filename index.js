const express = require("express");
const path = require("path");
const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
const morgan = require("morgan");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
// parse encoded body data
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));


// Routes
app.use(indexRoutes);
app.use(userRoutes);
app.get("/admin", (req, res) => {
    const name = req.params.name;
    res.send("Panel de administracion")
});

app.post("/admin", (req, res) => {
    let name = req.body.name;
    console.log(name);
    res.send("Usuario registrado");
})

app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

