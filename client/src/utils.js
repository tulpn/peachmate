
export function sleep(ms) {
  /**
   * Simple Sleep function, used during development when working on Loading Screens etc.
   * Call: 
   * await sleep(5000)
   */
    return new Promise(resolve => setTimeout(resolve, ms));
  }