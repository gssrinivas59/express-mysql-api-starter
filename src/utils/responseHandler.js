// src/utils/responseHandler.js
module.exports = (req, res, next) => {
    if (res.locals.data !== undefined) {
      return res.status(200).json({
        ok: true,
        status: 200,
        message: res.locals.message || '',
        data: res.locals.data
      });
    }
    next(); // pass to next middleware if no data
};
  