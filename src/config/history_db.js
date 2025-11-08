const { DB_HISTORY_CONFIG } = require('./env');
//const { createPool } = require("mysql2");
const { createPool } = require('mysql2/promise'); // Use promise-based API

const poolHistory = createPool({
  host: DB_HISTORY_CONFIG.host,
  port: DB_HISTORY_CONFIG.port,
  user: DB_HISTORY_CONFIG.user,
  password: DB_HISTORY_CONFIG.password,
  database: DB_HISTORY_CONFIG.database,
  //waitForConnections: true,
  connectionLimit: 10,
  //maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  //idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  //queueLimit: 0
});
//const promisePoolHistory = poolHistory.promise();

module.exports = poolHistory;