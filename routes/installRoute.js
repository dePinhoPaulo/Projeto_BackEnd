const express = require('express');
const { postInstall } = require('../controllers/installController');

const router = express.Router();

router.post('/', postInstall);

module.exports = router;