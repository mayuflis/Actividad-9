const selectGetAllAutores = () => {
  return db.query("select * from autores");
};

const selectAutoresById = (autoresId) => {
  return db.query("select * from autores where idautores= ?", [autoresId]);
};

const insertAutores = ({ nombre, email, imagen }) => {
  return db.query("insert into autores (nombre,email,imagen) values(?, ?, ?)", [
    nombre,
    email,
    imagen,
  ]);
};

const updateAutorById = (idAutor, { nombre, email, imagen }) => {
  return db.query(
    "update autores set nombre= ?, email=?, imagen=? where idautores=?",
    [nombre, email, imagen, idAutor]
  );
};

const deleteAutorById = (idAutor) => {
  return db.query("delete from autores where idautores= ?", [idAutor]);
};

module.exports = {
  selectGetAllAutores,
  selectAutoresById,
  insertAutores,
  updateAutorById,
  deleteAutorById,
};
