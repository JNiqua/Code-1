let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface PlanetData {
    Color: string,
    PositionX: number,
    PositionY: number,
    Radius: number,
    HaloColor: string,
    HaloInnerRadius: number,
    HaloOuterRadius: number,
}

let Planets: PlanetData[] = [];
let numPlanets: number = 20

generatePlanets();
drawPlanets();

function generatePlanets() {
    for (let i: number = 0; i < numPlanets; i++) {
        let TheRadius: number = Math.random()*15+3;
    
        let planet: PlanetData = {
            Color: "white",
            PositionX: Math.random()*canvas.width,
            PositionY: Math.random()*canvas.height,
            Radius: TheRadius,
            HaloColor: "black",
            HaloInnerRadius: TheRadius+Math.random()*3+3,
            HaloOuterRadius: TheRadius+Math.random()*6+6,
        }
        Planets.push(planet);
    }
}

function drawPlanets(planet: PlanetData): void {
    for(let i: number = 0; i < numPlanets; i++) {
        /*
        let rdmPosX: number = Math.random()*canvas.width;
        let rdmPosY: number = Math.random()*canvas.height;
        let rdmRadius: number = Math.random();
        */
        let HaloGradient: CanvasGradient = crc2.createRadialGradient(planet.PositionX, planet.PositionY, planet.HaloInnerRadius*0.5, planet.PositionX, planet.PositionY, planet.HaloOuterRadius*2);
        HaloGradient.addColorStop(0, planet.Color);
        HaloGradient.addColorStop(1, planet.HaloColor);
        
        crc2.beginPath();
        crc2.ellipse(planet.PositionX, planet.PositionY, planet.HaloOuterRadius, planet.HaloOuterRadius, 0, 0, 10);
        crc2.fillStyle = HaloGradient;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(planet.PositionX, planet.PositionY, planet.HaloInnerRadius, planet.HaloInnerRadius, 0, 0, 10);
        crc2.fillStyle = planet.HaloColor;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(planet.PositionX, planet.PositionY, planet.Radius, planet.Radius, 0, 0, 6);
        crc2.fillStyle = planet.Color;
        crc2.fill();
        crc2.closePath();
    }
}

interface MilkyWayData {
    posX: number,
    posY: number,
    radiusX: number,
    radiusY: number,
}

let MW1: MilkyWayData = {
    posX: 0,
    posY: 200,
    radiusX: 60,
    radiusY: 60,
}

/*
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
let MWposX: number[] = [MW1.posX, MW2.posX, MW3.posX, MW4.posX, MW5.posX, MW6.posX, MW7.posX, MW8.posX, MW9.posX, MW10.posX];
let MWposY: number[] = [MW1.posY, MW2.posY, MW3.posY, MW4.posY, MW5.posY, MW6.posY, MW7.posY, MW8.posY, MW9.posY, MW10.posY];
let MWradiusX: number[] = [MW1.radiusX, MW2.radiusX, MW3.radiusX, MW4.radiusX, MW5.radiusX, MW6.radiusX, MW7.radiusX, MW8.radiusX, MW9.radiusX, MW10.radiusX];
let MWradiusY: number[] = [MW1.radiusY, MW2.radiusY, MW3.radiusY, MW4.radiusY, MW5.radiusY, MW6.radiusY, MW7.radiusY, MW8.radiusY, MW9.radiusY, MW10.radiusY];
*/



crc2.fillStyle = "black";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

for(let h: number = 0; h < 40; h++) {
    /*
    let rdmPosX: number = (Math.random()+1)*MWposX[h];
    let rdmPosY: number = (Math.random()+1)*MWposY[h];
    let rdmRadX: number = (Math.random()+1)*MWradiusX[h];
    let rdmRadY: number = (Math.random()+1)*MWradiusY[h];
    */

    let rdmPosX: number = (Math.random()+1)*MW1.posX+50*h;
    let rdmPosY: number = (Math.random()+1)*MW1.posY*0.1*h;
    let rdmRadX: number = (Math.random()+1)*MW1.radiusX;
    let rdmRadY: number = (Math.random()+1)*MW1.radiusY; 

    let MilkyWayGradient: CanvasGradient = crc2.createRadialGradient(rdmPosX, rdmPosY, rdmRadX, rdmPosX, rdmPosY, rdmRadY);
    MilkyWayGradient.addColorStop(0, "white");
    MilkyWayGradient.addColorStop(1, "black");
    
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, rdmRadX, rdmRadY, 0, 0, 6);
    crc2.fillStyle = "#1e1e1e";
    crc2.fill();
    crc2.closePath();
}

for(let j: number = 0; j < 100; j++) {
    let rdmPosX: number = Math.random()*canvas.width;
    let rdmPosY: number = Math.random()*canvas.height;
    let rdmRadius: number = Math.random()*3;
    
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, rdmRadius, rdmRadius, 0, 0, 6);
    crc2.closePath();
    crc2.fillStyle = "white";
    crc2.fill();
}