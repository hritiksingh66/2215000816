/**
 * Number Controller
 * Handles requests to the /numbers/{numberid} endpoint
 */
const numberService = require('../models/numberService');
const windowManager = require('../models/windowManager');

/**
 * Get numbers based on the provided ID and calculate average
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getNumbers = async (req, res, next) => {
  try {
    const { numberid } = req.params;
    
    // Validate the number ID
    if (!['p', 'f', 'e', 'r'].includes(numberid)) {
      return res.status(400).json({
        error: 'Invalid number ID. Must be one of: p (prime), f (fibonacci), e (even), r (random)'
      });
    }
    
    // Fetch numbers from the third-party API
    const numbers = await numberService.fetchNumbers(numberid);
    
    // Update the window with the new numbers
    const { windowPrevState, windowCurrState } = windowManager.updateWindow(numbers);
    
    // Calculate the average
    const avg = windowManager.calculateAverage();
    
    // Format the response
    const response = {
      windowPrevState,
      windowCurrState,
      numbers: JSON.stringify(numbers), // Format as string as per requirements
      avg: parseFloat(avg.toFixed(2))
    };
    
    res.json(response);
  } catch (error) {
    next(error);
  }
};
