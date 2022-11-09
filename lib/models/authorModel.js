const pool = require('../utils/pool');

class Author {

  id;
  name;
  dob;
  pob;

  constructor(author) {
    this.id = author.id;
    this.name = author.name;
    this.dob = author.dob;
    this.pob = author.pob;
  }
    
  static async getAllAuthors() {
    const { rows } = await pool.query(`
    select * from authors
      `);
    return rows.map((row) => new Author(row));
  }

    
}

module.exports = { Author };
