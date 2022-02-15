DROP TABLE IF EXISTS dishes CASCADE;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(225),
  cost INTEGER,
  duration INTEGER
  -- restaurant_id INTEGER REFERENCES restaurant(id) ON DELETE CASCADE
);

