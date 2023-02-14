export const phoneVal = (val) => {
  if (val.length === 13) {
    return (
      val.slice(0, 3) +
      ' (' +
      val.slice(3, 6) +
      ') ' +
      val.slice(6, 9) +
      ' ' +
      val.slice(9, 11) +
      ' ' +
      val.slice(11, 13)
    );
  }
  return val;
};
