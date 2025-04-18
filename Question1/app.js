/**
 * Average Calculator HTTP Microservice
 * Main application entry point
 */
const express = require('express');
const config = require('./config');
const numberRoutes = require('./routes/numberRoutes');

const app = express();

app.use(express.json());

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

const { port, host } = config.server;
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log(`Window size configured to: ${config.window.size}`);
});
