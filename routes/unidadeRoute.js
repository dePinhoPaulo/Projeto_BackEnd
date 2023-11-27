const express = require('express');
const { getUnidades, getUnidadesById, postUnidades, putUnidades, deleteUnidades} = require('../controllers/unidadesController');

const router = express.Router();

//buscando
router.get('/', getUnidades)

//Buscando unidades por Id
router.get('/:id', getUnidadesById)

//inserindo unidade
router.post('/', postUnidades)

//Atualizando usuarios
router.put('/:id', putUnidades)

//Deletando unidades
router.delete('/:id', deleteUnidades)

module.exports = router;