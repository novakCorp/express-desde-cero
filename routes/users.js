const express = require("express");
// Instance from Router()
const router = express.Router();

router.route("/users")
.get((req, res) => {
    res.send("Accediendo a users, get")
})
.post((req, res) => {
    res.send("Accediendo a users, post")
})
.put((req, res) => {
    res.send("Accediendo a users, put")
})
.delete((req, res) => {
    res.send("Accediendo a users, delete")
});

module.exports = router;