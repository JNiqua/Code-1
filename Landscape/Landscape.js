"use strict";
let Star1 = {
    color: "#dfd5b6",
    radius: 15,
    Halo: true,
    HaloColor: "black",
    HaloInnerRadius: 20,
    HaloOuterRadius: 30,
};
let Star2 = {
    color: "white",
    radius: 3,
    Halo: false,
    HaloColor: "none",
    HaloInnerRadius: 0,
    HaloOuterRadius: 0,
};
let MW1 = {
    posX: 0,
    posY: 200,
    radiusX: 60,
    radiusY: 60,
};
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
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
crc2.fillStyle = "black";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
for (let h = 0; h < 40; h++) {
    /*
    let rdmPosX: number = (Math.random()+1)*MWposX[h];
    let rdmPosY: number = (Math.random()+1)*MWposY[h];
    let rdmRadX: number = (Math.random()+1)*MWradiusX[h];
    let rdmRadY: number = (Math.random()+1)*MWradiusY[h];
    */
    let rdmPosX = (Math.random() + 1) * MW1.posX + 50 * h;
    let rdmPosY = (Math.random() + 1) * MW1.posY * 0.1 * h;
    let rdmRadX = (Math.random() + 1) * MW1.radiusX;
    let rdmRadY = (Math.random() + 1) * MW1.radiusY;
    /*
    let MilkyWayGradient: CanvasGradient = crc2.createRadialGradient(rdmPosX, rdmPosY, rdmRadX, rdmPosX, rdmPosY, rdmRadY);
    MilkyWayGradient.addColorStop(0, "white");
    MilkyWayGradient.addColorStop(1, "black");
    */
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, rdmRadX, rdmRadY, 0, 0, 6);
    crc2.fillStyle = "#1e1e1e";
    crc2.fill();
    crc2.closePath();
}
for (let j = 0; j < 100; j++) {
    let rdmPosX = Math.random() * canvas.width;
    let rdmPosY = Math.random() * canvas.height;
    let rdmRadius = Math.random() * Star2.radius;
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, rdmRadius, rdmRadius, 0, 0, 6);
    crc2.closePath();
    crc2.fillStyle = Star2.color;
    crc2.fill();
}
for (let i = 0; i < 20; i++) {
    let rdmPosX = Math.random() * canvas.width;
    let rdmPosY = Math.random() * canvas.height;
    let rdmRadius = Math.random();
    let HaloGradient = crc2.createRadialGradient(rdmPosX, rdmPosY, Star1.radius * 0.5, rdmPosX, rdmPosY, Star1.HaloOuterRadius * 2);
    HaloGradient.addColorStop(0, Star1.color);
    HaloGradient.addColorStop(1, Star1.HaloColor);
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.HaloOuterRadius * rdmRadius, Star1.HaloOuterRadius * rdmRadius, 0, 0, 10);
    crc2.fillStyle = HaloGradient;
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.HaloInnerRadius * rdmRadius, Star1.HaloInnerRadius * rdmRadius, 0, 0, 10);
    crc2.fillStyle = Star1.HaloColor;
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, Star1.radius * rdmRadius, Star1.radius * rdmRadius, 0, 0, 6);
    crc2.fillStyle = Star1.color;
    crc2.fill();
    crc2.closePath();
}
/*

crc2.beginPath();
    crc2.ellipse(600, 300, 10, 10, 0, 0, 6);
    crc2.closePath();
    crc2.fillStyle = "white";
    crc2.fill();

for(let d: number = 0; d < 20; d++) {
    let rdmPosX: number = Math.random()*canvas.width;
    let rdmPosY: number = Math.random()*canvas.height;
    let rdmRadius: number = Math.random()*Star2.radius;

    crc2.beginPath();
    crc2.ellipse(600, 300, 10, 10, 0, 0, 6);
    crc2.closePath();
    crc2.fillStyle = "white";
    crc2.fill();
    //crc2.translate(50, 50);
    //crc2.resetTransform();
    crc2.rotate(5 * Math.PI / 180);
}
*/ 
