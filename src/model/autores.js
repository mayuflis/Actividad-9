/**
 * Recupera todos los autores de la base de datos y los devuelve como resultado de la consulta.
 *
 * @function
 * @returns {Promise<Array>} - Una promesa que resuelve en un array de objetos que representan a todos los autores en la base de datos.
 */
const selectGetAllAutores = () => {
  return db.query("select * from autores");
};

/**
 * Recupera un autor de la base de datos por su ID y lo devuelve como resultado de la consulta.
 *
 * @function
 * @param {number} autoresId - El ID del autor que se desea recuperar.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa al autor encontrado en la base de datos.
 */
const selectAutoresById = (autoresId) => {
  return db.query("select * from autores where idautores= ?", [autoresId]);
};

/**
 * Inserta un nuevo autor en la base de datos con los datos proporcionados y devuelve el resultado de la inserción.
 *
 * @function
 * @param {Object} data - Un objeto que contiene los datos del autor a insertar, incluyendo nombre, email e imagen.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa al autor insertado en la base de datos.
 */
const insertAutores = ({ nombre, email, imagen }) => {
  return db.query("insert into autores (nombre,email,imagen) values(?, ?, ?)", [
    nombre,
    email,
    imagen,
  ]);
};

/**
 * Actualiza un autor en la base de datos por su ID con los datos proporcionados y devuelve el resultado de la actualización.
 *
 * @function
 * @param {number} idAutor - El ID del autor que se desea actualizar.
 * @param {Object} data - Un objeto que contiene los datos actualizados del autor, incluyendo nombre, email e imagen.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa al autor actualizado en la base de datos.
 */
const updateAutorById = (idAutor, { nombre, email, imagen }) => {
  return db.query(
    "update autores set nombre= ?, email=?, imagen=? where idautores=?",
    [nombre, email, imagen, idAutor]
  );
};

/**
 * Elimina un autor de la base de datos por su ID y devuelve el resultado de la eliminación.
 *
 * @function
 * @param {number} idAutor - El ID del autor que se desea eliminar.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa el resultado de la eliminación del autor.
 */
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
