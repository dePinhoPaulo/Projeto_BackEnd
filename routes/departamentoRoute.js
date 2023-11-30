const express = require('express');
const { getDepartamentos, getDepartamentosById, postDepartamentos, putDepartamentos, deleteDepartamentos} = require('../controllers/departamentoController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

//buscando todos departamentos
router.get('/', autentUsuario, getDepartamentos);

//buscando departamento por id
router.get('/:id', autentUsuario, getDepartamentosById);

//inserindo departamento
router.post('/', autentUsuario, postDepartamentos);

//atualizando departamento
router.put('/:id', autentUsuario, putDepartamentos);

//deletando departamento
router.delete('/:id', autentUsuario, deleteDepartamentos);

module.exports = router;