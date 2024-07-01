interface StarData {
    color: string,
    radius: number,
    Halo: boolean,
    HaloColor: string,
    HaloInnerRadius: number,
    HaloOuterRadius: number,
}

let Star1: StarData = {
    color: "white",
    radius: 10,
    Halo: true,
    HaloColor: "black",
    HaloInnerRadius: 15,
    HaloOuterRadius: 25,
}

let Star2: StarData = {
    color: "white",
    radius: 5,
    Halo: false,
    HaloColor: "none",
    HaloInnerRadius: 0,
    HaloOuterRadius: 0,
}

interface MilkyWayData {
    posX: number,
    posY: number,
    radiusX: number,
    radiusY: number,
}

let MW1: MilkyWayData = {
    posX: 50,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW2: MilkyWayData = {
    posX: 150,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW3: MilkyWayData = {
    posX: 250,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW4: MilkyWayData = {
    posX: 350,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW5: MilkyWayData = {
    posX: 450,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW6: MilkyWayData = {
    posX: 550,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW7: MilkyWayData = {
    posX: 650,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW8: MilkyWayData = {
    posX: 750,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW9: MilkyWayData = {
    posX: 850,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MW10: MilkyWayData = {
    posX: 950,
    posY: 400,
    radiusX: 60,
    radiusY: 60,
}

let MilkyWayArray: MilkyWayData[] = [MW1, MW2, MW3, MW4, MW5, MW6, MW7, MW8, MW9, MW10];

let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

crc2.fillStyle = "black";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


for(let j: number = 0; j < 20; j++) {
    let rdmPosX: number = Math.random()*canvas.width;
    let rdmPosY: number = Math.random()*canvas.height;
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star2.radius, Star2.radius, 0, 0, 6);
    crc2.closePath();
    crc2.fillStyle = Star1.color;
    crc2.fill();
}

for(let i: number = 0; i < 20; i++) {
    let rdmPosX: number = Math.random()*canvas.width;
    let rdmPosY: number = Math.random()*canvas.height;
    
    let HaloGradient: CanvasGradient = crc2.createRadialGradient(rdmPosX, rdmPosY, Star1.radius*0.5, rdmPosX, rdmPosY, Star1.HaloOuterRadius*2);
    HaloGradient.addColorStop(0, Star1.color);
    HaloGradient.addColorStop(1, Star1.HaloColor);
    
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.HaloOuterRadius, Star1.HaloOuterRadius, 0, 0, 10);
    crc2.fillStyle = HaloGradient;
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.HaloInnerRadius, Star1.HaloInnerRadius, 0, 0, 10);
    crc2.fillStyle = Star1.HaloColor;
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.radius, Star1.radius, 0, 0, 6);
    crc2.fillStyle = Star1.color;
    crc2.fill();
    crc2.closePath();
}

for(let h: number = 0; h < MilkyWayArray.length; h++) {
    let HaloGradient: CanvasGradient = crc2.createRadialGradient(rdmPosX, rdmPosY, Star1.radius*0.5, rdmPosX, rdmPosY, Star1.HaloOuterRadius*2);
    HaloGradient.addColorStop(0, Star1.color);
    HaloGradient.addColorStop(1, Star1.HaloColor);
   
   
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.radius, Star1.radius, 0, 0, 6);
    crc2.fillStyle = Star1.color;
    crc2.fill();
    crc2.closePath();
}