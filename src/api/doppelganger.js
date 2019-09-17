'use strict';

module.exports = app => {
  const DoppelGangers = (req, res) => {
    res.json({ Dopper: 'Gangers' })
  }

  return { DoppelGangers }
}