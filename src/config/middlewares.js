'use strict'

const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');

const swaggerDocument = require('../../swagger.json');

module.exports = app => {

  var options = {
    swaggerOptions: {
      url: 'http://petstore.swagger.io/v2/swagger.json'
    }
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  app.use(morgan('dev'));
}