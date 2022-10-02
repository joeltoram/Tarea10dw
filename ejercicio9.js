const express=require('express');
const port=3000;
const app = express();

//Se inicia el listen
app.listen(port,()=>{
    console.log(`EL servidor corriendo http://localhost:${port} `)
});

app.listen(port,()=>{
    console.log(`No se pudo levantar el servidor http://localhost:${port} `)
});
