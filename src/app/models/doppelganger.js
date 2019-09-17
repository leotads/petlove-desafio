'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoppelGanger = sequelize.define('DoppelGanger', {
    character: DataTypes.STRING,
    image: DataTypes.STRING,
    dimensionCount: DataTypes.INTEGER
  }, {});
  DoppelGanger.associate = function(models) {
    // associations can be defined here
  };
  return DoppelGanger;
};