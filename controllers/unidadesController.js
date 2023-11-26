const Unidade = require('../models/unidadeModel');

const getUnidades = async (req, res) => {
    try {
        const {pagina = 1, limite = 5} = req.query;
        const totalRegistro = Unidade.countDocuments({});
        
        const unidade = await Unidade.find({}).skip((pagina-1) * limite).limit(limite);
        offset: Number((pagina*limite)-limite);
        limit: totalRegistro;
        res.status(200).json(unidade);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const setUnidadesById = async (req, res) => {
    try {
        const { id } = req.params;
        const unidade = await Unidade.findById(id);
        res.status(200).json(unidade);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

const postUnidades = async (req, res) => {
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
}

const putUnidades = async(req, res) => {
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
}

const deleteUnidades = async(req, res) => {
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
}

module.exports = {
    getUnidades,
    setUnidadesById,
    postUnidades,
    putUnidades,
    deleteUnidades
}