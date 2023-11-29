require('dotenv').config();
const jwt = require('jsonwebtoken');

//Verificador de autenticação
function autentUsuario (req, res, next){

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token){
        return res.status(401).json({ message: `Acesso negado!` });
    }

    try {
        const secrete = process.env.SECRET;

        jwt.verify(token, secrete);
        next(); 

    } catch (error) {
        return res.status(400).json({ message: `Token invalido!` });
    }
}

module.exports = {
    autentUsuario
}