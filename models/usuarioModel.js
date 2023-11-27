const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: [true, "Insira um nome"]
        },
        sobrenome: {
            type: String,
            require: [true, "Insira um sobrenome"]
        },
        email: {
            type: String,
            require: [true, "Insira um email"]
        },
        senha: {
            type: String,
            require: [true, "Insira uma senha"]
        },
        confirmasenha: {
            type: String,
            require: [true, "Confirme a senha"]
        }
    }
);

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;