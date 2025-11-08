const axios = require("axios");

const BASE_URL = "https://sapteleservices.com/SMS_API"; // change to .in if needed

// For username/password authentication
const USERNAME = "";
const PASSWORD = "";
const SENDER = "";

// OR use API key if preferred
const API_KEY = ""; // optional, leave empty if not using

/**
 * Send SMS via sapteleservices
 * @param {string|string[]} mobileNumbers - Single number or array of numbers
 * @param {string} message - SMS text
 * @param {number} routeType - 0 for promotional, 1 for transactional, 2 for promotional with sender id
 * @param {string} [tid] - Optional DLT Template ID
 * @returns {Promise<string>} - API response text
 */
async function sendSms(mobileNumbers, message, routeType = 1, tid = "") {
  try {
    const mobiles = Array.isArray(mobileNumbers)
      ? mobileNumbers.join(",")
      : mobileNumbers;

    const params = new URLSearchParams();

    if (API_KEY) {
      params.append("apikey", API_KEY);
    } else {
      params.append("username", USERNAME);
      params.append("password", PASSWORD);
    }

    params.append("mobile", mobiles);
    params.append("sendername", SENDER);
    params.append("message", message);
    params.append("routetype", String(routeType));
    if (tid) params.append("tid", tid);

    const url = `${BASE_URL}/sendsms.php`;
    const res = await axios.post(url, params.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return res.data;
  } catch (err) {
    console.error("SMS send error:", err.message);
    throw err;
  }
}

/**
 * Get balance info
 */
async function getBalance() {
  const params = new URLSearchParams();
  params.append("username", USERNAME);
  params.append("password", PASSWORD);

  const url = `${BASE_URL}/balanceinfo.php`;
  const res = await axios.get(`${url}?${params.toString()}`);
  return res.data;
}

/**
 * Get delivery report
 * @param {string} fromDate - e.g. "2024-04-01 00:00:00"
 * @param {string} toDate - e.g. "2024-04-02 23:59:59"
 */
async function getDeliveryReport(fromDate, toDate) {
  const params = new URLSearchParams();
  params.append("username", USERNAME);
  params.append("password", PASSWORD);
  params.append("FromDate", fromDate);
  params.append("toDate", toDate);

  const url = `${BASE_URL}/getreports.php`;
  const res = await axios.get(`${url}?${params.toString()}`);
  return res.data;
}

module.exports = { sendSms, getBalance, getDeliveryReport };
