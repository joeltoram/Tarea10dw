"use strict";

var express = require('express');

var app = express();
var port = 3000;
var numero = prompt("Introduce un número entero");
var resultado = parImpar(numero);
alert("El número " + numero + " es " + resultado);

function parImpar(numero) {
  if (numero % 2 == 0) {
    return "par";
    console.info(resultado + " " + numero);
  } else {
    return "impar";
    console.error(resultado + " " + numero + " es " + resultado);
  }
}
//# sourceMappingURL=ejercicio5.dev.js.map
