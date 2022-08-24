const express = require('express');
const conectarDB = require ('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app= express();

app.get('/',(req,res)=>{
	res.send('Prueba');
})
conectarDB();


app.use(cors());

app.use(express.json());

app.use('/api/usuario', require('./routes/usuario'));

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`);
})