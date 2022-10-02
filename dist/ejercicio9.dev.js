"use strict";

var express = require('express');

var port = 3000;
var app = express(); //Se inicia el listen

app.listen(port, function () {
  console.log("EL servidor corriendo http://localhost:".concat(port, " "));
});
app.listen(port, function () {
  console.log("No se pudo levantar el servidor http://localhost:".concat(port, " "));
});
//# sourceMappingURL=ejercicio9.dev.js.map
