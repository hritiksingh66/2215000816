/**
 * Window Manager Service
 * Manages a sliding window of unique numbers with a configurable size
 */
const config = require('../config');

class WindowManager {
  constructor() {
    this.windowSize = config.window.size;
    this.window = [];
  }

  /**
   * Get the current state of the window
   * @returns {Array} The current window state
   */
  getCurrentState() {
    return [...this.window];
  }

  /**
   * Add new numbers to the window, maintaining uniqueness and window size
   * @param {Array} newNumbers - Array of numbers to add to the window
   * @returns {Object} Object containing previous and current window state
   */
  updateWindow(newNumbers) {
    const prevState = this.getCurrentState();

    for (const num of newNumbers) {
      if (!this.window.includes(num)) {
        if (this.window.length >= this.windowSize) {
          this.window.shift();
        }
        this.window.push(num);
      }
    }

    const currState = this.getCurrentState();

    return {
      windowPrevState: prevState,
      windowCurrState: currState
    };
  }

  /**
   * Calculate the average of numbers in the window
   * @returns {number} The average value, or 0 if window is empty
   */
  calculateAverage() {
    if (this.window.length === 0) {
      return 0;
    }

    const sum = this.window.reduce((acc, num) => acc + num, 0);
    return sum / this.window.length;
  }
}

module.exports = new WindowManager();
