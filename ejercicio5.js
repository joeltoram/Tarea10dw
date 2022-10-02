const express=require('express');
const app=express();
const port=3000;
var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
    console.info(resultado+" "+numero);
  }
  else {
    return "impar";
    console.error(resultado+" "+numero+" es "+resultado);
  }
}