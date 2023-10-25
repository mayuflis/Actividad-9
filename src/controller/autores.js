/**
 * Controlador que maneja las operaciones relacionadas con autores en una aplicación.
 *
 * @requires selectGetAllAutores
 * @requires selectAutoresById
 * @requires insertAutores
 * @requires updateAutorById
 * @requires deleteAutorById
 * @requires validator
 */
const {
  selectGetAllAutores,
  selectAutoresById,
  insertAutores,
  updateAutorById,
  deleteAutorById,
} = require("../model/autores");

const validator = require("../schemas/autores");

/**
 * Obtiene todos los autores y responde con un array de autores.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const getAutores = async (req, res) => {
  try {
    const [result] = await selectGetAllAutores();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ fatal: error.message });
  }
};

/**
 * Obtiene un autor por su ID y responde con los detalles del autor.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "idAutor" en la ruta.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const getAutorById = async (req, res) => {
  try {
    const { idAutor } = req.params;
    try {
      //Validación del id
      await validator.validatIdAutor(parseInt(idAutor));
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    const [result] = await selectAutoresById(idAutor);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ fatal: error.message });
  }
};

/**
 * Crea un nuevo autor y responde con los detalles del autor creado.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene los datos del autor en el cuerpo.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const createAutor = async (req, res) => {
  try {
    try {
      //Validación del body
      await validator.validateBodyAutor(req.body);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    const [result] = await insertAutores(req.body);
    const [autor] = await selectAutoresById(result.insertId);
    res.status(200).json(autor[0]);
  } catch (error) {
    res.status(400).json({ fatal: JSON.parse(error.message) });
  }
};

/**
 * Actualiza los detalles de un autor por su ID y responde con el resultado de la actualización.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "idAutor" en la ruta y los datos del autor a actualizar en el cuerpo.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const updateAutor = async (req, res) => {
  try {
    const { idAutor } = req.params;
    const id = parseInt(idAutor);
    try {
      //Validación del id y del cuerpo del body
      await validator.validatIdAutor(id);
      await validator.validatPartialAutor(req.body);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    const [result] = await updateAutorById(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ fatal: JSON.parse(error.message) });
  }
};

/**
 * Elimina un autor por su ID y responde con el resultado de la eliminación.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene el parámetro "idAutor" en la ruta.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const deleteAutor = async (req, res) => {
  try {
    const { idAutor } = req.params;
    const id = parseInt(idAutor);
    try {
      //Validación del id
      await validator.validatIdAutor(id);
    } catch (error) {
      res.status(400).json({ error: JSON.parse(error.message) });
    }
    const [result] = await deleteAutorById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ fatal: JSON.parse(error.message) });
  }
};

module.exports = {
  getAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
};
