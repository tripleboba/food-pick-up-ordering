const accountSid = 'ACc8e62cae9da40b73f8e52d769cae54a7'; //process.env.TWILIO_ACCOUNT_SID;
const authToken = '3b7b87dbb840bc785db27f3ae4fdea2e'; //process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19377125923',
     to: '+12505516606'
   })
  .then(message => console.log(message.sid));
