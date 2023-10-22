/**
 * Módulo que proporciona funciones para realizar operaciones de consulta y manipulación en la tabla "posts" de una base de datos.
 *
 * @module posts
 */

/**
 * Realiza una consulta para obtener todos los posts en la base de datos.
 *
 * @function
 * @returns {Promise<Array>} - Una promesa que resuelve en un array de objetos que representan todos los posts en la base de datos.
 */

const selectGetPosts = () => {
  return db.query("select * from posts");
};

/**
 * Realiza una consulta para obtener un post por su ID en la base de datos, incluyendo los detalles del autor del post.
 *
 * @function
 * @param {number} postsId - El ID del post que se desea recuperar.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa el post encontrado en la base de datos, incluyendo detalles del autor.
 */
const selectPostsById = (postsId) => {
  return db.query(
    "select * from posts as p join autores as a on a.idautores=p.autores_idautores where p.idposts= ?",
    [postsId]
  );
};

/**
 * Inserta un nuevo post en la base de datos con los datos proporcionados y devuelve el resultado de la inserción.
 *
 * @function
 * @param {Object} data - Un objeto que contiene los datos del post a insertar, incluyendo título, descripción, fecha de creación, categoría y el ID del autor.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa el post insertado en la base de datos.
 */
const insertPosts = ({
  titulo,
  descripcion,
  fecha_creacion,
  categoria,
  autores_idautores,
}) => {
  return db.query(
    "insert into posts(titulo, descripcion,fecha_creacion,categoria,autores_idautores) values(?,?,?,?,?)",
    [titulo, descripcion, fecha_creacion, categoria, autores_idautores]
  );
};

/**
 * Actualiza los detalles de un post por su ID en la base de datos con los datos proporcionados y devuelve el resultado de la actualización.
 *
 * @function
 * @param {number} postsId - El ID del post que se desea actualizar.
 * @param {Object} data - Un objeto que contiene los datos actualizados del post, incluyendo título, descripción, fecha de creación, categoría y el ID del autor.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa el resultado de la actualización del post.
 */
const updatePostsById = (
  postsId,
  { titulo, descripcion, fecha_creacion, categoria, autores_idautores }
) => {
  console.log(titulo);
  return db.query(
    "update posts set titulo=? , descripcion=? , fecha_creacion=? , categoria=? , autores_idautores=? where idposts =?",
    [titulo, descripcion, fecha_creacion, categoria, autores_idautores, postsId]
  );
};

/**
 * Elimina un post de la base de datos por su ID y devuelve el resultado de la eliminación.
 *
 * @function
 * @param {number} postsId - El ID del post que se desea eliminar.
 * @returns {Promise<Object>} - Una promesa que resuelve en un objeto que representa el resultado de la eliminación del post.
 */
const deletePostsById = (postsId) => {
  return db.query("delete from posts where idposts=?", [postsId]);
};

module.exports = {
  selectGetPosts,
  selectPostsById,
  insertPosts,
  updatePostsById,
  deletePostsById,
};
