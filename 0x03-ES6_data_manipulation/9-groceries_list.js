const groceriesList = () => {
  const dict = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const newmap = new Map(Object.entries(dict));
  return newmap;
};

export default groceriesList;
