let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

crc2.fillStyle = "white";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

createCoordSys();

function createCoordSys() {
    let yAxis: Path2D = new Path2D();
    yAxis.arc(0, 0, 0, 0, 0);
    yAxis.lineTo(0, 200);
    crc2.stroke(yAxis);
    
    let xAxis: Path2D = new Path2D();
    xAxis.arc(0, 0, 0, 0, 0);
    xAxis.lineTo(200, 0);
    crc2.stroke(xAxis);
    
    for(let i:number = 0; i < 21; i++) {
        let yNotches: Path2D = new Path2D();
        yNotches.arc(0,0,0,0,0);
        yNotches.lineTo(0, 10 * i);
        yNotches.lineTo(3, 10 * i);
        crc2.stroke(yNotches);
        
        let xNotches: Path2D = new Path2D();
        xNotches.arc(0,0,0,0,0);
        xNotches.lineTo(10 * i, 0);
        xNotches.lineTo(10 * i, 3);
        crc2.stroke(xNotches);
    }
}

//crc2.translate(20, 5);
//crc2.resetTransform();
crc2.rotate(7 * Math.PI / 180);
crc2.scale(1, 1);

crc2.beginPath();
crc2.arc(100, 80, 30, 1 * Math.PI, 2 * Math.PI);
crc2.closePath();
//crc2.stroke();
crc2.fillStyle = "orange";
crc2.fill();

crc2.beginPath();
crc2.ellipse(100, 100, 15, 40, 0, 0, 6, false);
//crc2.closePath();
//crc2.stroke();
crc2.fillStyle = "orange";
crc2.fill();

RandoGrad();

function RandoGrad() {
    let gradient: CanvasGradient = crc2.createLinearGradient(10, 10, 50, 600);
    
    gradient.addColorStop(0.3, "indianred");
    gradient.addColorStop(1, "indigo");
    
    for(let h: number = 0; h < 20; h++) {
        crc2.fillStyle = gradient;
        crc2.fillRect(Math.random()*500 + 30, Math.random()*500 + 30, Math.random()*50 + 20, Math.random()*50 + 20);
    }
}

