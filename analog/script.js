
//setting the class of div to the var for use in js
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".seconds");

// new Date() constructor in JavaScript is used 
// to create Date objects, representing specific points in time.


///making this variable global so that it can be used in other function too



// The Date object is used to work with times in JavaScript.
let clock = function(){  

    let date = new Date();
    let hr = date.getHours();
    let mint = date.getMinutes();
    let sec = date.getSeconds();
    //make the hands of the clock move
    //the clock hands rotate 360 degrees in a circle
    // 1 hour = 30 degrees
    // 1 minute = 6 degrees
    // 1 second = 6 degrees
    hour.style.transform = `rotateZ(${hr * 30 + mint/12}deg)`;
    minute.style.transform = `rotateZ(${mint * 6}deg)`;
    second.style.transform = `rotateZ(${sec * 6}deg)`;

}


setInterval(clock,1000);
clock();




/// digital clock from here

let digitalTime = document.querySelector(".digital-time");




//// this will work as a degital-clock function


let getStandardTime = function () {

    // this will create a new date object
    // and get the current time
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    //place holder for AM/PM
    let period;

    // this will check if the time is in AM or PM
    if (h >= 12) {
        period = 'PM';
    } else {
        period = 'AM';
    }

    // this will convert the time to 12 hour format
    h = h % 12;
    if (h === 0) {
        h = 12;
    }

    // this will add a leading zero to the minutes 1-9 because it's single digit
    if (m < 10) {
        m = '0' + m;
    }

    // this will add a leading zero to the seconds 1-9 because it's single digit
    if (s < 10) {
        s = '0' + s;
    }

    // this will set the innerHTML of the digital clock
    // to the current time
    digitalTime.innerHTML = h + ':' + m + ':' + s + ' ' + period;
   
    
}


getStandardTime();
setInterval(getStandardTime, 1000);
// this will set the innerHTML of the digital clock