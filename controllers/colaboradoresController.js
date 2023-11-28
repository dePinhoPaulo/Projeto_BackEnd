const Colaborador = require('../models/colaboradorModel');

const getColaboradores = async (req, res) => {
    try {
        const {pagina = 1, limite = 5} = req.query;
        const totalRegistro = Colaborador.countDocuments({});
        
        const colaborador = await Colaborador.find({}).skip((pagina-1) * limite).limit(limite);
        offset: Number((pagina*limite)-limite);
        limit: totalRegistro;
        res.status(200).json(colaborador);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const getColaboradoresById = async (req, res) => {
    try {
        const { id } = req.params;
        const colaborador = await Colaborador.findById(id);
        res.status(200).json(colaborador);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const postColaboradores = async (req, res) => {
    try {
        const { idColaborador, idDepartamento, idUnidade, nomeDepartamento, nome, idade, cargo, salario} = req.body;

        if (!idColaborador) {
            return res.status(422).json({ error: '`idColaborador é obrigatório!`' });
        }
        if (!idDepartamento) {
            return res.status(422).json({ error: '`idDepartamento é obrigatório!`' });
        }
        if (!idUnidade) {
            return res.status(422).json({ error: '`idUnidade é obrigatório!`' });
        }
        if (!nomeDepartamento) {
            return res.status(422).json({ error: '`nomeDepartamento é obrigatório!`' });
        }
        if (!nome) {
            return res.status(422).json({ error: '`nome é obrigatório!`' });
        }
        if (!idade) {
            return res.status(422).json({ error: '`idade é obrigatório!`' });
        }
        if (!cargo) {
            return res.status(422).json({ error: '`cargo é obrigatório!`' });
        }
        if (!salario) {
            return res.status(422).json({ error: '`salario é obrigatório!`' });
        }

        const colaborador = {
            idColaborador,
            idDepartamento,
            idUnidade,
            nomeDepartamento,
            nome,
            idade,
            cargo,
            salario
        }

        await Colaborador.create(colaborador);
        res.status(200).json(`Colaborador inserido com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const putColaboradores = async(req, res) => {
    try {
        const { id } = req.params;
        const colaborador = await Colaborador.findByIdAndUpdate(id, req.body);
        if (!colaborador) {
            return res.status(404).json({ message: `não posso encontrar Colaborador com este ID: ${id}` });
        }
        res.status(200).json({ message: `Colaborador: ${id}, modificado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const deleteColaboradores = async(req, res) => {
    try {
        const { id } = req.params
        const colaborador = await Colaborador.findByIdAndDelete(id);
        if (!colaborador) {
            return res.status(404).json({ message: `não posso encontrar Colaborador com este ID: ${id}` });
        }
        res.status(200).json({ message: `Colaborador: ${id}, deletado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

module.exports = {
    getColaboradores,
    getColaboradoresById,
    postColaboradores,
    putColaboradores,
    deleteColaboradores
}