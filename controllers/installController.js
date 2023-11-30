const Usuario = require('../models/usuarioModel');
const Unidade = require('../models/unidadeModel');
const Departamento = require('../models/departamentoModel');
const Colaborador = require('../models/colaboradorModel');

//insere dados no banco
const postInstall = async (req, res) => {
    try {
        const usuario = [{
            nome: "ze", sobrenome: "silva", email: "@admin.com", senha: "123", confirmasenha: "123", admin: true
        }, {
            nome: "joao", sobrenome: "silveira", email: "@hotmail.com", senha: "123", confirmasenha: "123", admin: false
        }, {
            nome: "zezo", sobrenome: "machado", email: "@outlook.com", senha: "123", confirmasenha: "123", admin: false
        }, {
            nome: "paulo", sobrenome: "pinho", email: "@yahoo.com", senha: "123", confirmasenha: "123", admin: false
        }, {
            nome: "pedro", sobrenome: "ribeirp", email: "@gmail.com", senha: "123", confirmasenha: "123", admin: false
        }]

        const unidade = [{
            idUnidade: "1", razaoSocial: "silva", cidade: "londrina", estado: "Parana"
        }, {
            idUnidade: "2", razaoSocial: "silveira", cidade: "londrina", estado: "Parana"
        }, {
            idUnidade: "3", razaoSocial: "pinho", cidade: "londrina", estado: "Parana"
        }, {
            idUnidade: "4", razaoSocial: "machado", cidade: "curitba", estado: "Parana"
        }, {
            idUnidade: "5", razaoSocial: "oliveira", cidade: "paranagua", estado: "Parana"
        }]

        const departamento = [{
            idDepartamento: "1", idUnidade: "1", nome: "Adm", supervisor: "Luiz"
        }, {
            idDepartamento: "2", idUnidade: "1", nome: "Ti", supervisor: "Paulo"
        }, {
            idDepartamento: "1", idUnidade: "2", nome: "Vendas", supervisor: "João"
        }, {
            idDepartamento: "2", idUnidade: "2", nome: "Ti", supervisor: "Maria"
        }, {
            idDepartamento: "1", idUnidade: "3", nome: "Vendas", supervisor: "Luiza"
        }]

        const colaborador = [{
            idColaborador: "1", idDepartamento: "1", idUnidade: "1", nomeDepartamento: "Adm", nome: "Leandro", idade: 22, cargo: "Auxiliar", salario: 1200
        }, {
            idColaborador: "2", idDepartamento: "1", idUnidade: "1", nomeDepartamento: "Adm", nome: "Leonardo", idade: 25, cargo: "Auxiliar", salario: 1800
        }, {
            idColaborador: "3", idDepartamento: "2", idUnidade: "1", nomeDepartamento: "Ti", nome: "Jorge", idade: 22, cargo: "Analista", salario: 2500
        }, {
            idColaborador: "4", idDepartamento: "1", idUnidade: "2", nomeDepartamento: "Vendas", nome: "Neto", idade: 28, cargo: "Consultor", salario: 3000
        }, {
            idColaborador: "5", idDepartamento: "1", idUnidade: "2", nomeDepartamento: "Vendas", nome: "Gabriel", idade: 22, cargo: "Consultor", salario: 2000
        }, {
            idColaborador: "6", idDepartamento: "2", idUnidade: "2", nomeDepartamento: "Ti", nome: "Marilia", idade: 30, cargo: "Analista", salario: 3000
        }]

        await Usuario.create(usuario);
        await Unidade.create(unidade);
        await Departamento.create(departamento);
        await Colaborador.create(colaborador);
        res.status(200).json(`Dados inseridos com sucesso!`);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}

module.exports = {
    postInstall
}