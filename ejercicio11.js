const express = require("express");
const app = express();
const puerto = process.env.port || 3000;
app.use(express.json());
const { check, validationResult } = require("express-validator");

var productos = [
  { id: 1, nombre: "Gorra", precio: "300", Lugar: "Metroplaza" },
  { id: 2, nombre: "Playera", precio: "1000", Lugar: "Metroplaza" },
  { id: 3, nombre: "Taza", precio: "100", Lugar: "Metroplaza" },
  { id: 4, nombre: "Llavero", precio: "200", Lugar: "Metroplaza" },
  { id: 5, nombre: "Reloj", precio: "120", Lugar: "Metroplaza" },
  { id: 6, nombre: "Camisa", precio: "220", Lugar: "Metroplaza"},
  { id: 7, nombre: "Panuelo", precio: "200", Lugar: "Metroplaza" },
  { id: 8, nombre: "Pulcera", precio: "120", Lugar: "Metroplaza" },
  { id: 9, nombre: "Lentes", precio: "220", Lugar: "Metroplaza"},
  { id: 9, nombre: "Anillo", precio: "220", Lugar: "Metroplaza"},
];

app.get("/api/productos/", (req, res) => {
    res.send(productos);
})

app.listen(puerto, () => console.log("escuchando en puerto " + puerto));
