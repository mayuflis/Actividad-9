/**
 * Realiza una consulta para obtener todos los posts de un autor específico en una base de datos.
 *
 * @param {number} id - El ID del autor del cual se desean obtener los posts.
 * @returns {Promise<Array>} - Una promesa que resuelve en un array de objetos que representan los posts del autor en la base de datos. Cada objeto contiene campos como "titulo", "descripcion", "fecha_creacion" y "categoria".
 */
const getAllPosts = (id) => {
  return db.query(
    "select p.titulo,p.descripcion,p.fecha_creacion,p.categoria from posts as p join autores as a on a.idautores=p.autores_idautores where a.idautores=?",
    [id]
  );
};
module.exports = { getAllPosts };
