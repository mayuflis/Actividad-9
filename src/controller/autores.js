const { selectGetAllAutores, selectAutoresById } = require("../model/autores");

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

module.exports = { getAutores, getAutorById };
