/**
 * Average Calculator HTTP Microservice
 * Main application entry point
 */
const express = require('express');
const config = require('./config');
const numberRoutes = require('./routes/numberRoutes');

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/numbers', numberRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  
  // Set status code
  const statusCode = err.statusCode || 500;
  
  // Send error response
  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode
    }
  });
});

// Start server
const { port, host } = config.server;
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log(`Window size configured to: ${config.window.size}`);
});

module.exports = app;
