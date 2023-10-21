const routes = require("express").Router();

const {
  getAutores,
  getAutorById,
  createAutor,
} = require("../../controller/autores");

routes.use("/posts", require("./posts/post_autor"));

routes.get("/", getAutores);

routes.get("/:idAutor", getAutorById);

routes.post("/", createAutor);

module.exports = routes;
