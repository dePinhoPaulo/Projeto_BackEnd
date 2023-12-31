require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const installRoute = require('./routes/installRoute');
const usuarioRoute = require('./routes/usuarioRoute');
const unidadeRoute = require('./routes/unidadeRoute');
const departamentoRoute = require('./routes/departamentoRoute');
const colaboradorRoute = require('./routes/colaboradorRoute');
const relatorioRoute = require('./routes/relatorioRoute');

const swaggerUi = require('swagger-ui-express');
const swaggerFille = require('./swagger_doc.json');

const app = express();

const LINK = process.env.DB_LINK
const PORT = process.env.DB_PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Home
app.get('/', (req, res) => {
  res.send("IAE, BLZ?");
})

//Documentação
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFille));

//Rotas
app.use('/install', installRoute);
app.use('/usuarios', usuarioRoute);
app.use('/unidades', unidadeRoute);
app.use('/departamentos', departamentoRoute);
app.use('/colaboradores', colaboradorRoute);
app.use('/relatorios', relatorioRoute);

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