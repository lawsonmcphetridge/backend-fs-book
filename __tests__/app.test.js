const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');

const { Book } = require('../lib/models/bookModel');
const app = require('../lib/app');
const { Author } = require('../lib/models/authorModel');


describe('tests', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('/books will list out a page of all books', async () => {
    const res = await request(app).get('/books');
    const books = await Book.getAllBooks();
    expect(res.body).toEqual(books);
  });





  it('/books1 will list out a page of all books', async () => {
    const res = await request(app).get('/books/1');
    const exp = await Book.getSingleBook('1');
    expect(res.body).toEqual(exp);
  });



  it('/authors will list a page of authors', async () => {
    const res = await request(app).get('/authors');
    const expected = await Author.getAllAuthors();
    expected(res.body).toEqual(expected);
  });


  

  afterAll(() => {
    pool.end();
  });
});
