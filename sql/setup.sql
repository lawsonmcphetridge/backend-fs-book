-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;

DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released BIGINT
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob BIGINT,
    pob VARCHAR
);
CREATE TABLE book_author (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);


INSERT INTO
    books (title, released)
VALUES   
        ('Ready Player One', 2011),
        ('Harry Potter', 1997),
        ('Lord of the rings', 1954),
        ('Moby Dick', 1851);
INSERT INTO
    authors (name, dob, pob)
VALUES
        ('Ernest Cline', 1972, 'Ashland, OH'),
        ('J. K. Rowling', 1965, 'Yate, United Kingdom'),
        ('J. R. R. Tolkien', 1892, 'Bloemfontein, South Africa'),
        ('Herman Melville', 1819, 'New York, NY');

INSERT INTO
    book_author (author_id, book_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4);




    

