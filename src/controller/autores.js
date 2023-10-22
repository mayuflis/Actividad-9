const {
  selectGetAllAutores,
  selectAutoresById,
  insertAutores,
  updateAutorById,
  deleteAutorById,
} = require("../model/autores");

const validator = require("../schemas/autores");

const getAutores = async (req, res) => {
  try {
    const [result] = await selectGetAllAutores();
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ fatal: error.message });
  }
};

const getAutorById = async (req, res) => {
  try {
    const { idAutor } = req.params;
    console.log(idAutor);
    await validator.validatIdAutor(parseInt(idAutor));
    const [result] = await selectAutoresById(idAutor);
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ fatal: error.message });
  }
};

const createAutor = async (req, res) => {
  try {
    await validator.validateBodyAutor(req.body);
    const [result] = await insertAutores(req.body);
    const [autor] = await selectAutoresById(result.insertId);
    res.status(200).json(autor[0]);
  } catch (error) {
    res.status(422).json({ fatal: JSON.parse(error.message) });
  }
};

const updateAutor = async (req, res) => {
  try {
    const { idAutor } = req.params;
    const id = parseInt(idAutor);
    await validator.validatIdAutor(id);
    await validator.validatPartialAutor(req.body);
    const [result] = await updateAutorById(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ fatal: JSON.parse(error.message) });
  }
};

const deleteAutor = async (req, res) => {
  try {
    const { idAutor } = req.params;
    const id = parseInt(idAutor);
    await validator.validatIdAutor(id);
    const [result] = await deleteAutorById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ fatal: JSON.parse(error.message) });
  }
};

module.exports = {
  getAutores,
  getAutorById,
  createAutor,
  updateAutor,
  deleteAutor,
};
