/**
 * Turns an array into a string, separating its elements with a comma.
 *
 * @param {Array} elements The array to be turned into string.
 * @returns {String} The elements of the array separated with a comma.
 */
export default class ListToString {
  // Array.join() returns a string of the elements of the array separated with a comma.
  concatenateList(elements) {
    return elements.join();
  }
}
