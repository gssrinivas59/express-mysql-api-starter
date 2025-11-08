// src/controllers/client/ipController.js

const catchAsync = require('../../utils/catchAsync');
//const { sendSuccess } = require('../../utils/responseCustomHandler');
const { getIpAddress } = require('../../helpers/functions');

exports.getClientIp = catchAsync(async (req, res, next) => {
  /* const ip = getIpAddress(req);
  sendSuccess(res, { message: 'Client IP fetched successfully', data: ip }); */

  res.locals.data = getIpAddress(req);
  res.locals.message = 'IP fetched successfully';
  next();
});
