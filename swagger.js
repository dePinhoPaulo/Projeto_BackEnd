const swaggerAutogen = require('swagger-autogen')()

output = 'swagger_doc.json'
endpoint = ['./index.js']

swaggerAutogen(output, endpoint);
