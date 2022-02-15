const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT
      dishes.title, dishes.cost, dishes.duration,
      customers.name, customers.phone_number,
      restaurants.name, restaurants.phone_number
    FROM dishes_ordered
    JOIN dishes_cart ON dishes_cart_id = dishes_cart.dish_id
    JOIN dishes ON dishes_cart.dish_id = dishes.id
    JOIN customers ON customer_id = customers.id
    JOIN restaurants ON restaurant_id = restaurants.id;
    `;

    db.query(query)
    .then(data => {
      const orderedDishes = data.rows;
      console.log("[from routes/orders.js] data:", orderedDishes);
      res.render('../views/orders', { orderedDishes })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });


router.post("/", (req, res) => {

  console.log(req.body);

  let query = `SELECT NOW()`
  // INSERT INTO orders (dish_id, customer_id, restaurant_id)
  // VALUES (${getINfo} );;
    // SELECT dishes.id, customers.id, restaurant.id
    // FROM cart_items
    // JOIN dishes ON dishes.id = cart_items.dish_id
    // JOIN customers ON customers.id = cart_items.customer_id
    // JOIN restaurant ON dishes.restaurant_id = restaurant.id
    // WHERE cart_items.placed = TRUE;


  db.query(query)
  .then(data => {
    // console.log('post query');
    const orderedDishes = data.rows;
     // res.json({ dishes });
    console.log('[from routes/orders.js] data:', orderedDishes);
    res.send('order is placed!')
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ error: err.message });
    });
  });
  return router;
};



