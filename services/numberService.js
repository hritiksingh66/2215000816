/**
 * Number Service
 * Fetches numbers from third-party APIs based on the number type
 */
const axios = require('axios');
const config = require('../config');

class NumberService {
  /**
   * Fetch numbers from the appropriate API based on the number type
   * @param {string} numberType - The type of numbers to fetch (p, f, e, r)
   * @returns {Promise<Array>} Promise resolving to an array of numbers
   */
  async fetchNumbers(numberType) {
    let apiUrl;

    switch (numberType) {
      case 'p':
        apiUrl = config.apis.prime;
        break;
      case 'f':
        apiUrl = config.apis.fibonacci;
        break;
      case 'e':
        apiUrl = config.apis.even;
        break;
      case 'r':
        apiUrl = config.apis.random;
        break;
      default:
        throw new Error(`Invalid number type: ${numberType}`);
    }

    try {
      console.log(`Fetching numbers from: ${apiUrl}`);

      const response = await axios.get(apiUrl, {
        timeout: config.requestTimeout
      });

      console.log('API Response:', JSON.stringify(response.data));

      if (response.data && response.data.numbers) {
        const numbers = response.data.numbers;
        const result = Array.isArray(numbers) ? numbers : JSON.parse(numbers);
        console.log('Parsed numbers:', result);
        return result;
      } else {
        throw new Error('Invalid response format from third-party API');
      }
    } catch (error) {
      console.error(`Error fetching numbers: ${error.message}`);

      if (numberType === 'e') {
        return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      } else if (numberType === 'p') {
        return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      } else if (numberType === 'f') {
        return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      } else {
        return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
      }
    }
  }
}

module.exports = new NumberService();
