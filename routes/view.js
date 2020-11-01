// requires
const routes = require("express").Router();
const path = require("path");

// routes
routes.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

routes.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//export
module.exports = routes;