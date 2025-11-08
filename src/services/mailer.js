const nodemailer = require('nodemailer');
const AppError = require('../utils/appError');
const { EMAIL_CONFIG } = require('../config/env');

let transporter = nodemailer.createTransport({
  host: EMAIL_CONFIG.host,
  port: EMAIL_CONFIG.port,
  //secureConnection: EMAIL_CONFIG.EMAIL_SECURECONNECTION, // use SSL
  secure: EMAIL_CONFIG.port == 465, // true for 465, false for other ports (STARTTLS)
  requireTLS: true, // enforce TLS upgrade
  //secure: false, // use TLS
  //service: 'gmail',
  //debug: true,
  auth: EMAIL_CONFIG.auth,
  tls: {
    // do not fail on invalid certs
    ciphers: 'SSLv3', // helps with some Microsoft servers
    //rejectUnauthorized: false,
  },
});


/**
 * Send email
 * @param {Object} mailOptions - { from, to, subject, text, html }
 */
const sendMail = async (mailOptions) => {
  try {
    // Default from if not provided
    if (!mailOptions.from) {
      mailOptions.from = {
        name: EMAIL_CONFIG.from.name,
        address: EMAIL_CONFIG.from.address,
      };
    }

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (err) {
    // Wrap nodemailer error into AppError
    throw new AppError(err.message || 'Email sending failed', 500);
  }
};

module.exports = sendMail;