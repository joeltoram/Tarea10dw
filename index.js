const express=require('express');
const port=3000;
const app = express();

app.get('/', (req, res) => {
    res,send('Bienvenido');
})


app.get('/Productos', (req, res) => {
    res,send('Listado Productos');
})

//Se inicia el listen
app.listen(port,()=>{
    console.log(`EL servidor http://localhost:${port} `)
});


//Porst a request

app.post('/Productos', (req, res) => {
    res,send('Crear un producto');
})

//Put a request 

app.put('/Productos', (req, res) => {
    res,send('Actualizar Productos');
})


app.delete('/Productos', (req, res) => {
    res,send('Borrar Productos');
})

//Nuevas rutas

app.get('/Usuarios', (req, res) => {
    res,send('Listado usuarios');
})


app.post('/Usuarios', (req, res) => {
    res,send('Crear un usuario');
})
