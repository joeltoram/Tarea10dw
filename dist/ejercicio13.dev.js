"use strict";

var express = require("express");

var app = express();
var puerto = process.env.port || 3000;
app.use(express.json());
app.use(function (req, res, next) {
  console.log("tiempo:" + Date.now());
});
app.get("/", function (req, res) {
  res.send("Hola este es mi sitio");
});
app.listen(puerto, function () {
  console.log("Escuchando en el puerto" + puerto);
});
//# sourceMappingURL=ejercicio13.dev.js.map
