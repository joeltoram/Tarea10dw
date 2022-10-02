const express=require('express');
const app=express();
const port=3000;

let age = prompt("What is your age?", 18);
let nom = prompt("What is your name?");
let ape = prompt("What is your surname?");

let welcome = (age < 18) ?
  () => alert('¡Hola!') :
  () => alert("¡Saludos!");
 

welcome();

//Se inicia el listen
app.listen(port,()=>{
    console.log(`Hola:${nom}, ${ape}`)
});
