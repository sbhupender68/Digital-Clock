const setDate = () => {
  const now = new Date();

  let sec = now.getSeconds();
  sec = sec < 10 ? `0${sec}` : sec;

  let min = now.getMinutes();
  min = min < 10 ? `0${min}` : min;

  let hour = now.getHours();
  let ampm;

  if (hour >= 12) {
    ampm = 'PM';
  } else {
    ampm = 'AM';
  }

  if (hour > 12) {
    hour = hour - 12;
  }
  hour = hour < 10 ? `0${hour}` : hour;

  document.querySelector('.sec').innerHTML = sec;
  document.querySelector('.min').innerHTML = min;
  document.querySelector('.hour').innerHTML = hour;
  document.querySelector('.ampm').innerHTML = ampm;
};

setInterval(setDate, 1000);

setDate();
