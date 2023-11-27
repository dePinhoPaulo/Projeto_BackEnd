require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const installRoute = require('./routes/installRoute');
const usuarioRoute = require('./routes/usuarioRoute');
const unidadeRoute = require('./routes/unidadeRoute');
const departamentoRoute = require('./routes/departamentoRoute');

const app = express();

const LINK = process.env.DB_LINK
const PORT = process.env.DB_PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Home
app.get('/', (req, res) => {
  res.send("IAE, BLZ?");
})

//Rotas
app.use('/install', installRoute);
app.use('/usuarios', usuarioRoute);
app.use('/unidades', unidadeRoute);
app.use('/departamentos', departamentoRoute);

//Conexão ao Banco
mongoose.connect(`${LINK}`)
  .then(() => {
    console.log("Mongobd Conectado...");
    app.listen(PORT, () => {
      console.log(`api na porta ${PORT}`)
    });
  }).catch((error) => {
    console.log(error);
})