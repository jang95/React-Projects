export const weekDayNames = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

export const monthNames = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

/**
 * @param {number} dateUnix
 * @param {number} timezone
 * @returns {string} formate: 'sunday 10, jan'
 */
export const getDate = function (dateUnix: number, timezone: number): string {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${monthName} ${date.getUTCDate()}일 ${weekDayName}`;
};

export const getWeekDay = function (
  dateUnix: number,
  timezone: number
): string {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];

  return `${weekDayName}`;
};

export const getDay = function (dateUnix: number, timezone: number): string {
  const date = new Date((dateUnix + timezone) * 1000);

  const day = date.getDate();

  return `${day}`;
};

export const getTime = function (timeUnix: number, timezone: number) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes + period;

  return `${formattedHours}:${formattedMinutes}${period}`;
};
