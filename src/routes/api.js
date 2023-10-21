const routes = require("express").Router();

routes.use("/posts", require("./api/posts"));
routes.use("./autores", require("./api/autores"));

module.exports = routes;
