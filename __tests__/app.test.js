const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');
const { Book } = require('../lib/models/bookModel');
const { request } = require('express');
const app = require('../lib/app');


describe('tests', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('/books will list out a page of all books', async () => {
    const res = await request(app).get('/books');
    const books = await Book.getAllBooks();
    expect(res.body).toEqual(books);
  });



  afterAll(() => {
    pool.end();
  });
});
