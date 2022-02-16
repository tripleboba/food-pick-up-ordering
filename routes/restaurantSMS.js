const express = require("express");
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports = (db) => {
  router.post("/", (req, res) => {
    let query = `SELECT dishes.title, users.name, restaurant.phone, dishes.duration
    FROM cart_items
    JOIN dishes ON dish_id = dishes.id
    JOIN users ON user_id = users.id
    JOIN restaurant on restaurant.id = dishes.restaurant_id`;

    db.query(query)
      .then((data) => {
        console.log("restaurant data: ", data);
        const itemsArr = [];
        let duration = 0;
        const items = data.rows;
        for (let item of items) {
          itemsArr.push(item.title);
          duration += item.duration;
        }
       // console.log('dur', duration);
        const itemString = itemsArr.join(", ");
        console.log("Placed order items: ", itemString);
        console.log("restaurant sms send");
        client.messages.create({
            body: `An order of ${itemString} has been made by ${data.rows[0].name}. Expected to be ready in ${duration} minutes!`,
            from: "+19377125923",
            // to: `+1${data.rows[0].phone}`,
            to: "+16047047055"
          })
      })
      .catch((e) => {
        console.error("Error in restaurant sms:", e.code, e.message);
      });
    res.redirect("/api/dishes");
  });
  return router;
};
