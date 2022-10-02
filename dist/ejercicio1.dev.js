"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Corriendo codigo desde mi primer script!!!!');
});
app.get('/saludo', function (req, res) {
  res.send('Corriendo codigo desde mi primer script!!!!');
});
app.listen(port, function () {
  console.log('Escuchando en el pueto' + port);
});
//# sourceMappingURL=ejercicio1.dev.js.map
