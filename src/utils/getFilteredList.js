export const getFilteredList = (positionsList) => {
  return positionsList.map((el) => {
    if ('name' in el) {
      return el.name;
    }
  });
};
