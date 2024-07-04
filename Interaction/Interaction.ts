let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

crc2.fillStyle = "grey";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

interface Shape {
    x: number,
    y: number,
    size: number,
    color: string,
}

let shapes: Shape[] = [];

function hndClick(_event: MouseEvent): void {
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;

    let shape: Shape = {
        x: x,
        y: y,
        size: 20,
        color: "green",
    }
    shapes.push(shape);
}

document.body.addEventListener("click", hndClick);

function drawShape(_shape: Shape): void {
    crc2.beginPath();
    crc2.ellipse(_shape.x, _shape.y, _shape.size, _shape.size, Math.PI, Math.PI*180, Math.PI*90);
    crc2.fillStyle = _shape.color;
    crc2.fill();
    crc2.closePath();
}

function drawShapes(): void {
    for (let blub of shapes) {
        drawShape(blub);
    }
}

const gravityStrength: number = 200;

function gravity(_deltaTime: number) {
    for (let shape of shapes) {
        shape.y += gravityStrength * _deltaTime;
        if (shape.y >= canvas.height - shape.size) {
            shape.y = canvas.height - shape.size;
        }
    }
}

let previousFrameTime: number = 0;

function animateShapes(_elapsedTime: number) {
    let currentFrameDeltaTime: number = (_elapsedTime - previousFrameTime) / 1000;
    previousFrameTime = _elapsedTime;

    crc2.clearRect(0, 0, canvas.width, canvas.height);
    gravity(currentFrameDeltaTime);
    drawShapes();
    requestAnimationFrame(animateShapes);
}

requestAnimationFrame(animateShapes);