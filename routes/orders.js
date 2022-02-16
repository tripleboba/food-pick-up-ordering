const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

    let query = `SELECT dishes.title, dishes.cost, dishes.duration,
     users.name, users.phone
     FROM cart_items
     JOIN dishes ON dish_id = dishes.id
     JOIN users ON user_id = users.id`;

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

  let select = `SELECT user_id, dish_id
  FROM cart_items
  WHERE user_id = 1`;

  db.query(select).then(data => {
    const dishes = data.rows;
    //console.log("select on orders", cartItems);
    // res.redirect('/api/orders')
    for (let item of dishes) {
    let insert = `INSERT INTO orders (user_id, dish_id)
    VALUES (${item.user_id}, ${item.dish_id})`
      db.query(insert)
    //   .then(data => {
    //     //console.log('inserted order record', data);
    //   })
    }
    // let clearCart = `DELETE FROM cart_items
    // WHERE user_id = 1`;
    // db.query(clearCart)
    // .then(data => {
    //  // console.log('items deleted', data)
    // })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
        console.log(err);
    });
   
  });

  //console.log('select', select);
  //let query = `INSERT INTO orders VALUES (${select})`
  // let query = `UPDATE cart_items
  // SET placed = TRUE`;

  //`SELECT NOW()`
  // INSERT INTO orders (dish_id, customer_id, restaurant_id)
  // VALUES (${getINfo} );;
    // SELECT dishes.id, users.id, restaurant.id
    // FROM cart_items
    // JOIN dishes ON dishes.id = cart_items.dish_id
    // JOIN users ON users.id = cart_items.user_id
    // JOIN restaurant ON dishes.restaurant_id = restaurant.id
    // WHERE cart_items.placed = TRUE;

  // db.query(query)
  // .then(data => {
  //   console.log('post query');
  //   //const dishes = data.rows;
  //    // res.json({ dishes });
  //   //console.log('this one', dishes);
  //   res.send('place an order!')
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //       console.log(error);
  //   });
  //});
  return router;
};



