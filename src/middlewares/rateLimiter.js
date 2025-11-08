const rateLimit = require('express-rate-limit');

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max requests per IP
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  message: {
    ok: false,
    status: 429,
    message: 'Too many requests from this IP, please try again later.'
  },
  keyGenerator: (req) => {
    // fallback to connection remoteAddress instead of req.ip
    return req.connection.remoteAddress || req.socket.remoteAddress || req.ip;
  }
});

// Optional: stricter limiter for login or sensitive routes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // only 5 login attempts per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    status: 429,
    message: 'Too many login attempts from this IP, please try again later.'
  }
});

module.exports = {
  apiLimiter,
  loginLimiter
};

/* 
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const Redis = require('ioredis');

// Redis client for production
const redisClient = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || undefined
});

// Global API limiter (all routes)
const apiLimiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max requests per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    status: 429,
    message: 'Too many requests from this IP, please try again later.'
  }
});

// Stricter limiter for login or OTP routes
const loginLimiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    status: 429,
    message: 'Too many login attempts from this IP, please try again later.'
  }
});

module.exports = { apiLimiter, loginLimiter };
 */