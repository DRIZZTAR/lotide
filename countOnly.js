const countOnly = function(allItems, itemsToCount) {
  const filteredItems = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (filteredItems[item]) {
        filteredItems[item] += 1;
      } else {
        filteredItems[item] = 1;
      }
    }
  }

  return filteredItems;
};

module.exports = countOnly;

module.exports = countOnly;

