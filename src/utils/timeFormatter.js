const SECONDTOMINUTES = 60;
const SECONDTOHOURS = 3600;

const getHour = (t) => Math.floor(t / SECONDTOHOURS);
const getMinutes = (t) => Math.floor(t / SECONDTOMINUTES);
const textToTime = (t) => Math.floor(+t);
const twoDigitsTime = (t) => t >= 10 ? String(t) : `0${t}`;

export default function (duration, timeText) {
  let currentTime = textToTime(timeText);
  const hours = getHour(currentTime);
  currentTime -= hours * SECONDTOHOURS;
  const minutes = getMinutes(currentTime);
  currentTime -= minutes * SECONDTOMINUTES;
  const seconds = currentTime;
  let response = `${twoDigitsTime(hours)}:${twoDigitsTime(minutes)}:${twoDigitsTime(seconds)}`;
  if (duration < SECONDTOHOURS) {
    response = `${twoDigitsTime(minutes)}:${twoDigitsTime(seconds)}`;
  }

  return response;
}