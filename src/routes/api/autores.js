const routes = require("express").Router();

routes.use("/posts", require("./posts/post_autor"));
routes.get("/", () => {
  console.log("Autor");
});
routes.get(":idAutor");
routes.post("/");

module.exports = routes;
