const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemaoilerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "mykola.zaikovskyi@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemaoilerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "mykola.zaikovskyi@meta.ua" };
  console.log(email);
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmail;

// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "mykola.zaikovskyi@gmail.com" };
//   console.log(email);
//   await sgMail.send(email);

//   return true;
// };

// module.exports = sendEmail;
