/**
 * Configuration settings for the Average Calculator microservice
 */
const config = {
  // Server configuration
  server: {
    port: 9876,
    host: 'localhost'
  },
  
  // Window configuration
  window: {
    size: 10
  },
  
  // Third-party API endpoints
  apis: {
    prime: 'http://20.244.56.144/evaluation-service/primes',
    fibonacci: 'http://20.244.56.144/evaluation-service/fibo',
    even: 'http://20.244.56.144/evaluation-service/even',
    random: 'http://20.244.56.144/evaluation-service/rand'
  },
  
  // Request timeout in milliseconds
  requestTimeout: 500
};

module.exports = config;
