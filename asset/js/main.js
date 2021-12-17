/* let hourhand = document.getElementsByClassName("hand hour-hand");
let minhandn = document.getElementsByClassName("hand min-hand");
let secondhan = document.getElementsByClassName("hand second-hand");

setInterval(() =>{
    let time= new Date();
    let hour =time.getHours();
    let min =time.getMinutes();
    let sec = time.getSeconds();


    let hr= hour*30+min/2;
    let mr= min*6;
    let sr = sec*6;


    hourhand.style.transform = 'rotate(${hr}deg)';
    minhandn.style.transform = 'rotate(${mr}deg)';
    secondhan.style.transform = 'rotate(${sr}deg)';

},1000); */

/* setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock() */
/* let hourhand = document.getElementsByClassName("hand hour-hand");
let minhandn = document.getElementsByClassName("hand min-hand");
let secondhan = document.getElementsByClassName("hand second-hand");
setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hourhand.style.transform = `rotate(${hr_rotation}deg)`;
  minhandn.style.transform = `rotate(${min_rotation}deg)`;
	secondhan.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000); */

// grab a reference of every hands

// hour hand
let hourHand = document.querySelector('.hour');
// minute hand 
let minuteHand = document.querySelector('.minute');
// second hand
let secondHand = document.querySelector('.second');

// function that rotates the hands
function rotate() {
  // get the current Date object from which we can obtain the current hour, minute and second
  const currentDate = new Date();

  // get the hours, minutes and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  // apply the rotate style to each element
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setInterval(rotate, 1000);