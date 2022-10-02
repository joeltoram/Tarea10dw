"use strict";

var express = require('express');

var port = 3000;
var app = express();
app.get('/', function (req, res) {
  res, send('Bienvenido');
});
app.get('/Productos', function (req, res) {
  res, send('Listado Productos');
}); //Se inicia el listen

app.listen(port, function () {
  console.log("EL servidor http://localhost:".concat(port, " "));
}); //Porst a request

app.post('/Productos', function (req, res) {
  res, send('Crear un producto');
}); //Put a request 

app.put('/Productos', function (req, res) {
  res, send('Actualizar Productos');
});
app["delete"]('/Productos', function (req, res) {
  res, send('Borrar Productos');
}); //Nuevas rutas

app.get('/Usuarios', function (req, res) {
  res, send('Listado usuarios');
});
app.post('/Usuarios', function (req, res) {
  res, send('Crear un usuario');
});
//# sourceMappingURL=index.dev.js.map
