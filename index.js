const express = require("express");
const userRoutes = require("./routes/users");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Middlewares
const logger = (req, res, next) => {
    const userLogged = false;
    if (userLogged) {
        console.log("dentro del middleware");
        next();    
    }
    else {
        res.send("No puede acceder")
    }  
};

// Routes
app.use(userRoutes);

// Applying the middleware
app.get("/admin", logger, (req, res) => {
    res.send("Panel de administracion")
});

app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

