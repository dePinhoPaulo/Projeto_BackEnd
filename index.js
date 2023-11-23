require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuarioModel');
const app = express();

app.use(express.json())

//rotas
app.get('/', (req, res) => {
  res.send("Olá!");
})

app.post('/usuario', async(req, res) => {
  try{
    const usuario = await Usuario.create(req.body);
    res.status(200).json({usuario});

  } catch{
    console.log(error.message);
    res.status(500).json({message: error.message});

  }
})

const dblink = process.env.DB_LINK

mongoose.connect(`${dblink}`)
.then(() => { 
  console.log("Mongobd Conectado...");
  app.listen(3001,()=>{
    console.log("api na porta 3001")});
  }).catch((error) => {
  console.log(error);
})