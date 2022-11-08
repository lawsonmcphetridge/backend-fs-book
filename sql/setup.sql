-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released DATE
);

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR,
  dob DATE,
  pob VARCHAR
);

INSERT INTO books (
    title,
    released
)

VALUES (
    ('Ready Player One', 2011-08-16),
    ('Harry Potter', 1997-06-26),
    ('Lord of the rings', 1954-07-29),
    ('Moby Dick', 1851-10-18),
)
INSERT INTO authors (
    name,
    dob,
    pob
)

VALUES (
    ('Ernest Cline', 1972-03-39, 'Ashland, OH'),
    ('J. K. Rowling', 1965-07-31, 'Yate, United Kingdom'),
    ('J. R. R. Tolkien', 1892-01-3, 'Bloemfontein, South Africa'),
    ('Herman Melville', 1819-08-1, 'New York, NY')
)
;