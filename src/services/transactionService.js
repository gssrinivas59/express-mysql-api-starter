const { transaction } = require('../utils/dbHelper');
const AppError = require('../utils/appError');

async function transferMoney(senderId, receiverId, amount) {
  return await transaction(async (conn) => {
    // All transaction logic here
    // SELECT, UPDATE, INSERT, logging, notifications
    const [sender] = await conn.execute('SELECT balance FROM users WHERE id = ? FOR UPDATE', [senderId]);
    if (!sender || sender.balance < amount) throw new AppError('Insufficient balance', 400);

    await conn.execute('UPDATE users SET balance = balance - ? WHERE id = ?', [amount, senderId]);
    const [receiver] = await conn.execute('SELECT balance FROM users WHERE id = ? FOR UPDATE', [receiverId]);
    if (!receiver) throw new AppError('Receiver not found', 404);
    await conn.execute('UPDATE users SET balance = balance + ? WHERE id = ?', [amount, receiverId]);

    await conn.execute('INSERT INTO transactions (sender, receiver, amount) VALUES (?, ?, ?)', [senderId, receiverId, amount]);

    return { senderId, receiverId, amount };
  });
}

module.exports = { transferMoney };
