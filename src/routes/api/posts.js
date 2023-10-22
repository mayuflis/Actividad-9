const routes = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
} = require("../../controller/posts");

routes.get("/", getAllPosts);
routes.get("/:postsId", getPostById);
routes.post("/", createPost);
routes.put("/:postsId");
routes.delete("/:postsId");

module.exports = routes;
