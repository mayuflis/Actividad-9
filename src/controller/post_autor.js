/**
 * Controlador que maneja la obtención de todos los posts de un autor específico en una aplicación.
 *
 * @requires getAllPosts
 * @requires validator
 */
const { getAllPosts } = require("../model/post_autor");
const validator = require("../schemas/posts");

/**
 * Obtiene todos los posts de un autor específico y responde con un array de posts.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "idAutor" en la ruta.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const getAllPostsAutor = async (req, res) => {
  try {
    const { idAutor } = req.params;
    const id = parseInt(idAutor);
    // Valida el ID de los posts utilizando el validador "validatIdPosts" definido en "validator".
    try {
      await validator.validatIdPosts(id);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    // Obtiene todos los posts del autor y responde con el resultado.
    const [result] = await getAllPosts(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllPostsAutor };
