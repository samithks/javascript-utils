function createMapFromCollection(collection, key) {
  const collectionCopy = new Map();
  collection.forEach((object) => {
    collectionCopy.set(object[key], object);
  });
  return collectionCopy;
}

function innerJoinMergeCollection(collection, collection2, key) {
  const mergedCollection = [...collection];
  // Merge the first collection with second
  mergedCollection.forEach((object) => {
    // Get the corresponding from map corresponding to the key in the first collection
    const existingValue = collection2.get(object[key]);
    // Create a new merged object
    Object.assign(object, existingValue);
  });
  return mergedCollection;
}

function innerJoin(collection1, collection2, key1, key2) {
  // Create a map with id as key and object as its value
  const collection2Copy = createMapFromCollection(collection2, key2);
  // Merge the first collection with second
  const mergedCollection = innerJoinMergeCollection(collection1, collection2Copy, key1);
  return mergedCollection;
}

function leftJoinMergeCollection(collection, collection2, key, rightDefaultObject) {
  const mergedCollection = [...collection];
  // Merge the first collection with second
  mergedCollection.forEach((object) => {
    // Get the corresponding from map corresponding to the key in the first collection
    const existingValue = collection2.get(object[key.left]);
    if (existingValue) {
      // Create a new merged object
      Object.assign(object, existingValue);
      object[key.right] = undefined;
    } else {
      Object.assign(object, rightDefaultObject);
    }
  });
  return mergedCollection;
}

function leftJoin(collection1, collection2, key) {
  const collection2Fields = Object.keys(collection2[0]);
  delete collection2Fields[key.right];
  const rightDefaultObject = collection2Fields.reduce((o, key) => ({ ...o, [key]: null }), {});
  // Merge the first collection with second
  // Create a map with id as key and object as its value
  const collection2Copy = createMapFromCollection(collection2, key.right);
  const mergedCollection = leftJoinMergeCollection(
    collection1,
    collection2Copy,
    key,
    rightDefaultObject
  );
  return mergedCollection;
}

module.exports.leftJoin = leftJoin;
module.exports.innerJoin = innerJoin;