export const weekDayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'wednesday',
  'fryday',
  'Saturday',
];

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
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

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
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
