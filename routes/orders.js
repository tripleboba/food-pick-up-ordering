const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // get customer name first to see
    let query = `
    SELECT customers.name FROM dishes_ordered
    JOIN customers ON customer_id = customers.id;
    `;

    // SELECT
    //   dishes.title, dishes.cost, dishes.duration,
    //   customers.name, customers.phone_number,
    //   restaurants.name, restaurants.phone_number
    // FROM dishes_ordered
    // JOIN dishes_cart ON dishes_cart_id = dishes_cart.dish_id
    // JOIN dishes ON dishes_cart.dish_id = dishes.id
    // JOIN customers ON customer_id = customers.id
    // JOIN restaurants ON restaurant_id = restaurants.id;

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

// handle place order button in /api/cart
router.post("/", (req, res) => {

  // let query =
  // `INSERT INTO dishes_ordered (dishes_cart_id) SELECT dishes_cart.id FROM dishes_cart`
  // `SELECT NOW()`;

  db.query(`INSERT INTO dishes_ordered (dishes_cart_id) SELECT dishes_cart.id FROM dishes_cart`)
  .then(data => {
    const orderedDishes = data.rows;
     // res.json({ dishes });
    console.log('[from POST routes/orders.js] data:', orderedDishes);
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



