'use strict';

const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.json({ hello: 'World' })
});

module.exports = routes;