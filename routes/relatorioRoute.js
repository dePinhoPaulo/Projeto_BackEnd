const express = require('express');
const { getDepSalario, getDepPessoa, getDepIdade, getUniSalario, getUniPessoa, getUniIdade} = require('../controllers/relatorioController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

router.get('/dep/salario', autentUsuario, getDepSalario);

router.get('/dep/pessoa', autentUsuario, getDepPessoa);

router.get('/dep/idade', autentUsuario, getDepIdade);

router.get('/uni/salario', autentUsuario, getUniSalario);

router.get('/uni/pessoa', autentUsuario, getUniPessoa);

router.get('/uni/idade', autentUsuario, getUniIdade);

module.exports = router;