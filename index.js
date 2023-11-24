require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuarioModel');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//rotas
app.get('/', (req, res) => {
  res.send("Olá!");
})

//buscando todos usarios
app.get('/usuarios', async(req, res) => {
  try{
    const usuarios = await Usuario.find({});
    res.status(200).json(usuarios);

  } catch (error){
    console.log(error.message);
    res.status(500).json({message: error.message});

  }
})

//buscando usarios por id
app.get('/usuarios/:id', async(req, res) => {
  try{
    const {id} = req.params;
    const usuario = await Usuario.findById(id);
    res.status(200).json(usuario);

  } catch (error){
    console.log(error.message);
    res.status(500).json({message: error.message});

  }
})

//inserindo usuario
app.post('/usuarios', async(req, res) => {
  const {nome, sobrenome, email, senha, confirmasenha} = req.body;

  if(!nome){
    return res.status(422).json({error: '`Nome é obrigatório!`'});
  }
  if(!email){
    return res.status(422).json({error: '`Sobrenome é obrigatório!`'});
  }
  if(!senha){
    return res.status(422).json({error: '`senha é obrigatório!`'});
  }
  if(senha !== confirmasenha){
    return res.status(422).json({error: '`senhna não é igual!`'});
  }

  const usuario = {
    nome, 
    sobrenome, 
    email, 
    senha,
    confirmasenha
  }

  try{
    await Usuario.create(usuario);
    res.status(200).json(`Usuario inserido com sucesso!`);

  } catch (error){
    console.log(error.message);
    res.status(500).json({message: error.message});

  }
})

//atualizando usuario
app.put('/usuarios/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, req.body);
    if(!usuario){
      return res.status(404).json({message: `não posso encontrar usuario com este ID: ${id}`});
    }
    const updateUsuario = await Usuario.findById(id)
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});

  }
})

//deletando usuario
app.delete('/usuarios/:id', async(req, res) => {
  try {
    const {id} = req.params
    const usuario = await Usuario.findByIdAndDelete(id);
    if(!usuario){
      return res.status(404).json({message: `não posso encontrar usuario com este ID: ${id}`});
    }
    res.status(200).json(usuario);
  } catch (error) {
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