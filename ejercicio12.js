const express = require("express");
const app = express();
const puerto = process.env.port 3000;
app.use(express.json());

const { check, validationResult } = require("express-validator");

var productos = [
  { id: 1, nombre: "taza de Star Wars", precio: "300" },
  { id: 2, nombre: "FIFA 22 PS4", precio: "1000" },
  { id: 3, nombre: "Playera IroMan", precio: "100" },
  { id: 4, nombre: "Zacapa Centenario", precio: "200" },
  { id: 5, nombre: "Caja de estampas del mundial", precio: "120" },
  { id: 6, nombre: "Kit Gamer+", precio: "220"},
];

app.get("/api/productos/", (req, res) => {
    res.send(productos);
})

app.listen(puerto, () => console.log("escuchando en puerto " + puerto));
