
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    
    let query = `SELECT dishes.title, dishes.cost, dishes.duration, users.name
    FROM cart_items 
    JOIN dishes ON dishes.id = cart_items.dish_id
    JOIN users ON users.id = cart_items.user_id
    WHERE cart_items.placed = TRUE`;
   
    db.query(query)
    .then(data => {
      const order = data.rows;
      console.log("order", order);
      res.render('../views/orders', { order })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
/////test
//   router.post("/", (req, res) => {
    
//     let query = `UPDATE cart_items
//     SET placed = TRUE`;
   
//     db.query(query)
//     .then(data => {
//       console.log('post query');
//       const dishes = data.rows;
//       console.log(dishes);
//       // res.json({ dishes });
//       res.render('../views/orders', { dishes })
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;

router.post("/", (req, res) => {
    
  let query = `UPDATE cart_items
  SET placed = TRUE`;
 
  db.query(query)
  .then(data => {
    console.log('post query');
    const dishes = data.rows;
    console.log(dishes);
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





