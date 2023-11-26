const express = require('express');
const Usuario = require('../models/usuarioModel');
const Unidade = require('../models/unidadeModel');

const router = express.Router();


//fazer no madelo mvc: jogar para o controller e chamar na rota => router.get('/', installUsuari, installUnidade)
router.post('/', async (req, res) => {
    try {
        const usuario = [{
            nome: "ze", sobrenome: "silva", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "joao", sobrenome: "silveira", email: "@hotmail.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "zezo", sobrenome: "machado", email: "@outlook.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "paulo", sobrenome: "pinho", email: "@yahoo.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "pedro", sobrenome: "ribeirp", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }]

        const unidade = [{
            idUnidade: "1", razaoSocial: "silva", cidade: "londrina", estado: "Parana"
        }, {
            idUnidade: "2", razaoSocial: "silva", cidade: "londrina", estado: "Parana"
        }, {
            idUnidade: "3", razaoSocial: "pinho", cidade: "londrina", estado: "Parana"
        }, {
            idUnidade: "4", razaoSocial: "machado", cidade: "curitba", estado: "Parana"
        }, {
            idUnidade: "5", razaoSocial: "oliveira", cidade: "paranagua", estado: "Parana"
        }, {
            idUnidade: "6", razaoSocial: "pinheiro", cidade: "curitba", estado: "Parana"
        }]

        await Usuario.create(usuario);
        await Unidade.create(unidade);
        res.status(200).json(`Dados inseridos com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

module.exports = router;