const mongoose = require('mongoose');

const unidadeSchema = mongoose.Schema(
    {
        id: {
            type: String,
            require: [true, "Insira um nome"]
        },
        razaoSocial: {
            type: String,
            require: [true, "Insira um sobrenome"]
        },
        cidade: {
            type: String,
            require: [true, "Insira um email"]
        },
        estado: {
            type: String,
            require: [true, "Insira um senha"]
        }
    }
)

const Usuario = mongoose.model('Unidade', unidadeSchema);

module.exports = Unidade;