
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/orders", (req, res) => {

    let query = `SELECT dishes.title, dishes.cost, users.name
    FROM cart_items
    JOIN dishes ON dishes.id = cart_items.dish_id
    JOIN users ON users.id = cart_items.user_id`
    ;

    db.query(query)
    .then(data => {
      const dishes = data.rows;
      // res.json({ dishes });
      res.render('../views/orders', { dishes })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};




