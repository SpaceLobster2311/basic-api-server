'use strict';


//this is how to create sequelize models

const foodModel = (sequelize, Datatypes) => {
  return sequelize.define('Food', {
    name: {
      type: Datatypes.STRING,
      required: true,
    },

    calories: {
      type: Datatypes.NUMBER,
      required: false,
    },

  });
};

module.exports = foodModel;