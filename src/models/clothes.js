'use strict';

const clothesModel = (sequelize, Datatypes) => {
  return sequelize.define('Clothes', {
    name: {
      type: Datatypes.STRING,
      required: true,
    },

    size: {
      type: Datatypes.NUMBER,
      required: false,
    },

  });
};

module.exports = clothesModel;