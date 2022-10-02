"use strict";

var express = require('express');

var port = 3000;
var app = express();
app.get('/', function (req, res) {
  res, send('Bienvenido');
});
app.get('/Productos', function (req, res) {
  res, send('Listado Productos');
});
app.listen(port, function () {
  console.log("EL servidor http://localhost:".concat(port, " "));
});
app.post('/Productos', function (req, res) {
  res, send('Crear un producto');
});
app.put('/Productos', function (req, res) {
  res, send('Actualizar Productos');
});
app["delete"]('/Productos', function (req, res) {
  res, send('Borrar Productos');
});
app.get('/Usuarios', function (req, res) {
  res, send('Listado usuarios');
});
app.post('/Usuarios', function (req, res) {
  res, send('Crear un usuario');
});
//# sourceMappingURL=ejercicio10.dev.js.map
