// Debouncing and throttling in js 
//Q1- Create a button UI and add debounce as follows =>
// show button pressed "x"times every time button is pressed 
//increase "triggered "Y" times" count after every 800ms of debounce 
// every time a button is pressed x count will increase 
// and if we pause for more than 800ms then y count will increase by 1


const btn=document.querySelector(".increment");
const btnpress=document.querySelector(".incrementpressed");
const count=document.querySelector(".triggeredpressed");

var pressedCount=0;
var triggeredCount=0;

const  myDebounce=(cb,d)=>{
    let timer;
    return function(...args){
        if (timer) clearTimeout(timer);
         timer=setTimeout(()=>{
            cb(...args);
         },d);
    };
};

const debounceCount=myDebounce(()=>{
    count.innerHTML=++triggeredCount;// we are increasing this after every pause for more than 800ms
},800); 

btn.addEventListener("click",()=>{

    btnpress.innerHTML=++pressedCount;
   debounceCount();

});


// create a button UI and add throttle as follows 
// show button pressed "x"times every time button is pressed 
//increase "triggered "Y" times" count after every 800ms of throttle
// difference between both is that it doesnt wait for my pause it after some clicks
  // suppose you are scrolling scrolling(calling for api for 800ms atleast then as soon as 800s hits it will call the api  thus we are showing it here as the count increase ) then after 800ms this will call the api 
/*const throttleCount=_.throttle(()=>{
    count.innerHTML=++triggeredCount;// we are increasing this after every pause for more than 800ms
    
},800);


btn.addEventListener("click",()=>{

    btnpress.innerHTML=++pressedCount;
throttleCount();
});

// questions 3 polyfill of debounce */