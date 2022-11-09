const pool = require('../utils/pool');
class Book {

  id;
  title;
  released;
  authors;
    
  constructor(book) {
    this.id = book.id;
    this.title = book.title;
    this.released = book.released;
    this.authors = book.authors;
  }

  static async getAllBooks() {
    const { rows } = await pool.query(`
    SELECT * FROM books
      `);
    return rows.map((row) => new Book(row));
  }
    
  static async getSingleBook(id) {
    const { rows } = await pool.query(`
    SELECT books.*,
    COALESCE(
      json_agg(to_jsonb(authors))
FILTER (WHERE authors.id IS NOT NULL), '[]')
    as authors from books
    left join book_author on books.id = book_author.book_id
    left join authors on book_author.author_id = authors.id
    WHERE books.id = $1 
    group by books.id
      `, [id]);
    console.log(rows);
    return new Book(rows[0]);
  }

}

module.exports = { Book };
