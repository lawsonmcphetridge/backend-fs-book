const pool = require('../utils/pool');

class Author {

  id;
  name;
  dob;
  pob;
  books;

  constructor(author) {
    this.id = author.id;
    this.name = author.name;
    this.dob = author.dob;
    this.pob = author.pob;
    this.books = author.books;
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
    left join book_author on authors.id = book_author.author_id
    left join books on book_author.book_id = books.id
    WHERE authors.id = $1 
    group by authors.id
      
      `, [id]);
    return new Author(rows[0]);
  }

    
}

module.exports = { Author };
