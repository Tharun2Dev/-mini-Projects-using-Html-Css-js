let yearEl=document.querySelector("#year-name");
let dayEl=document.querySelector("#day-name");
let dateEl=document.querySelector("#date");
let monthEl=document.querySelector("#month-name");

const date=new Date();


dateEl.innerText=date.getDate();
monthEl.innerText=date.toLocaleString("en",{
    month:"long"
});
dayEl.innerText=date.toLocaleString("en",{
    weekday:"long"
});
yearEl.innerText=date.getFullYear();
