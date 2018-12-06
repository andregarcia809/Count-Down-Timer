// Get Elements
const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');

function getTimeDifference(start, end) {
  let milliSeconds = Math.floor(end - start);
  let seconds = Math.floor(milliSeconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - (days * 24); //days to minutes
  minutes = minutes - (days * 24 * 60) - (hours * 60); // hours to minutes
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60) //minutes to seconds
  /* Returns deadLine as an object*/
  return {
    Days: days,
    Hours: hours,
    Minutes: minutes,
    Seconds: seconds
  }
}

let timer = setInterval(function () {
  const startDate = new Date();
  const endDate = new Date('December 27, 2018 09:00:00');
  let timeDifferenceObj = getTimeDifference(startDate, endDate);

  timerDayEl.textContent = timeDifferenceObj.Days;
  timerHourEl.textContent = timeDifferenceObj.Hours;
  timerMinEl.textContent = timeDifferenceObj.Minutes;
  timerSecEl.textContent = timeDifferenceObj.Seconds;
   // Adds a Zero where needed
   if(timeDifferenceObj.Days < 10) {
    timerDayEl.textContent = '0' + timeDifferenceObj.Days;
  }
   if(timeDifferenceObj.Hours < 10) {
    timerHourEl.textContent = '0' + timeDifferenceObj.Hours;
  }
  if(timeDifferenceObj.Minutes < 10) {
    timerMinEl.textContent = '0' + timeDifferenceObj.Minutes;
  }
  if(timeDifferenceObj.Seconds < 10) {
    timerSecEl.textContent = '0' + timeDifferenceObj.Seconds;
  }
  // stos setInterval function
  if( timeDifferenceObj.Days === 0 && timeDifferenceObj.Hours === 0 && timeDifferenceObj.Minutes === 0 && timeDifferenceObj.Seconds === 0) {
    clearInterval(timer);

  }
}, 1000)
