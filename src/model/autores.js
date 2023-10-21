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
module.exports = { selectGetAllAutores, selectAutoresById, insertAutores };
