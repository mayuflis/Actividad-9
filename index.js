/**
 * Inicia un servidor web HTTP utilizando Node.js que escucha en un puerto específico.
 * La aplicación definida en "app" se encarga de gestionar las peticiones y respuestas del servidor.
 * El puerto en el que se ejecutará el servidor se obtiene de la variable de entorno "PORT" o se utiliza el valor predeterminado 3000 si la variable de entorno no está definida.
 *
 * @requires node:http
 * @requires src/app
 * @requires node:console
 * @requires dotenv
 */
const http = require("node:http");
const app = require("./src/app");
const { error } = require("node:console");

require("dotenv").config();

//Configuracuón de la base de datos
require("./src/config/db");

const PORT = process.env.PORT ?? 3000;

//Levanto el servidor,app se encargará de gestionar las peticiones y respuestas del servidor
const server = http.createServer(app);

// Inicia el servidor y lo hace escuchar en el puerto especificado
server.listen(PORT);

// Evento que se dispara cuando el servidor comienza a escuchar
server.on("listening", () => {
  console.log(`http://localhost:${PORT}`);
});

// Evento que se dispara en caso de un error en el servidor
server.on("error", () => {
  console.log(error.name);
});
