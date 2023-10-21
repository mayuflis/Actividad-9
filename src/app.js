/**
 * Configura una aplicación Express para gestionar las rutas y solicitudes HTTP.
 *
 * @requires express
 * @requires cors
 */
// Crea una instancia de la aplicación Express
const express = require("express");

// Habilita el análisis de datos JSON en las solicitudes
app.use(express.json());

// Habilita el middleware de CORS para permitir solicitudes desde diferentes orígenes
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//RUTAS
app.use("/api", require("./routes/api"));

module.exports = app;
