'use strict';

const express = require('express');

const foodDb = require('../models/index.js');
const router = express.Router();

router.get('/food', getAll);
router.get('/food/:foodId', getOne);
router.post('/food', create);
router.put('/food/:foodId', update);
router.delete('/food/:foodId', remove);


async function getAll(req,res){
  const foodItems = await foodDb.food.findAll();
  console.log('food items from storage', foodItems);
  res.send('working progress');
}

async function getOne(req,res) {
  const foodId = req.params.foodId;
  const foodItem = await foodDb.food.findOne({
    where: {
      id: foodId,
    },
  });
  res.status(200).send(foodItem);
}

async function create(req,res){

  const foodObj = req.body;

  const foodData = await foodDb.food.create(foodObj);
  res.status(200).send(foodData);
}

async function update(req,res){
  const foodId = req.params.foodId;

  const foodObj = req.body;

  const foodData = await foodDb.food.findOne({where: {id: foodId}});
  await foodData.update(foodObj);
  res.status(200).send(foodData);
}
async function remove(req,res){
  const foodId = req.params.foodId;

  await foodDb.food.destroy({where: {id: foodId}});
  res.status(200).send(foodId);
}

module.exports = router;