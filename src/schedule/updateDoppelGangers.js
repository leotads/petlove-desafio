const schedule = require('node-schedule');

const api = require('../services/api');

module.exports = app => {
  schedule.scheduleJob('5 * * * * *', function() {
    getApiDoppelGangers()
  });
}

const getApiDoppelGangers = async () => {
  const response = await api.get('/character/');

  console.log(response.data)
}