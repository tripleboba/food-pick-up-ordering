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
    // console.log(req);
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
  console.log('[from routes/dishes.js] req.body.id:', req.body.id);
  db.query(`INSERT INTO dishes_cart (dish_id) VALUES (${parseInt(req.body.id)})`)
  .then(data => {
    console.log('[from routes/dishes.js] data:', data);
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




