const express = require('express');
const { getColaboradores, getColaboradoresById, postColaboradores, putColaboradores, deleteColaboradores} = require('../controllers/colaboradoresController');

const router = express.Router();

router.get('/', getColaboradores)

router.get('/:id', getColaboradoresById)

router.post('/', postColaboradores)

router.put('/:id', putColaboradores)

router.delete('/:id', deleteColaboradores)

module.exports = router;