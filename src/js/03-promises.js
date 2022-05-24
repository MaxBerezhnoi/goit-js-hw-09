import { Notify } from 'notiflix/build/notiflix-notify-aio';
const stepEl = document.querySelector('input[name = "step"]');

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
      const delay = Number(delayEl.value) + i * Number(stepEl.value);
      

      createPromise(position, delay);
    
    }
  
}



function createPromise(position, delay) {
  
    const promise = new Promise((resolve, reject) => {
      const firstDelay = Number(delayEl.value);

      setTimeout(() => {
      
        const shouldResolve = Math.random() > 0.3;
  
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);// Fulfill
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);// Reject
        }
      }, firstDelay);
      
      
    
    
  });


  promise.then(

    result => {
      setTimeout(() => {
        Notify.success(result);
        console.log(result);
      }, Number(stepEl.value));
    },

    error => {
      setTimeout(() => {
        Notify.failure(error);
        console.log(error);
      }, Number(stepEl.value));
    })
    
}