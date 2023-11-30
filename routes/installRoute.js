const express = require('express');
const { postInstall } = require('../controllers/installController');

const router = express.Router();

//rota de instalação dos dados
router.post('/', postInstall);

module.exports = router;