const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./adapters/api/routes/ong.js', './adapters/api/routes/veterinario.js', './adapters/api/routes/gatos.js'];

swaggerAutogen(outputFile, endpointsFiles);
