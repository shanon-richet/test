CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL
);

INSERT INTO users (email, password, first_name, last_name) 
VALUES
('shanon.richet@gmail.com', 'fnjk*?', 'Shanon', 'Richet');

