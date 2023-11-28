const Colaborador = require('../models/colaboradorModel');

const getDepSalario = async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$nomeDepartamento"}, Total_Salarios:{$sum:"$salario"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const getDepPessoa = async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$nomeDepartamento"}, Total_Pessoas:{$sum:1}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const getDepIdade = async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$nomeDepartamento"}, Media_Idade:{$avg:"$idade"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const getUniSalario = async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:"$idUnidade", Total_Salarios:{$sum:"$salario"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const getUniPessoa = async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade"}, Total_Pessoas:{$sum:1}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const getUniIdade = async (req, res) => {
    try {
        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade"}, Media_Idade:{$avg:"$idade"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

module.exports = {
    getDepSalario,
    getDepPessoa,
    getDepIdade,
    getUniSalario,
    getUniPessoa,
    getUniIdade
}