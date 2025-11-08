/* const { query, transaction } = require('../../utils/dbHelper');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

const transferMoney = catchAsync(async (req, res, next) => {
  const { senderId, receiverId, amount } = req.body;

  // Run multiple queries in a single transaction
  const result = await transaction(async (conn) => {
    // Lock sender row and check balance
    const [sender] = await conn.execute(
      'SELECT balance FROM users WHERE id = ? FOR UPDATE',
      [senderId]
    );

    if (!sender) throw new AppError('Sender not found', 404);
    if (sender.balance < amount) throw new AppError('Insufficient balance', 400);

    // Deduct from sender
    await conn.execute('UPDATE users SET balance = balance - ? WHERE id = ?', [amount, senderId]);

    // Lock receiver row
    const [receiver] = await conn.execute(
      'SELECT balance FROM users WHERE id = ? FOR UPDATE',
      [receiverId]
    );

    if (!receiver) throw new AppError('Receiver not found', 404);

    // Add to receiver
    await conn.execute('UPDATE users SET balance = balance + ? WHERE id = ?', [amount, receiverId]);

    return { senderId, receiverId, amount };
  });

  res.status(200).json({
    ok: true,
    status: 200,
    message: 'Transfer completed successfully',
    data: result,
  });
});

module.exports = { transferMoney }; */

const catchAsync = require('../../utils/catchAsync');
const { transferMoney } = require('../../services/transactionService');

const transferController = catchAsync(async (req, res) => {
  const { senderId, receiverId, amount } = req.body;
  const result = await transferMoney(senderId, receiverId, amount);

  res.status(200).json({
    ok: true,
    status: 200,
    message: 'Transfer completed successfully',
    data: result,
  });
});

module.exports = { transferController };

