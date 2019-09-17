'use strict';

module.exports = app => {
  app.get('/', (req, res) => { res.json({ hello: 'World'}) });

  app.route('/rankingdoppelgangers')
    .get(app.src.api.doppelganger.DoppelGangers)
}