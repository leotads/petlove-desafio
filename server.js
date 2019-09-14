'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.development'
});

const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`Backend rodando em: http://localhost:${PORT}`)
})
