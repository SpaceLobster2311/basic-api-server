'use strict';


const server = require('../src/server.js');
const data = require('../src/models/index.js');
const supertest = require('supertest');

const request = supertest(server.app);


beforeAll(async () => {
  await data.db.sync();
});
afterAll(async () => {
  await data.db.drop();
});

describe('testing server', () => {

  test('testing 200 on  GET `/food`', async () => {

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });

  test('testing 200 on  GET `/food/:foodId`', async () => {

    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });


  test('testing 200 on  POST `/food`', async () => {

    const response = await request.post('/food').send({
      name: 'foodTest',
      calories: 5,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('foodTest');
  });

  test('testing 200 on  PUT`/food`', async () => {

    const response = await request.put('/food/1').send({name: 'new test'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('new test');
  });

  test('testing 200 on  DELETE `/food:foodId`', async () => {

    const response = await request.delete('/food/1');

    expect(response.status).toEqual(200);
  });



  test('testing 200 on  GET `/clothes`', async () => {

    const response = await request.get('/clothes');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  test('testing 200 on  GET `/clothes/:clothesId`', async () => {

    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });


  test('testing 200 on  POST `/clothes`', async () => {

    const response = await request.post('/clothes').send({
      name: 'clothes Test',
      size: 5,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('clothes Test');
  });

  test('testing 200 on  PUT`/clothes`', async () => {

    const response = await request.put('/clothes/1').send({name: 'clothes test'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('clothes test');
  });

  test('testing 200 on  DELETE `/clothes/:clothesId`', async () => {

    const response = await request.delete('/clothes/1');

    expect(response.status).toEqual(200);
  });

});