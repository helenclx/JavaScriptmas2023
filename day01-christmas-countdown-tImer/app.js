const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();
const christmasTime = new Date(`December 25 ${currentYear} 00:00:00`);

function updateCountdownTimer() {
    const currentTime = new Date();
    const diff = christmasTime - currentTime;

    const day = Math.floor(diff / 1000 / 60 / 60/ 24);
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minute = Math.floor(diff / 1000 / 60) % 60;
    const second = Math.floor(diff / 1000) % 60;

    daysEl.textContent = day;
    hoursEl.textContent = hour;
    minutesEl.textContent = minute < 10 ? '0' + minute : minute;
    secondsEl.textContent = second < 10 ? '0' + second : second;
}

setInterval(updateCountdownTimer, 1000);