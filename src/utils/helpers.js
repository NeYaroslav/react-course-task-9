const getIdWrapper = () => {
  const defaultKey = "id";
  const dictionary = {};

  return (key = defaultKey) => {
    dictionary[key] ??= 0;
    const newValue = ++dictionary[key];

    return `${key}_${newValue}`;
  };
};

export const getId = getIdWrapper();
