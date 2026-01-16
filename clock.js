import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1.11.19/+esm';
import utc from 'https://cdn.jsdelivr.net/npm/dayjs@latest/plugin/utc/+esm';
import timezone from 'https://cdn.jsdelivr.net/npm/dayjs@latest/plugin/timezone/+esm';

dayjs.extend(utc)
dayjs.extend(timezone)

const timeInSingapore = document.querySelector('.js-live-time');
const liveTime = document.querySelector('.this-time');

updateTime()

const myInterval = setInterval(updateTime, 1000);

function updateTime() {
    const singaporeTime = dayjs().tz('Asia/Singapore');
    const vietnamTime = dayjs().tz('Asia/Bangkok');
    timeInSingapore.innerHTML = singaporeTime.format("HH:mm");
    liveTime.innerHTML = vietnamTime.format("HH:mm");
}