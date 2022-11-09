const { Router } = require('express');
const { Author } = require('../models/authorModel');
module.exports = Router()

    
  .get('/:id', async (req, res) => {
    const callback = await Author.getSingleBook(req.params.id);
    res.json(callback);
  })
    
  .get('/', async (req, res) => {
    const feedback = await Author.getAllAuthors();
    res.json(feedback);
  })
    
    
    
;
    
