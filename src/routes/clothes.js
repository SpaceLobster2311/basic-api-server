'use strict';

const express = require('express');

const clothesDb = require('../models/index.js');
const router = express.Router();

router.get('/clothes', getAll);
router.get('/clothes/:clothesId', getOne);
router.post('/clothes', create);
router.put('/clothes/:clothesId', update);
router.delete('/clothes/:clothesId', remove);


async function getAll(req,res){
  const clothesItems = await clothesDb.clothes.findAll();
  console.log('clothes items from storage', clothesItems);
  res.status(200).send(clothesItems);
}

async function getOne(req,res) {
  const clothesId = req.params.clothesId;
  const ClothesItem = await clothesDb.clothes.findOne({
    where: {
      id: clothesId,
    },
  });
  res.status(200).send(ClothesItem);
}

async function create(req,res){

  const clothesObj = req.body;
  
  const clothesData = await clothesDb.clothes.create(clothesObj);
  res.send(200).send(clothesData);
}

async function update(req,res){
  const clothesId = req.params.clothesId;

  const clothesObj = req.body;

  const clothesData = await clothesDb.clothes.findOne({where: {id: clothesId}});
  await clothesData.update(clothesObj);
  res.status(200).send(clothesData);
}

async function remove(req,res){
  const clothesId = req.params.clothesId;
  await clothesDb.clothes.destroy({where: {id: clothesId}});
  res.status(200).send(clothesId);
}

module.exports = router;