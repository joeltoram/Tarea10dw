const express = require("express");
const app = express();
const puerto = process.env.port || 3000;
app.use(express.json());


app.use(function (req, res, next) {
    console.log("tiempo:"+Date.now());
})


app.get("/", function (req, res) {
    res.send("Hola este es mi sitio");
})


app.listen(puerto, () => {
    console.log("Escuchando en el puerto"+puerto)
})
