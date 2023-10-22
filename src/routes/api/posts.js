const routes = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../../controller/posts");

routes.get("/", getAllPosts);
routes.get("/:postsId", getPostById);
routes.post("/", createPost);
routes.put("/:postsId", updatePost);
routes.delete("/:postsId", deletePost);

module.exports = routes;
