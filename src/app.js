/**
 * Configura una aplicación Express para gestionar las rutas y solicitudes HTTP.
 *
 * @requires express
 * @requires cors
 */

const express = require("express");
const cors = require("cors");
const dayjs = require("dayjs");
const fs = require("node:fs/promises");
//Instancia de la aplicación Express
const app = express();

// Habilita el análisis de datos JSON en las solicitudes
app.use(express.json());

// Habilita el middleware de CORS para permitir solicitudes desde diferentes orígenes
app.use(cors());

//Registro de todas la peticiones entrantes al servidor
app.use(async (req, res, next) => {
  try {
    const data = `[${dayjs().format("DD-MM-YYYY HH:mm:ss")}] Método: ${
      req.method
    }  Url: ${req.url}\n`;

    await fs.appendFile("./main.log", data);
  } catch (error) {
    console.log(error);
  }
  next();
});
//Rutas
app.use("/api", require("./routes/api"));

app.use((req, res) => {
  res.status(404).send("<h1>NOT FOUND</h1>");
});

module.exports = app;
