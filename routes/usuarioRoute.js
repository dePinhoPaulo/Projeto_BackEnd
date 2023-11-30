const express = require('express');
const { getUsuarios, getUsuariosById, postUsuarios, putUsuarios, deleteUsuarios, postLoginUser, postAdmin } = require('../controllers/usuariosController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

//Buscando todos usarios
router.get('/', autentUsuario, getUsuarios);

//Buscando usarios por id
router.get('/:id', autentUsuario, getUsuariosById);

//Cadastrando usuario
router.post('/', postUsuarios);

//Atualizando usuario
router.put('/:id', autentUsuario, putUsuarios);

//Deletando usuario
router.delete('/:id', autentUsuario, deleteUsuarios);

//Logando no sistema
router.post('/login', postLoginUser);

//Inserindo Admin
router.post('/admin', autentUsuario, postAdmin);

module.exports = router;