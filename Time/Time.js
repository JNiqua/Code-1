"use strict";
function runLater() {
    console.log("Run Forrest!");
}
setTimeout(runLater, 1000);
let intervalId = setInterval(runEverySecond, 1000);
let runs = 0;
function runEverySecond() {
    runs++;
    console.log("This is run number", runs);
    if (runs >= 5) {
        clearInterval(intervalId);
    }
}
function frame() {
    console.log("frame");
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
