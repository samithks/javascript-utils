/**
 * To check whether there is a duplicate value exist for a given key in the collection
 * @param {object[]} collection The array of objects that needed to be checked for the value
 * @param {string} key The key in which the value to be checked
 * @returns {Promise<*>}
 */
function findDuplicateInCollectionByKey(collection, key) {
  const seen = new Set();
  return collection.some((currentObject) => {
    return seen.size === seen.add(currentObject[key]).size;
  });
}
