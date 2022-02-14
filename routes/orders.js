const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT 
      dishes.title, dishes.cost, dishes.duration,
      users.name, users.phone,
      restaurant.name, restaurant.phone
    FROM orders
    JOIN dishes ON dish_id = dishes.id
    JOIN users ON user_id = users.id
    JOIN restaurant ON dishes.restaurant_id = restaurant.id;
    `;
   
    db.query(query)
    .then(data => {
      const dishes = data.rows;
      console.log("orders", dishes);
      res.render('../views/orders', { dishes })
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
    // SELECT dishes.id, users.id, restaurant.id
    // FROM cart_items 
    // JOIN dishes ON dishes.id = cart_items.dish_id
    // JOIN users ON users.id = cart_items.user_id
    // JOIN restaurant ON dishes.restaurant_id = restaurant.id
    // WHERE cart_items.placed = TRUE;
  
 
  db.query(query)
  .then(data => {
    console.log('post query');
    const dishes = data.rows;
     // res.json({ dishes });
    console.log('this one', dishes);
    res.send('place an order!')
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



