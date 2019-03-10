/**
 * To remove duplicates from an array
 * @param {Array} array
 * @returns {Array}
 */
function uniqueArray(array) {
    const set = new Set(array);
    return Array.from(set);
  }