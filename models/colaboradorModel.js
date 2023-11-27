const mongoose = require('mongoose');

const colaboradorSchema = mongoose.Schema(
    {
        idColaborador: {
            type: String,
            require: [true, "Insira um Id de Colaborador"]
        },
        idDepartamento: {
            type: String,
            require: [true, "Insira um Id de Departamento"]
        },
        idUnidade: {
            type: String,
            require: [true, "Insira um Id de Unidade"]
        },
        nome: {
            type: String,
            require: [true, "Insira um nome para o colaborador"]
        },
        idade: {
            type: String,
            require: [true, "Insira um idade para o colaborador"]
        },
        cargo: {
            type: String,
            require: [true, "Insira um cargo para o colaborador"]
        },
        salario: {
            type: String,
            require: [true, "Insira um salario para o colaborador"]
        }
    }
)

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

module.exports = Colaborador;