const express = require("express");
const app = express();
const puerto = process.env.port 3000;
app.use(express.json());

const { check, validationResult } = require("express-validator");

var carritos = [
  { id: 1, marca: "BMW", modelo: "x3", year: "2020" },
  { id: 2, marca: "AUDI", modelo: "A1", year: "2021" },
  { id: 3, marca: "MERCEDES", modelo: "CLASE A", year: "2022" },
];

app.get("/api/carritos/", (req, res) => {
    res.send(carritos);
})

app.get("/api/buscacarro/:marcabuscar", (req, res) => {
    const respuesta = carritos.find((respuesta) => respuesta.marca === req.params.marcabuscar);
    if (!respuesta) {
        res.status(404).send("este carro no existe");
    } else {
        res.send(respuesta);
    }
})


app.get("/api/carros/lista", (req, res) => {
  res.send(["BMW X1", "AUDI", "HONDA", "MERCEDES"]);
});

app.get("/api/carros/id/:id", (req, res) => {
  //res.send(req.params.id);
  var carritos = ["ACURA", "TOYOTA", "FIAT", "MACERATI"];
  res.send(carritos[req.params.id]);
});


app.get("/api/carros/:empresa/:modelo", (req, res) => {
  res.send(req.params.empresa + " " + req.params.modelo);
  //res.send(req.params);
});



app.post("/api/carros", (req, res) => {
  var carroID = carritos.length;
  var nuevoCarro = {
    id: req.body.id,
    marca: req.body.marca,
    modelo: req.body.modelo,
    year: req.body.year,
  };
  carritos.push(nuevoCarro);
  res.status(201).send(carritos);
});


app.post("/api/carros2", (req, res) => {
  if (!req.body.marca  req.body.marca.length < 3) {
    res.status(400).send("la marca no es la que se espera");
    return;
  }

  var carroId = carritos.length;
  var nuevoCarro = {
    id: carroId,
    marca: req.body.marca,
    modelo: req.body.modelo,
    year: req.body.year,
  };
  carritos.push(nuevoCarro);
  //poner el codigo 201 que es el correcto, de 200
  res.status(201).send(carritos);
  //res.send(nuevoCarro);
});

app.post(
  "/api/carros3",
  //[check("marca").isEmail(), check("modelo").isLength({ min: 3 })],
  [check("marca").isLength({ min: 3 }), check("modelo").isLength({ min: 3 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    var carroId = carritos.length;
    var nuevoCarro = {
      id: carroId,
      marca: req.body.marca,
      modelo: req.body.modelo,
      year: req.body.year,
    };
    carritos.push(nuevoCarro);
    //poner el codigo 201 que es el correcto, de 200
    res.status(201).send(carritos);
    //res.send(nuevoCarro);
  }
);

//parte 3 put_ 201
app.put(
  "/api/carros3/:id",

  //dejamos la validacion
  [check("marca").isLength({ min: 3 }), check("modelo").isLength({ min: 3 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    //verificamos si existe el registro en el arreglo
    const car = carritos.find((car) => car.id === parseInt(req.params.id));

    if (!car) {
      res.status(404).send("no existe ese codigo de carro=" + req.params.id);
      return;
    }
    car.marca = req.body.marca;
    car.modelo = req.body.modelo;
    car.year = req.body.year;

    //poner el codigo 201 que es el correcto, de 200
    res.status(200).send(car);
    //res.send(nuevoCarro);
  }
);


//deleted
app.delete("/api/carros3/:id", (req, res) => {
  //verificamos si existe el registro en el arreglo
  const car = carritos.find((car) => car.id === parseInt(req.params.id));

  if (!car) {
    res.status(404).send("no existe ese codigo de carro=" + req.params.id);
    return;
  }

  const index = carritos.indexOf(car);
  carritos.splice(index, 1);
  res.status(200).send("Se elimino el carrito");
});




app.listen(puerto, () => console.log("escuchando en puerto " + puerto));