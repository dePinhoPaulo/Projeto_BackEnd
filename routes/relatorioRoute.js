const express = require('express');
const { getDepSalario, getDepPessoa, getDepIdade, getUniSalario, getUniPessoa, getUniIdade} = require('../controllers/relatorioController');
const { autentUsuario} = require('../controllers/autenticacaoController');

const router = express.Router();

//soma dos salarios por departamento
router.get('/dep/salario', autentUsuario, getDepSalario);

//contagem de pessoas por departamento
router.get('/dep/pessoa', autentUsuario, getDepPessoa);

//media de idade por departamento
router.get('/dep/idade', autentUsuario, getDepIdade);

//soma dos salarios por unidade
router.get('/uni/salario', autentUsuario, getUniSalario);

//contagem de pessoas por unidade
router.get('/uni/pessoa', autentUsuario, getUniPessoa);

//media de idade por unidade
router.get('/uni/idade', autentUsuario, getUniIdade);

module.exports = router;