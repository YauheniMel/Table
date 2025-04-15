export const sortListBy = (parameters, list) => {
  const arr = [...list];

  arr.sort((a, b) => {
    let aItem = a[parameters.name];
    let bItem = b[parameters.name];

    if (parameters.name !== 'rating') {
      aItem = aItem.toLowerCase();
      bItem = bItem.toLowerCase();
    }

    if (aItem === bItem) return 0;

    return aItem < bItem ? -1 : 1;
  });

  if (!parameters.isAscending) arr.reverse();

  return arr;
};
