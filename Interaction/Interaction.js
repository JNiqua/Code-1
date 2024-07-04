"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
crc2.fillStyle = "grey";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
let shapes = [];
function hndClick(_event) {
    let x = _event.offsetX;
    let y = _event.offsetY;
    let shape = {
        x: x,
        y: y,
        size: 20,
        color: "green",
    };
    shapes.push(shape);
}
document.body.addEventListener("click", hndClick);
function drawShape(_shape) {
    crc2.beginPath();
    crc2.ellipse(_shape.x, _shape.y, _shape.size, _shape.size, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.fillStyle = _shape.color;
    crc2.fill();
    crc2.closePath();
}
function drawShapes() {
    for (let blub of shapes) {
        drawShape(blub);
    }
}
const gravityStrength = 200;
function gravity(_deltaTime) {
    for (let shape of shapes) {
        shape.y += gravityStrength * _deltaTime;
        if (shape.y >= canvas.height - shape.size) {
            shape.y = canvas.height - shape.size;
        }
    }
}
let previousFrameTime = 0;
function animateShapes(_elapsedTime) {
    let currentFrameDeltaTime = (_elapsedTime - previousFrameTime) / 1000;
    previousFrameTime = _elapsedTime;
    crc2.clearRect(0, 0, canvas.width, canvas.height);
    gravity(currentFrameDeltaTime);
    drawShapes();
    requestAnimationFrame(animateShapes);
}
requestAnimationFrame(animateShapes);
