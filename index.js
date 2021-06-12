const express = require('express');
const consign = require('consign');
const swaggerUi = require('swagger-ui-express');
const sequelize = require('./config/connection');
const swaggerDocument = require('./swagger_output.json');
const morgan = require('morgan');
const opn = require('opn');

const app = express();
 
opn ('http://localhost:3000/api-docs');

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true,
    }));
    app.use(`/${process.env.SWAGGER}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(morgan('combined'));
    
    consign()
      .include('adapters/api/routes')
      .into(app);

    
    app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}/${process.env.SWAGGER}`));

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
module.exports = app;

