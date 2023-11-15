// Debouncing and throttling in js 
//Q1- Create a button UI and add debounce as follows =>
// show button pressed "x"times every time button is pressed 
//increase "triggered "Y" times" count after every 800ms of debounce 
// every time a button is pressed x count will increase 
// and if we pause for more than 800ms then y count will increase 


const btn=document.querySelector(".increment");
const btnpress=document.querySelector(".incrementpressed");
const count=document.querySelector(".triggeredpressed");

var pressedCount=0;
var triggeredCount=0;
const debounceCount=_.debounce(()=>{
    count.innerHTML=++triggeredCount;
},800);

btn.addEventListener("click",()=>{

    btnpress.innerHTML=++pressedCount;
   debounceCount();

});
