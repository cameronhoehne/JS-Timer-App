//selects HMTL elements
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')
const resetButton = document.querySelector('#reset')

//sets circle perimeter and stroke at init
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
const initCircleStroke = circle.setAttribute('stroke-dasharray', perimeter)


let duration;
//creates Timer class
const timer = new Timer(durationInput,startButton,pauseButton, resetButton, {
onStart(totalDuration) {
    duration = totalDuration;


},
onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
    perimeter * timeRemaining / duration - perimeter
    );
},

onComplete() {
    circle.setAttribute("stroke-dasharray", perimeter);
    circle.setAttribute("stroke-dashoffset", 0);
}
});