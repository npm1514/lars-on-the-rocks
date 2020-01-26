"use strict";

$http({
  "method": "POST",
  "url": "https://mandrillapp.com/api/1.0/messages/send.json",
  "data": {
    "key": "m9WhwvP-pCZrAOmfEmMceg",
    "message": {
      "from_email": "npm1514@gmail.com",
      "to": [{
        "email": "npm1514@gmail.com",
        "name": "Lars On The Rocks",
        "type": "to"
      }],
      "autotext": true,
      "subject": "Customer Inquiry - " + "name" + " @ " + "email",
      "text": "message"
    }
  }
}).then(function (res) {
  return "Your email has been received. I will get back to you within the next 48 hours.";
}, function (res) {
  return "Whoops! Something went wrong. Please contact me via email or give me a call.";
});