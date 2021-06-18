// this file will connect to the postgres DB

'use strict';
require('dotenv').config();
//heroku will use this automatically
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

// sequelize alllows us to create data models
// Datatypes represent the types of data we can create in sql
const { Sequelize, DataTypes} = require('sequelize');
const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');

// similar to express();
let sequelize = new Sequelize(DATABASE_URL);

// modify the sequelize obj using a model
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: food,
  clothes: clothes,
};


