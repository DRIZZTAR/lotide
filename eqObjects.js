const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {
      if (!eqObjects(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

