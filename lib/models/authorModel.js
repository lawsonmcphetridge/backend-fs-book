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
    


  static async getSingleBook(id) {
    const { rows } = await pool.query(`
 SELECT authors.*,
        COALESCE(
      json_agg(to_jsonb(books))
FILTER (WHERE books.id IS NOT NULL), '[]')
      as books from authors
      left join book_author on books.id = book_author.book_id
    left join authors on book_author.author_id = authors.id
    WHERE authors.id = $1 
      group by authors.id
      
      `, [id]);
    return new Author(rows[0]);
  }

    
}

module.exports = { Author };
