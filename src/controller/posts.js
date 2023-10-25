/**
 * Controlador que maneja las operaciones relacionadas con posts en una aplicación.
 *
 * @requires selectGetPosts
 * @requires selectPostsById
 * @requires insertPosts
 * @requires updatePostsById
 * @requires deletePostsById
 * @requires validator
 */
const {
  selectGetPosts,
  selectPostsById,
  insertPosts,
  updatePostsById,
  deletePostsById,
} = require("../model/posts");

const validator = require("../schemas/posts");

/**
 * Obtiene todos los posts y responde con un array de posts.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const getAllPosts = async (req, res) => {
  try {
    const [result] = await selectGetPosts();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: JSON.parse(error.message) });
  }
};

/**
 * Obtiene un post por su ID y responde con los detalles del post.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "postsId" en la ruta.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const getPostById = async (req, res) => {
  try {
    const { postsId } = req.params;
    const id = parseInt(postsId);
    try {
      await validator.validatIdPosts(id);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }

    const [result] = await selectPostsById(id);
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(400).json({ message: JSON.parse(error.message) });
  }
};

/**
 * Crea un nuevo post y responde con los detalles del post creado.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene los datos del post en el cuerpo.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const createPost = async (req, res) => {
  try {
    try {
      // Valida el body de los posts utilizando el validador "validateBodyPosts" definido en "validator"
      await validator.validateBodyPosts(req.body);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    const [result] = await insertPosts(req.body);
    const [post] = await selectPostsById(result.insertId);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Actualiza los detalles de un post por su ID y responde con el resultado de la actualización.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "postsId" en la ruta y los datos del post a actualizar en el cuerpo.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const updatePost = async (req, res) => {
  try {
    const { postsId } = req.params;

    try {
      // Valida el body de los posts utilizando el validador "validateBodyPosts" definido en "validator"
      await validator.validatePartialBody(req.body);
      // Valida el id de los posts utilizando el validador "validateIdPosts" definido en "validator"
      await validator.validatIdPosts(parseInt(postsId));
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }

    const [result] = await updatePostsById(parseInt(postsId), req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Elimina un post por su ID y responde con el resultado de la eliminación.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "postsId" en la ruta.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const deletePost = async (req, res) => {
  try {
    const { postsId } = req.params;
    const id = parseInt(postsId);
    try {
      await validator.validatIdPosts(id);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    const [result] = await deletePostsById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
