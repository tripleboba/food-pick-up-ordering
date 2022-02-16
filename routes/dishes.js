/*
 * All routes for Dishes are defined here
 * Since this file is loaded in server.js into api/dishes,
 *   these routes are mounted onto /dishes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM dishes;`)
    .then(data => {
      const dishes = data.rows;
      // console.log('here', dishes);
      res.render('dishes', { dishes });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
 });


 router.post("/", (req, res) => {
  //console.log('[from routes/dishes] req.body:', req.body);
  db.query(`INSERT INTO cart_items (user_id, dish_id)
  VALUES (1, ${parseInt(req.body.id)})`)
  .then(data => {
   // console.log('[from routes/dishes] data:', data);
    const dishes = data.rows;
    res.render('orders', { dishes });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});
 return router;
};




