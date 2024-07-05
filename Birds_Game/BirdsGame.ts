let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Bird {
    x: number,
    y: number,
    size: number,
    color: string,
    path: Path2D,
}

/*
function drawBackground() {
    //the most amazing background
}

drawBackground();
let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
*/

let ScoreCount: number = 0;
let Score: HTMLDivElement = document.createElement("div");
document.body.appendChild(Score);
Score.textContent = ScoreCount;

function hndClick(_event: MouseEvent): void {
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;

    for (let i: number = 0; i < birds.length; i++) {
        if (ctx.isPointInPath(birds[i].path, x, y)==true) {
            birds.splice(i, 1);
            let bird: Bird = createBirds(1)[0];
            /*let newBirds: Bird[] = createBirds(1);
            let bird: Bird = newBirds[0];*/
            birds.push(bird);

            ScoreCount++;
            console.log(ScoreCount);
        }

    }
    
}

document.body.addEventListener("click", hndClick);

let birds: Bird[] = createBirds(20);

function createBirds(_amount: number): Bird[] {
    let birds: Bird[] = [];
    for(let i: number = 0; i < _amount; i++) {
        let bird: Bird = {
            x: Math.random() * -1200,
            y: Math.random() * 600,
            size: Math.random() * 50 + 10,
            color: `hsl(${Math.random() * 360}, ${Math.random()*80}%, 50%)`,
            path: new Path2D,
        }
        birds.push(bird);
    }
    return birds;
}

function drawBird(_bird: Bird): void {
    let path: Path2D = new Path2D;

    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fillStyle = _bird.color;
    ctx.fill(path);
    _bird.path = path;
}

function drawBirds(): void {
    for(let i: number = 0; i < birds.length; i++) {
        let bird = birds[i];
        drawBird(bird);
    }
}

const speed: number = 50;

function updateBirds(_deltaTime: number) {
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

let previousFrameTime: number = 0;

function animateBirds(_elapsedTime: number) {
    let currentFrameDeltaTime: number = (_elapsedTime - previousFrameTime) / 1000;
    previousFrameTime = _elapsedTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.putImageData(imgData, 0, 0);
    updateBirds(currentFrameDeltaTime);
    drawBirds();
    requestAnimationFrame(animateBirds);
}

requestAnimationFrame(animateBirds);