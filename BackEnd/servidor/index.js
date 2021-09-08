const express = require('express');
const conectarDB = require('./config/db')

const app = express();

conectarDB();

app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})