const pool = require('../config/db');
const AppError = require('./appError');

/**
 * Execute a single query
 * @param {string} sql - SQL query
 * @param {Array} params - parameters
 */
async function query(sql, params = []) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (err) {
    throw new AppError(err.message || 'Database query failed', 500);
  }
}

/**
 * Execute multiple queries in a transaction
 * @param {function(conn): Promise<any>} callback - a function that receives a connection and executes queries
 * Example:
 *   await transaction(async (conn) => {
 *      await conn.execute('UPDATE users SET balance = balance - ? WHERE id = ?', [amount, senderId]);
 *      await conn.execute('UPDATE users SET balance = balance + ? WHERE id = ?', [amount, receiverId]);
 *   });
 */
async function transaction(callback) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const result = await callback(conn); // pass connection to user callback

    await conn.commit();
    return result;
  } catch (err) {
    await conn.rollback();
    throw new AppError(err.message || 'Transaction failed', 500);
  } finally {
    conn.release();
  }
}

module.exports = { query, transaction };
