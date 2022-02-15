
const { CallTracker } = require('assert');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

    let query = `
    SELECT dishes.title, dishes.cost
    FROM dishes_cart
    JOIN dishes ON dish_id = dishes.id
    WHERE placed = FALSE
    `;

    db.query(query)
    .then(data => {
      const dishesInCart = data.rows;
      // res.json({ dishes });
      res.render('../views/cart', { dishesInCart })
      })
      .catch(err => {
        res
          .status(500)
          .json({ 'error from cart.js': err.message });
      });
  });
  return router;
};







