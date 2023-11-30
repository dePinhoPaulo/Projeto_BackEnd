const express = require('express');
const { getColaboradores, getColaboradoresById, postColaboradores, putColaboradores, deleteColaboradores} = require('../controllers/colaboradoresController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

//buscando todos colaboradores
router.get('/', autentUsuario, getColaboradores)

//buscando colaborador por id
router.get('/:id', autentUsuario, getColaboradoresById)

//inserindo colaborador
router.post('/', autentUsuario, postColaboradores)

//atualizando colaborador
router.put('/:id', autentUsuario, putColaboradores)

//deletando colaborador
router.delete('/:id', autentUsuario, deleteColaboradores)

module.exports = router;