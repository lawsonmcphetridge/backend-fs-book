const pool = require('../utils/pool');
class Book {

  id;
  title;
  released;
    
  constructor(book) {
    this.id = book.id;
    this.title = book.title;
    this.released = book.released;
  }

  static async getAllBooks() {
    const { rows } = await pool.query(`
    SELECT * FROM books
      `);
    return rows.map((row) => new Book(row));
  }
}

module.exports = { Book };
