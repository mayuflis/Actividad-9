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

module.exports = { selectGetPosts, selectPostsById, insertPosts };
