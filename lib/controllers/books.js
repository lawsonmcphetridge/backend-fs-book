const { Router } = require('express');
const { Book } = require('../models/bookModel');
module.exports = Router()
    
  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);

  })
  
;
