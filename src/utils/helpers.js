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

export const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return [hours, minutes, seconds].join(":");
};

export const formatDate = () => {
  const weekDays = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];

  const dateObj = new Date();
  const weekDay = weekDays[dateObj.getDay()];
  const date = dateObj.getDate();
  const year = dateObj.getFullYear() - 2000;
  const month = months[dateObj.getMonth()];
  return `${weekDay}, ${date} ${month}, ${year}р.`;
};
