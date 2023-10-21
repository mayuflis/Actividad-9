const routes = require("express").Router();

routes.use("/posts", require("./posts/post_autor"));
routes.get("/");
routes.get(":idAutor");
routes.post("/");
