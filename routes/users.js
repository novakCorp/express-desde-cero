const express = require("express");
// Instance from Router()
const router = express.Router();

const logger = (req, res, next) => {
    const userLogged = true;
    if (userLogged) {
        console.log("dentro del middleware");
        next();    
    }
    else {
        res.send("No puede acceder");
    }  
};

// Middleware for each route
router.use(logger);

router.get("/users", (req, res) => {
    res.send("Accediendo a usuarios");
});

router.get("/create-users", (req, res) => {
    res.send("Accediendo a usuarios create users")
});

module.exports = router;