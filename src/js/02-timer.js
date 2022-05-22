// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

/*const flatpickr = require("flatpickr");*/
const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.alignContent = "space-around";

const timer = document.querySelector(".timer");
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.justifyContent = "space-around";
timer.style.width = "600px";
timer.style.heigth = "150px";
timer.style.border = "3px solid red";
timer.style.fontSize = "20px";
timer.style.color = "blue";
timer.style.backgroundColor = "yellow";
timer.style.padding = "2px";
timer.style.marginTop = "10px";


const fields = document.querySelectorAll(".field");
for (const field of fields) {
    field.style.border = "2px solid #3cff00";
    field.style.borderRadius = "25%";
    field.style.padding = "2px";
}

const values = document.querySelectorAll(".value");
for (const value of values) {
    value.style.fontStyle = "italic";
    value.style.fontWeight = "700";
    value.style.color = "#ff17ff";
    
}
//Как использовать эту функцию - способа не нашел!!!
function addLeadingZero() {
    return String(content).padStart(2, "0");
}



const d = document.querySelector(".value[data-days]");
const h = document.querySelector(".value[data-hours]");
const m = document.querySelector(".value[data-minutes]");
const s = document.querySelector(".value[data-seconds]");




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
            options.selDate = selectedDates[0].getTime();
            
        }
        
  },
};

flatpickr(input, options);

function startTimer(evt) {
    
    btnStart.setAttribute("disabled", true);
    timerId = setInterval(() => {
    
        convertMs();
        console.log(convertMs());
        
    }, 1000);

};


function convertMs() {
    let ms = Math.floor(options.selDate - Date.now());
    console.log(ms);
    if (ms <= 0) {
        clearInterval(timerId);
        return;
    }
    else {
        // Number of milliseconds per unit of time 
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
            
        // Remaining days
        const days = Math.floor(ms / day);
        d.textContent = String(days).padStart(2, "0");
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        h.textContent = String(hours).padStart(2, "0");
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        m.textContent = String(minutes).padStart(2, "0");
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        s.textContent = String(seconds).padStart(2, "0");

        const Time = { days, hours, minutes, seconds };
        return (Time);
        }

    
    }
    
