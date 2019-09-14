'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(morgan('dev'));
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new AppController().express;