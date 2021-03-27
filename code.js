class ListToString {
  /**
   * Turns an array into a string, separating its elements with a comma.
   *
   * @param {Array} elements The array to be turned into string.
   * @param {string} [separator = ,] The separator with which the string will separate the elements of the array.
   * @returns {string} The elements of the array separated with a comma.
   */
  concatenateList(elements, separator = ',') {
    return elements.join(separator);
  }
}

module.exports = { ListToString };
