import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1.11.19/+esm';
import utc from 'https://cdn.jsdelivr.net/npm/dayjs@latest/plugin/utc/+esm';
import timezone from 'https://cdn.jsdelivr.net/npm/dayjs@latest/plugin/timezone/+esm';

dayjs.extend(utc)
dayjs.extend(timezone)

const tokyoTime = dayjs().tz('Asia/Tokyo');
console.log(tokyoTime.format('YYYY-MM-DD HH:mm:ss'));  // Japan time
const vietnamTime = dayjs().tz('Asia/Bangkok');
console.log(vietnamTime.format('YYYY-MM-DD HH:mm:ss')); // Vietnam time

const timeInTokyo = document.querySelector('.js-live-time');
timeInTokyo.innerHTML = tokyoTime.format("HH:mm")
const liveTime = document.querySelector('.this-time');
liveTime.innerHTML = vietnamTime.format("HH:mm")
console.log(today.format("ss, m, HH, D, MMMM, YYYY"));

