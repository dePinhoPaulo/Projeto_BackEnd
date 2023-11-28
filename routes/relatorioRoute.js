const express = require('express');
const { getDepSalario, getDepPessoa, getDepIdade, getUniSalario, getUniPessoa, getUniIdade} = require('../controllers/relatorioController');

const router = express.Router();

router.get('/dep/salario', getDepSalario);

router.get('/dep/pessoa', getDepPessoa);

router.get('/dep/idade', getDepIdade);

router.get('/uni/salario', getUniSalario);

router.get('/uni/pessoa', getUniPessoa);

router.get('/uni/idade', getUniIdade);

module.exports = router;