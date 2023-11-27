const mongoose = require('mongoose');

const departamentoSchema = mongoose.Schema(
    {
        idDepartamento: {
            type: String,
            require: [true, "Insira um id de Departamento"]
        },
        idUnidade: {
            type: String,
            require: [true, "Insira um id de Unidade"]
        },
        nome: {
            type: String,
            require: [true, "Insira um nome para o departamento"]
        },
        supervisor: {
            type: String,
            require: [true, "Insira um nome do supervisor"]
        }
    }
)

const Departamento = mongoose.model('Departamento', departamentoSchema);

module.exports = Departamento;