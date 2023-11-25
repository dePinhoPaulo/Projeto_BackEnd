const express = require('express');
const Usuario = require('../models/usuarioModel');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const usuario = [{
            nome: "ze", sobrenome: "silva", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "joao", sobrenome: "silva", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "joao", sobrenome: "silva", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "joao", sobrenome: "silva", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }, {
            nome: "joao", sobrenome: "silva", email: "@gmail.com", senha: "123", confirmasenha: "123"
        }]

        await Usuario.create(usuario);
        res.status(200).json(`Usuario inserido com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

module.exports = router;