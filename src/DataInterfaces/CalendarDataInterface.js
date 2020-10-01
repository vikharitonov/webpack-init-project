const twoDigitsFormat = (v) => {
  return `${v}`.padStart(2, 0);
}

const formatDate = (today) => {
  const day = twoDigitsFormat(today.getDate());
  const month = twoDigitsFormat(today.getMonth() + 1);
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
};

const getCurrentDate = () => {
  return formatDate(new Date());
}
const getNthDayFromToday = (i) => {
  const nextDay = new Date();

  return new Date(nextDay.setDate(nextDay.getDate() + i));
}

const getWeekFromToday = () => {
  const week = [];
  const today = getCurrentDate();
  week.push(today);

  for (let i = 1; i < 7; i++) {
    week.push(formatDate(getNthDayFromToday(i)));
  }
  return week;
}

export default { getCurrentDate, getWeekFromToday };