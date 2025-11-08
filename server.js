const env = require('./src/config/env');
const app = require('./src/app');

// Handle uncaught exceptions (synchronous code errors)
process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception!');
  console.error(err.name, err.message);
  console.error(err.stack);
  process.exit(1); // Exit process
});

// Start the server
const server = app.listen(env.PORT, () => {
  console.log(`✅ API server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
});

// Handle unhandled promise rejections (async code errors)
process.on('unhandledRejection', (err) => {
  console.error('💥 Unhandled Rejection!');
  console.error(err.name, err.message);
  console.error(err.stack);

  server.close(() => {
    console.log('Server closed due to unhandled promise rejection');
    process.exit(1);
  });
});

// Optional: handle SIGTERM for graceful shutdown (useful in containers)
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated!');
  });
});
