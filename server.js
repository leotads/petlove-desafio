'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.development'
});

const app = require('express')();
const consign = require('consign');
const PORT = process.env.PORT || 3000;

consign()
  .then('./src/config/middlewares.js')
  .then('./src/config/database.js')
  .then('./src/schedule')
  .then('./src/api')
  .then('./src/routes.js')
  .into(app)

const server = app.listen(PORT, err => {
  err ? console.log(err) : console.log(`Backend rodando em: http://localhost:${PORT}`)
})

module.exports = server;