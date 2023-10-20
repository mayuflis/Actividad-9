//EXPRESS controla las rutas
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//RUTAS

module.exports = app;
