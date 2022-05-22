import { Notify } from 'notiflix/build/notiflix-notify-aio';
const stepEl = document.querySelector('input[name = "step"]');
const step = Number(stepEl.value);
let timeId = null;
const amount = document.querySelector('input[name = "amount"]');
const delayEl = document.querySelector('input[name = "delay"]');
const submit = document.querySelector('.form');
submit.addEventListener('submit', startFunction);

function startFunction(event) {
  event.preventDefault();

    let amountValue = Number(amount.value);
    console.log(amountValue);
    let i;
    for (i = 1; i <= amountValue; i += 1) {
      const position = Number(i);
      const delay = Number(delayEl.value) ;
      //console.log(position);
      //console.log(delay);
      createPromise(position, delay);
    }
  
}
function createPromise(position, delay) {

    console.log(delay);
    console.log(position);
  
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));// Fulfill
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));// Reject
      }
}
const promise = new Promise((resolve, reject) => createPromise(position, delay));

promise.then(
  result => {
    console.log(`${result}`);
  },
    error => {
      console.log(`${error}`);
    }
)