const Colaborador = require('../models/colaboradorModel');

//soma dos salarios por departamento
const getDepSalario = async (req, res) => {
    try {
        if(!req.admin){
            return res.status(401).json({ message: "Voce não é Admin!" });
        }

        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$nomeDepartamento"}, Total_Salarios:{$sum:"$salario"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//contagem de pessoas por departamento
const getDepPessoa = async (req, res) => {
    try {
        if(!req.admin){
            return res.status(401).json({ message: "Voce não é Admin!" });
        }

        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$nomeDepartamento"}, Total_Pessoas:{$sum:1}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//media de idade por departamento
const getDepIdade = async (req, res) => {
    try {
        if(!req.admin){
            return res.status(401).json({ message: "Voce não é Admin!" });
        }

        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade", Departamento:"$nomeDepartamento"}, Media_Idade:{$avg:"$idade"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//soma dos salarios por unidade
const getUniSalario = async (req, res) => {
    try {
        if(!req.admin){
            return res.status(401).json({ message: "Voce não é Admin!" });
        }

        const relatorio = await Colaborador.aggregate([{$group : {_id:"$idUnidade", Total_Salarios:{$sum:"$salario"}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//contagem de pessoas por unidade
const getUniPessoa = async (req, res) => {
    try {
        if(!req.admin){
            return res.status(401).json({ message: "Voce não é Admin!" });
        }

        const relatorio = await Colaborador.aggregate([{$group : {_id:{Unidade:"$idUnidade"}, Total_Pessoas:{$sum:1}}}]);
        res.status(200).json(relatorio);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//media de idade por unidade
const getUniIdade = async (req, res) => {
    try {
        if(!req.admin){
            return res.status(401).json({ message: "Voce não é Admin!" });
        }

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