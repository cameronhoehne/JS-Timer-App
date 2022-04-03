class Timer {
    constructor(durationInput, startButton, pauseButton, resetButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.resetButton = resetButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.resetButton.addEventListener('click', this.reset)

    }
//starts timer
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick()
        this.interval = setInterval(this.tick, 20)
    }
//function to count down from user input
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
        if (this.onComplete) {
            this.onComplete();}
        } else {
        this.timeRemaining = this.timeRemaining - .02;
        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }
      }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
//pauses timer
    pause = () => {
        clearInterval(this.interval)
    }
//resets timer if there is time remaining
    reset = () => {
        clearInterval(this.interval);
        this.durationInput.value = 0;
        circle.setAttribute("stroke-dasharray", perimeter);
        circle.setAttribute("stroke-dashoffset", 0);
    }
}