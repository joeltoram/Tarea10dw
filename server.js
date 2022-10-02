const express = require("express");
const app = express();
const puerto = process.env.port || 3000;
app.use(express.json());


app.use(function (req, res, next) {
    console.log("tiempo:" + Date.now());
    next();
})

app.use(function (req, res, next) {
  console.log("Tipo de Metodo de Solicitud:" + req.method);
  next();
});


app.use("/api/carritos", function (req, res, next) {
  console.log("Consulta general de carritos");
  next();
});

app.use("/api/login", function (req, res, next) {
  console.log("loggin");
  next();
});



app.get("/", function (req, res) {
    res.send("Hola este es mi sitio");
})


app.listen(puerto, () => {
    console.log("Escuchando en el puerto"+puerto)
})