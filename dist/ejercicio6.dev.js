"use strict";

var express = require('express');

var app = express();
var port = 3000;
var age = prompt("What is your age?", 18);
var nom = prompt("What is your name?");
var ape = prompt("What is your surname?");
var welcome = age < 18 ? function () {
  return alert('¡Hola!');
} : function () {
  return alert("¡Saludos!");
};
welcome(); //Se inicia el listen

app.listen(port, function () {
  console.log("Hola:".concat(nom, ", ").concat(ape));
});
//# sourceMappingURL=ejercicio6.dev.js.map
