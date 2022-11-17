"use strict";
require("dotenv").config();

const prompt = require("prompt-sync")();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_KEY);
const msg = {
  from: prompt("insert senders @mail address: "),
  to: prompt("insert receivers @mail address: "),
  subject: prompt("insert subject: "),
  text: prompt("insert text: "),
  //html: "<strong>hello world</strong>",
};
(async () => {
  try {
    await sgMail.send(msg).then(console.log("send mail success"));
  } catch (error) {
    console.error("Jotain meni vikaan :(", error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
})();
