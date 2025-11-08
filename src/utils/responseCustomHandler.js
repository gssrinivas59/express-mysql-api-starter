// utils/responseHandler.js

/**
 * Send a standardized success response
 * @param {Object} res - Express response object
 * @param {Object} options - Options object
 *    {Number} status - HTTP status code (default: 200)
 *    {String} message - Optional message
 *    {Any} data - Response payload (default: null)
 */
const sendSuccess = (res, { status = 200, message = '', data = null } = {}) => {
    return res.status(status).json({
      ok: true,
      status,
      message,
      data
    });
};
  
  /**
   * Send a standardized error response
   * This is optional; mostly errors are handled in globalErrorHandler
   */
const sendError = (res, { status = 500, message = 'Something went wrong', data = null } = {}) => {
    return res.status(status).json({
        ok: false,
        status,
        message,
        data
    });
};
  
module.exports = {
    sendSuccess,
    sendError
};
  