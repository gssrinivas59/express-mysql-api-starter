const { DB_CONFIG } = require('./env');
//const { createPool } = require("mysql2");
const { createPool } = require('mysql2/promise'); // Use promise-based API

const isProd = process.env.NODE_ENV === 'production';
//const isProd = false;

const pool = createPool({
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  user: DB_CONFIG.user,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  //waitForConnections: true,
  connectionLimit: 10,
  //maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  //idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  //queueLimit: 0
});

//const promisePool = pool.promise();

module.exports = pool;