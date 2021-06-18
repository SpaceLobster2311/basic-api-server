'use strict';

const express = require('express');
const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');
const app = express();

// this allows it to accept json data on the requests
app.use(express.json());
// need resource routes
app.use(foodRoutes);
app.use(clothesRoutes);



module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('App is up'));
  },
};