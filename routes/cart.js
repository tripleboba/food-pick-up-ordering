
const express = require('express');
const router  = express.Router();


// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     let query = `SELECT * FROM orders
//     WHERE order_placed = FALSE`;
//     console.log(query);
//     db.query(query)
//     .then(data => {
//       const orders = data.rows;
//       // res.json({ orders });
//       res.render('../views/cart', { orders })
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };

module.exports = (db) => {
  router.get("/", (req, res) => {


    let query = `SELECT dishes.title, dishes.cost, users.name
    FROM cart_items
    JOIN dishes ON dishes.id = cart_items.dish_id
    JOIN users ON users.id = cart_items.user_id`;

    db.query(query)
    .then(data => {
      const dishes = data.rows;
      // res.json({ dishes });
      res.render('../views/cart', { dishes })
      //console.log()
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
          console.log(err);
      });
  });
  return router;
};







