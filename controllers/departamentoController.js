const Departamento = require('../models/departamentoModel');

//busca todos departamentos
const getDepartamentos = async (req, res) => {
    try {
        const {pagina = 1, limite = 5} = req.query;
        const totalRegistro = Departamento.countDocuments({});
        
        const departamento = await Departamento.find({}).skip((pagina-1) * limite).limit(limite);
        offset: Number((pagina*limite)-limite);
        limit: totalRegistro;
        res.status(200).json(departamento);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//busca departamentos por id
const getDepartamentosById = async (req, res) => {
    try {
        const { id } = req.params;
        const departamento = await Departamento.findById(id);
        res.status(200).json(departamento);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//insere departamento
const postDepartamentos = async (req, res) => {
    try {
        const { idDepartamento, idUnidade, nome, supervisor} = req.body;

        if (!idDepartamento) {
            return res.status(422).json({ error: '`idDepartamento é obrigatório!`' });
        }
        if (!idUnidade) {
            return res.status(422).json({ error: '`idUnidade é obrigatório!`' });
        }
        if (!nome) {
            return res.status(422).json({ error: '`nome é obrigatório!`' });
        }
        if (!supervisor) {
            return res.status(422).json({ error: '`supervisor é obrigatório!`' });
        }

        const departamento = {
            idDepartamento,
            idUnidade,
            nome,
            supervisor
        }

        await Departamento.create(departamento);
        res.status(200).json(`Departamento inserido com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//atualiza departamento
const putDepartamentos = async(req, res) => {
    try {
        const { id } = req.params;
        const departamento = await Departamento.findByIdAndUpdate(id, req.body);
        if (!departamento) {
            return res.status(404).json({ message: `não posso encontrar Departamento com este ID: ${id}` });
        }
        res.status(200).json({ message: `Departamento: ${id}, modificado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}


//deleta departamento
const deleteDepartamentos = async(req, res) => {
    try {
        const { id } = req.params
        const departamento = await Departamento.findByIdAndDelete(id);
        if (!departamento) {
            return res.status(404).json({ message: `não posso encontrar Departamento com este ID: ${id}` });
        }
        res.status(200).json({ message: `Departamento: ${id}, deletado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

module.exports = {
    getDepartamentos,
    getDepartamentosById,
    postDepartamentos,
    putDepartamentos,
    deleteDepartamentos
}