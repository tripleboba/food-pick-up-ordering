DROP TABLE IF EXISTS dishes_ordered CASCADE;

CREATE TABLE dishes_ordered ( -- was orders
  id SERIAL PRIMARY KEY NOT NULL,
  dishes_cart_id INTEGER REFERENCES dishes_cart(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE
  -- start_time TIMESTAMP,
  -- end_time TIMESTAMP,
);
