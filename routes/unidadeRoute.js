const express = require('express');
const Unidade = require('../models/unidadeModel');

const router = express.Router();

//buscando
router.get('/', async (req, res) => {
    try {
        const unidade = await Unidade.find({})
        res.status(200).json(unidade);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

//Buscando unidades por Id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const unidade = await Unidade.findById(id);
        res.status(200).json(unidade);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

//inserindo unidade
router.post('/', async (req, res) => {
    try {
        const { idUnidade, razaoSocial, cidade, estado} = req.body;

        if (!idUnidade) {
            return res.status(422).json({ error: '`id é obrigatório!`' });
        }
        if (!razaoSocial) {
            return res.status(422).json({ error: '`razaoSocial é obrigatório!`' });
        }
        if (!cidade) {
            return res.status(422).json({ error: '`cidade é obrigatório!`' });
        }
        if (!estado) {
            return res.status(422).json({ error: '`estado é obrigatório!`' });
        }

        const unidade = {
            idUnidade,
            razaoSocial,
            cidade,
            estado
        }

        await Unidade.create(unidade);
        res.status(200).json(`Unidade inserido com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

//Atualizando usuarios
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const unidade = await Unidade.findByIdAndUpdate(id, req.body);
        if (!unidade) {
            return res.status(404).json({ message: `não posso encontrar Unidade com este ID: ${id}` });
        }
        res.status(200).json({ message: `Unidade: ${id}, modificado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

//Deletando unidades
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const unidade = await Unidade.findByIdAndDelete(id);
        if (!unidade) {
            return res.status(404).json({ message: `não posso encontrar Unidade com este ID: ${id}` });
        }
        res.status(200).json({ message: `Unidade: ${id}, deletado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

module.exports = router;