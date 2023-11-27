const express = require('express');
const { getDepartamentos, getDepartamentosById, postDepartamentos, putDepartamentos, deleteDepartamentos} = require('../controllers/departamentoController');

const router = express.Router();

//buscando todos departamentos
router.get('/', getDepartamentos);

//buscando departamento por id
router.get('/:id', getDepartamentosById);

//inserindo departamento
router.post('/', postDepartamentos);

//atualizando departamento
router.put('/:id', putDepartamentos);

//deletando departamento
router.delete('/:id', deleteDepartamentos);

module.exports = router;