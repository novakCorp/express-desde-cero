const express = require("express");
const userRoutes = require("./routes/users");
const app = express();

// Settings
app.set("port", 3000);
app.set("title", "Aplicacion con express");

// Routes
// routes from an external file
app.use("/admin", userRoutes);



app.listen(app.get("port"), ()=> {
    console.log(`${app.get("title")}, aplicacion corriendo en el puerto: ${app.get("port")}`);
});

