const selectGetPosts = () => {
  return db.query("select * from posts");
};

const selectPostsById = (postsId) => {
  return db.query("select * from posts where idposts= ?", [postsId]);
};

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
