const numberService = require('../services/numberService');
const windowManager = require('../services/windowManager');

/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
exports.getNumbers = async (req, res, next) => {
  try {
    const { numberid } = req.params;

    if (!['p', 'f', 'e', 'r'].includes(numberid)) {
      return res.status(400).json({
        error: 'Invalid number ID. Must be one of: p (prime), f (fibonacci), e (even), r (random)'
      });
    }

    const numbers = await numberService.fetchNumbers(numberid);

    const { windowPrevState, windowCurrState } = windowManager.updateWindow(numbers);

    const avg = windowManager.calculateAverage();

    const response = {
      windowPrevState,
      windowCurrState,
      numbers: JSON.stringify(numbers), 
      avg: parseFloat(avg.toFixed(2))
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};
