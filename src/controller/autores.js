const {
  selectGetAllAutores,
  selectAutoresById,
  insertAutores,
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

module.exports = { getAutores, getAutorById, createAutor };
