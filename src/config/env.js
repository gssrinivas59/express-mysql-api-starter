const dotenv = require("dotenv");

// Load .env file
dotenv.config();

// Detect environment
const NODE_ENV = process.env.NODE_ENV || "development";

// Select proper port
const PORT =
  NODE_ENV === "production"
    ? process.env.PORT_PROD
    : process.env.PORT_DEV;

// Database configuration (switch between prod and dev)
const DB_CONFIG =
  NODE_ENV === "production"
    ? {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      }
    : {
        host: process.env.DB_DEV_HOST,
        port: process.env.DB_DEV_PORT,
        user: process.env.DB_DEV_USERNAME,
        password: process.env.DB_DEV_PASSWORD,
        database: process.env.DB_DEV_NAME,
      };

// History database configuration (optional)
const DB_HISTORY_CONFIG = {
  host: process.env.DB_HISTORY_HOST,
  port: process.env.DB_HISTORY_PORT,
  user: process.env.DB_HISTORY_USERNAME,
  password: process.env.DB_HISTORY_PASSWORD,
  database: process.env.DB_HISTORY_NAME,
};

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURECONNECTION === "ssl", // true for SSL, false for TLS
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  from: {
    name: process.env.EMAIL_NAME || "Support",
    address: process.env.EMAIL_FROM || process.env.EMAIL_USERNAME,
  },
};

// JWT configuration
const JWT_CONFIG = {
  secret: process.env.JWT_SECRET_KEY,
  expiresIn: process.env.JWT_EXPIRES_IN || "7d",
};

// Encryption key
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

// Default admin credentials (optional)
const ADMIN_DEFAULT = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

// Export all configurations
module.exports = {
  NODE_ENV,
  PORT,
  API_URL: process.env.API_URL || "",
  WEBPAGE_URL: process.env.WEBPAGE_URL || "",
  DB_CONFIG,
  DB_HISTORY_CONFIG,
  EMAIL_CONFIG,
  JWT_CONFIG,
  ENCRYPTION_KEY,
  ADMIN_DEFAULT,
};
