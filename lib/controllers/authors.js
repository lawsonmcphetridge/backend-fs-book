const { Router } = require('express');
const { Author } = require('../models/authorModel');
module.exports = Router()

    
    
  .get('/', async (req, res) => {
    const feedback = await Author.getAllAuthors();
    res.json(feedback);
  })
    
    
    
    
;
    
