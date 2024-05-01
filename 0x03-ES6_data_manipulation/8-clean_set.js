const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const newArr = [];
  set.forEach((element) => {
    if (element === undefined) {
      return;
    }
    if (element.startsWith(startString)) {
      const newElement = element.slice(startString.length);
      newArr.push(newElement);
    }
  });
  return newArr.join('-');
};

export default cleanSet;
