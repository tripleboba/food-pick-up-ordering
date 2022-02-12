DROP TABLE IF EXISTS restaurant CASCADE;

CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  phone INT
  );
