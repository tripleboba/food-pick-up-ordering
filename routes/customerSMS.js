
const express = require("express");
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports = (db) => {
  router.post("/", (req, res) => {
    let query = `
    SELECT SUM(dishes.duration), users.name, users.phone
    FROM cart_items
    JOIN dishes ON dish_id = dishes.id
    JOIN users ON user_id = users.id
    GROUP BY users.name, users.phone`;

   db.query(query)
      .then((data) => {
        console.log("customer sms send");
        client.messages.create({
          body: `Hi ${data.rows[0].name}. Your order has been received! Your order will be ready in ${data.rows[0].sum} minutes!`,
          from: "+19377125923",
          to: `+1${data.rows[0].phone}`,
        })
        setTimeout(function() {
          client.messages.create({
            body: 'Your order is completed! You can pick it up now!',
            from: "+19377125923",
            to: `+1${data.rows[0].phone}`,
          })
        }, 20 * 1000) // set fixed 30 seconds

        setTimeout(function() {
          let clearCart = `DELETE FROM cart_items
          WHERE user_id = 1`;
          db.query(clearCart)
            .then(data => {
              console.log('items deleted', data)
            })
        }, 5 * 1000)

      }) // db query
  }); // router.post
  return router;
}; // most out
