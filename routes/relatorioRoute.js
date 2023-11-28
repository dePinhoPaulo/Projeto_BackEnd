const express = require('express');
const Colaborador = require('../models/colaboradorModel');

const router = express.Router();

router.get('/dep/salario', async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$idDepartamento"}, Total_Salarios:{$sum:"$salario"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

router.get('/dep/pessoa', async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$idDepartamento"}, Total_Pessoas:{$sum:1}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

router.get('/dep/idade', async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$idDepartamento"}, Media_Idade:{$avg:"$idade"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

router.get('/uni/salario', async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:"$idUnidade", Total_Salarios:{$sum:"$salario"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

router.get('/uni/pessoa', async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade"}, Total_Pessoas:{$sum:1}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

router.get('/uni/idade', async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade"}, Media_Idade:{$avg:"$idade"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
})

module.exports = router;