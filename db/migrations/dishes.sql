DROP TABLE IF EXISTS dishes CASCADE;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(225),
  cost INTEGER,
  duration INTEGER,
  description TEXT
);

