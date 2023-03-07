const deadline = '2024-01-01';
const timer = document.querySelector('.timer'),
  days = timer.querySelector('#days'),
  hours = timer.querySelector('#hours'),
  minutes = timer.querySelector('#minutes'),
  seconds = timer.querySelector('#seconds');

const getTimeRemaining = (endTime) => {
  const total = Date.parse(endTime) - Date.now();

  if (total <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const setClock = (endTime) => {
  function updateClock() {
    const t = getTimeRemaining(endTime);

    days.textContent = new Intl.NumberFormat('en-GB', {
      minimumIntegerDigits: 2,
    }).format(t.days);
    hours.textContent = new Intl.NumberFormat('en-GB', {
      minimumIntegerDigits: 2,
    }).format(t.hours);
    minutes.textContent = new Intl.NumberFormat('en-GB', {
      minimumIntegerDigits: 2,
    }).format(t.minutes);
    seconds.textContent = new Intl.NumberFormat('en-GB', {
      minimumIntegerDigits: 2,
    }).format(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  const timeInterval = setInterval(updateClock, 1000);
};

setClock(deadline);
