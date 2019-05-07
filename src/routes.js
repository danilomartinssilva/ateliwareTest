const express = require("express");
const routes = express.Router();

routes.get("/", (req, resp) => {
  return resp.json({
    message: "Tudo funcionando"
  });
});

module.exports = routes;
