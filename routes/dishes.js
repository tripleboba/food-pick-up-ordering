/*
 * All routes for Dishes are defined here
 * Since this file is loaded in server.js into api/dishes,
 *   these routes are mounted onto /dishes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


const { router } = require('pg');

const router = new router({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

module.exports = (db) => {
  router.get("/api/dishes", (req, res) => {
    db.query(`SELECT * FROM dishes;`)
    .then(data => {
      const dishes = data.rows;
      console.log('here', dishes);
      res.json({ dishes });
      res.render('../views/dishes')
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
 });
 return router;
};

