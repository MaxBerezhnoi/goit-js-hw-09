// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

/*const flatpickr = require("flatpickr");*/

const btnStart = document.querySelector("button[data-start]");
btnStart.setAttribute("disabled", true);
btnStart.addEventListener("click", startTimer);

let timerId = 0;



const input = document.querySelector("#datetime-picker");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() <= options.defaultDate) {
            Notify.failure('Please choose a date in the future');
        }
        else {
            btnStart.removeAttribute("disabled");
            console.log("Выбранное время:");
            console.log(selectedDates[0]);
            console.log(selectedDates[0].getTime());
            console.log(options.defaultDate.getTime());
            const ms = Number(selectedDates[0].getTime() - options.defaultDate.getTime());
            console.log(ms);
            return ms;
        }
        
  },
};


function startTimer(evt) {
    btnStart.setAttribute("disabled", true);
    timerId = setInterval(() => {
        function convertMs(ms) {
  // Number of milliseconds per unit of time
    
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
        console.log("timer starting!");
console.log(convertMs());
    }, 1000);
    
    ;

};

flatpickr(input, options);