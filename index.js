const http = require("node:http");
const app = require("./src/app");
const { error } = require("node:console");

require("dotenv").config();

const PORT = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(PORT);

server.on("listening", () => {
  console.log(`http://localhost:${PORT}`);
});

server.on("error", () => {
  console.log(error.name);
});
