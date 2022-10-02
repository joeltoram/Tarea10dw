const express=require('express');
const app=express();
const port=3000;

app.get('/',(req, res)=>{
    res.send('Corriendo codigo desde mi primer script!!!!');
} )

app.get('/saludo', (req, res)=>{
    res.send('Corriendo codigo desde mi primer script!!!!');
})

app.listen(port,()=>{
    console.log('Escuchando en el pueto'+port);
})
