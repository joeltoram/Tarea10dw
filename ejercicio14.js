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

app.put(
    "/api/productos/:id",
  
    //dejamos la validacion
    [check("nombre").isLength({ min: 3 }), check("precio").isLength({ min: 3 })],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      //verificamos si existe el registro en el arreglo
      const produc = produc.find((produc) =>produc.id === parseInt(req.params.id));
  
      if (!produc) {
        res.status(500).send("Ha ocurrido un error=" + req.params.id);
        return;
      }
      produc.nombre = req.body.nombre;
      produc.precio = req.body.precio;
     
  
      //poner el codigo 201 que es el correcto, de 200
      res.status(200).send(produc);
      //res.send(nuevoproduct);
    }
  );

  app.get("/api/productos/:marcabuscar", (req, res) => {
    const respuesta = produc.find((respuesta) => respuesta.nombre === req.params.marcabuscar);
    if (!respuesta) {
        res.status(404).send("Este productos no se encontró");
    } else {
        res.send(respuesta);
    }
})
app.listen(puerto, () => console.log("escuchando en puerto " + puerto));

