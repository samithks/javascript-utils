/**
   * To pick the only key that given from a collection
   * @param collection The collection that contain the required key
   * @param key The key needed
   * @returns {Promise<void>} Return a collection with only the key that passed as argument
   */
  async function pickCollection(collection, key) {
    // To return the object with only the given key
    const pick = (object) => {
      return {
        [key]: object[key]
      };
    };
    return collection.map(pick);
  }