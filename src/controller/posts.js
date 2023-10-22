const {
  selectGetPosts,
  selectPostsById,
  insertPosts,
  updatePostsById,
  deletePostsById,
} = require("../model/posts");
const validator = require("../schemas/posts");

const getAllPosts = async (req, res) => {
  try {
    const [result] = await selectGetPosts();
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ message: JSON.parse(error.message) });
  }
};

const getPostById = async (req, res) => {
  try {
    const { postsId } = req.params;
    const id = parseInt(postsId);
    await validator.validatIdPosts(id);
    const [result] = await selectPostsById(id);
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(422).json({ message: JSON.parse(error.message) });
  }
};

const createPost = async (req, res) => {
  try {
    try {
      await validator.validateBodyPosts(req.body);
    } catch (error) {
      res.status(422).json({ error: JSON.parse(error.message) });
    }
    const [result] = await insertPosts(req.body);
    const [post] = await selectPostsById(result.insertId);
    res.status(200).json(post);
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    console.log(req.body);
    try {
      await validator.validatePartialBody(req.body);
    } catch (error) {
      res.status(422).json({ error: JSON.parse(error.message) });
    }
    const { postsId } = req.params;

    const [result] = await updatePostsById(parseInt(postsId), req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postsId } = req.params;
    const id = parseInt(postsId);
    try {
      await validator.validatIdPosts(id);
    } catch (error) {
      res.status(422).json({ error: JSON.parse(error.message) });
    }
    const [result] = await deletePostsById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
