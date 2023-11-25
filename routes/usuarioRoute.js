const express = require('express');
const Usuario = require('../models/usuarioModel');
const { getUsuarios, getUsuariosById, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/usuariosController');

const router = express.Router();

//Buscando todos usarios
router.get('/', getUsuarios)

//Buscando usarios por id
router.get('/:id', getUsuariosById)

//Inserindo usuario
router.post('/', postUsuarios)

//Atualizando usuario
router.put('/:id', putUsuarios)

//Deletando usuario
router.delete('/:id', deleteUsuarios)

module.exports = router;