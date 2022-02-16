// const accountSid = 'ACc8e62cae9da40b73f8e52d769cae54a7'; //process.env.TWILIO_ACCOUNT_SID;
// const authToken = '3b7b87dbb840bc785db27f3ae4fdea2e'; //process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+19377125923',
//      to: '+12505516606'
//    })
//   .then(message => console.log(message.sid));

const express = require("express");
const router = express.Router();

const accountSid = "ACc8e62cae9da40b73f8e52d769cae54a7"; //process.env.TWILIO_ACCOUNT_SID;
const authToken = "1459f178ffc2d5ce831bb61ba16885b4"; //process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports = (db) => {
  router.post("/", (req, res) => {
    let name = "";

    db.query(`SELECT dishes.duration, users.name, users.phone
    FROM cart_items
    JOIN dishes ON dish_id = dishes.id
    JOIN users ON user_id = users.id`)
    //(`SELECT name, phone FROM users`)
    .then((data) => {
      name = data.rows[0].name;
      console.log('data: ', data);

    console.log("message send");
    client.messages
      .create({
        body: `Hi ${name}. Your order has been received! Your order will be ready in ${data.rows[0].duration} minutes!`,
        from: "+19377125923",
        to: `+1${data.rows[0].phone}`,
      })
      .then((message) => console.log(message.sid))
    })
    let clearCart = `DELETE FROM cart_items
    WHERE user_id = 1`;
    db.query(clearCart)

      .catch((e) => {
        console.error("Got an error:", e.code, e.message);
      });
      res.redirect("/api/dishes");
  });
  return router;
};

//
