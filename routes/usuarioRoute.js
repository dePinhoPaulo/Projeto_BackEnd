const express = require('express');
const Usuario = require('../models/usuarioModel');
const { getUsuarios, getUsuariosById, postUsuarios, putUsuarios, deleteUsuarios, postLoginUser } = require('../controllers/usuariosController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

//Buscando todos usarios
router.get('/', autentUsuario, getUsuarios);

//Buscando usarios por id
router.get('/:id', autentUsuario, getUsuariosById);

//Inserindo usuario
router.post('/', postUsuarios);

//Atualizando usuario
router.put('/:id', putUsuarios);

//Deletando usuario
router.delete('/:id', deleteUsuarios);

//Logando no sistema
router.post('/login', postLoginUser);

module.exports = router;