let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

crc2.fillStyle = "#FF0000"
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

crc2.beginPath();
crc2.arc(100, 100, 20, 0, 1 * Math.PI);
crc2.closePath();
crc2.stroke();

crc2.beginPath();
crc2.ellipse(150, 100, 20, 40, 0, 0, 6, false);
crc2.closePath();
crc2.stroke();
