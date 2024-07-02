"use strict";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
/*
function drawBackground() {
    //the most amazing background
}

drawBackground();
let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
*/
let birds = createBirds(10);
drawBirds();
function createBirds(_amount) {
    let birds = [];
    for (let i = 0; i < _amount; i++) {
        let bird = {
            x: Math.random() * 600,
            y: Math.random() * 600,
            size: Math.random() * 50 + 10,
            color: `hsl(${Math.random() * 360}, ${Math.random() * 80}%, 50%)`,
        };
        birds.push(bird);
    }
    return birds;
}
function drawBird(_bird) {
    let path = new Path2D();
    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fillStyle = _bird.color;
    ctx.fill(path);
}
function drawBirds() {
    for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        drawBird(bird);
    }
}
const speed = 50;
function updateBirds(_deltaTime) {
    /*for (let i: number = 0; i < birds.length; i++) {
        birds[i].x += speed;
    }*/
    for (let bird of birds) {
        bird.x += speed * _deltaTime;
        if (bird.x > canvas.width) {
            bird.x = -bird.size;
        }
    }
}
let previousFrameTime = 0;
function animateBirds(_elapsedTime) {
    let currentFrameDeltaTime = (_elapsedTime - previousFrameTime) / 1000;
    previousFrameTime = _elapsedTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.putImageData(imgData, 0, 0);
    updateBirds(currentFrameDeltaTime);
    drawBirds();
    requestAnimationFrame(animateBirds);
}
requestAnimationFrame(animateBirds);
