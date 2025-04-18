const config = require('../config');

class WindowManager {
  constructor() {
    this.windowSize = config.window.size;
    this.window = [];
  }

  /**
   * @returns {Array} 
   */
  getCurrentState() {
    return [...this.window];
  }

  /**
   * @param {Array} newNumbers 
   * @returns {Object} 
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
   * @returns {number} 
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
