/**
 * Configura una conexión a una base de datos MySQL utilizando la biblioteca "mysql2" y crea un conjunto de conexiones (pool) para gestionar las solicitudes a la base de datos.
 *
 * La configuración de la conexión se basa en las variables de entorno, incluyendo el host, usuario, contraseña, puerto y nombre de la base de datos.
 *
 * @requires mysql2
 * @throws Error si no se han configurado las variables de entorno necesarias para la conexión a la base de datos.
 */
const mysql = require("mysql2");

// Crea un conjunto de conexiones (pool) para manejar las solicitudes a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Expone la conexión de la base de datos como una variable global para su uso en toda la aplicación
global.db = pool.promise();
