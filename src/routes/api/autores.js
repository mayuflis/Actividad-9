const routes = require("express").Router();

const {
  getAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
} = require("../../controller/autores");

routes.use("/posts", require("./posts/post_autor"));

routes.get("/", getAutores);

routes.get("/:idAutor", getAutorById);

routes.post("/", createAutor);

routes.put("/:idAutor", updateAutor);

routes.delete("/:idAutor", deleteAutor);

module.exports = routes;
