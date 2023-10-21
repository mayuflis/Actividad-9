const selectGetAllAutores = () => {
  return db.query("select * from autores");
};

const selectAutoresById = (autoresId) => {
  return db.query("select * from autores where idautores= ?", [autoresId]);
};

module.exports = { selectGetAllAutores, selectAutoresById };
