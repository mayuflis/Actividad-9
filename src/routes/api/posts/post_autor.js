const routes = require("express").Router();

const { getAllPostsAutor } = require("../../../controller/post_autor");

routes.get("/:idAutor", getAllPostsAutor);

module.exports = routes;
