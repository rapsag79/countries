const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

require("./db")

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173","https://main--countriesfrank.netlify.app/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(router);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  // console.error(err);
  res.status(status).send(message);
});

module.exports = server;
