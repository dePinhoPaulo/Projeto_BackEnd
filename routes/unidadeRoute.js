const express = require('express');
const { getUnidades, getUnidadesById, postUnidades, putUnidades, deleteUnidades} = require('../controllers/unidadesController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

//buscando
router.get('/', autentUsuario, getUnidades);

//Buscando unidades por Id
router.get('/:id', autentUsuario, getUnidadesById);

//inserindo unidade
router.post('/', autentUsuario, postUnidades);

//Atualizando unidade
router.put('/:id', autentUsuario, putUnidades);

//Deletando unidades
router.delete('/:id', autentUsuario, deleteUnidades);

module.exports = router;