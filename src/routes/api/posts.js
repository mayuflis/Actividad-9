const routes = require("express").Router();

routes.get("/");
routes.get("/:idpost");
routes.post("/");

module.exports = routes;
