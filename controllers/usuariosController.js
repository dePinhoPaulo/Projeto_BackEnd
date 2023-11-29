require('dotenv').config();
const Usuario = require('../models/usuarioModel');
const { autentUsuario } = require('../controllers/autenticacaoController');
const jwt = require('jsonwebtoken');

//Buscando todos usuarios
const getUsuarios = async (req, res) => {
    try {
        const {pagina = 1, limite = 5} = req.query;
        const totalRegistro = Usuario.countDocuments({});

        const usuarios = await Usuario.find({}).skip((pagina-1) * limite).limit(limite);
        offset: Number((pagina*limite)-limite);
        limit: totalRegistro;
        res.status(200).json(usuarios);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//Buscando usuarios por Id
const getUsuariosById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//Iserindo usuarios
const postUsuarios = async (req, res) => {
    try {
        const { nome, sobrenome, email, senha, confirmasenha } = req.body;

        if (!nome) {
            return res.status(422).json({ error: '`Nome é obrigatório!`' });
        }
        if (!email) {
            return res.status(422).json({ error: '`Sobrenome é obrigatório!`' });
        }
        if (!senha) {
            return res.status(422).json({ error: '`senha é obrigatório!`' });
        }
        if (senha !== confirmasenha) {
            return res.status(422).json({ error: '`senhna não é igual!`' });
        }

        const usuario = {
            nome,
            sobrenome,
            email,
            senha,
            confirmasenha
        }

        const emailExiste = await Usuario.findOne({ email: email});
        if (emailExiste){
            return res.status(422).json({ error: '`Utilize outro Email!`' });
        }

        await Usuario.create(usuario);
        res.status(200).json(`Usuario inserido com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//Atualizando usuarios
const putUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);
        if (!usuario) {
            return res.status(404).json({ message: `não posso encontrar usuario com este ID: ${id}` });
        }
        res.status(200).json({ message: `Usuario: ${id}, modificado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//Deletando usuarios
const deleteUsuarios = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await Usuario.findByIdAndDelete(id);
        if (!usuario) {
            return res.status(404).json({ message: `não posso encontrar usuario com este ID: ${id}` });
        }
        res.status(200).json({ message: `Usuario: ${id}, deletado com sucesso!` });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

//Logando no sistema
const postLogin = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email) {
            return res.status(422).json({ error: '`email é obrigatório!`' });
        }
        if (!senha) {
            return res.status(422).json({ error: '`senha é obrigatório!`' });
        }

        const usuario = await Usuario.findOne({email, senha});
        if (!usuario){
            return res.status(422).json({ error: '`Email ou senha Invalido!`' });
        }

        const secrete = process.env.SECRET;
        const token = jwt.sign({
            id: usuario._id}, secrete, {expiresIn: 300
        });

        res.status(200).json({ message: `Usuario Logado no sistema!`, token });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

module.exports = {
    getUsuarios,
    getUsuariosById,
    postUsuarios,
    putUsuarios,
    deleteUsuarios,
    postLogin
}