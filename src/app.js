const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const compression = require('compression');
const cors = require('cors');

const routes = require('./routes');
const { apiLimiter, loginLimiter } = require('./middlewares/rateLimiter');
const logger = require('./middlewares/logger');
const { checkToken } = require('./middlewares/globalAuth');
const globalErrorHandler = require('./utils/errorController');
const AppError = require('./utils/appError');
const catchAsync = require('./utils/catchAsync');
const responseHandler = require('./utils/responseHandler');

const app = express();

app.use(helmet());   // Sets secure HTTP headers
app.use(hpp());      // Prevent HTTP Parameter Pollution
/* app.use(hpp({
    whitelist: ['filter', 'tags']  // Array of query parameters to whitelist
})); */

/* const corsOptions = {
    origin:'http://localhost:3005', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
} */
app.use(cors())
app.set('trust proxy', true);
//app.set('trust proxy', 'loopback');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//app.use(compression());
app.use(compression({ filter: shouldCompress }))
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res)
}

//app.all(/(.*)/, checkToken);
//app.use(logger);

app.use(apiLimiter)
//app.use('/api', apiLimiter);


app.use("/api", routes);

app.get('/', catchAsync(async (req, res) => {
    return res.status(200).json({
      ok: true,
      status: 200,
      message: 'API server up and running',
      data: []
    });
}));

const ipController = require('./controllers/common/ipController');
app.get('/ip-address', ipController.getClientIp);

/* app.get('/ip-address', function (req, res, next) {

    const { getIpAddress } = require("../src/helpers/functions");

    return res.status(200).json({
        ok: true,
        status: 200,
        message: "",
        data: getIpAddress(req)
    });
}); */

// send success for controllers that set res.locals
app.use(responseHandler);

app.all(/(.*)/, (req, res, next) => {
    next(new AppError(`Requested URL ${req.path} not found!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;