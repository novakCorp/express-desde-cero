const express = require("express");
const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Middlewares



// Routes
app.use(indexRoutes);
app.use(userRoutes);
app.get("/admin", (req, res) => {
    res.send("Panel de administracion")
});

app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

