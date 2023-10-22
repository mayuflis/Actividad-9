const {
  selectGetPosts,
  selectPostsById,
  insertPosts,
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
    const [result] = await insertPosts(req.body);
    const [post] = await selectPostsById(result.insertId);
    res.status(200).json(post);
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

const updatePost = (req, res) => {};

const deletePost = (req, res) => {};

module.exports = { getAllPosts, getPostById, createPost };
