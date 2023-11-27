const mongoose = require('mongoose');

const unidadeSchema = mongoose.Schema(
    {
        idUnidade: {
            type: String,
            require: [true, "Insira um id de Unidade"]
        },
        razaoSocial: {
            type: String,
            require: [true, "Insira uma razaoSocial"]
        },
        cidade: {
            type: String,
            require: [true, "Insira uma cidade"]
        },
        estado: {
            type: String,
            require: [true, "Insira um estado"]
        }
    }
)

const Unidade = mongoose.model('Unidade', unidadeSchema);

module.exports = Unidade;