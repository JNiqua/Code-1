"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
crc2.fillStyle = "black";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
let numPlanets = 20;
function generatePlanets() {
    let Planets = [];
    for (let i = 0; i < numPlanets; i++) {
        let TheRadius = Math.random() * 15 + 3;
        let planet = {
            Color: "white",
            PositionX: Math.random() * canvas.width,
            PositionY: Math.random() * canvas.height,
            Radius: TheRadius,
            HaloColor: "black",
            HaloInnerRadius: TheRadius + Math.random() * 3 + 3,
            HaloOuterRadius: TheRadius + Math.random() * 6 + 6,
        };
        Planets.push(planet);
    }
    return Planets;
}
function drawPlanets(planet) {
    for (let i = 0; i < numPlanets; i++) {
        let HaloGradient = crc2.createRadialGradient(planet[i].PositionX, planet[i].PositionY, planet[i].HaloInnerRadius * 0.5, planet[i].PositionX, planet[i].PositionY, planet[i].HaloOuterRadius * 2);
        HaloGradient.addColorStop(0, planet[i].Color);
        HaloGradient.addColorStop(1, planet[i].HaloColor);
        crc2.beginPath();
        crc2.ellipse(planet[i].PositionX, planet[i].PositionY, planet[i].HaloOuterRadius, planet[i].HaloOuterRadius, 0, 0, 10);
        crc2.fillStyle = HaloGradient;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(planet[i].PositionX, planet[i].PositionY, planet[i].HaloInnerRadius, planet[i].HaloInnerRadius, 0, 0, 10);
        crc2.fillStyle = planet[i].HaloColor;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(planet[i].PositionX, planet[i].PositionY, planet[i].Radius, planet[i].Radius, 0, 0, 6);
        crc2.fillStyle = planet[i].Color;
        crc2.fill();
        crc2.closePath();
    }
}
let MW1 = {
    posX: 0,
    posY: 200,
    radiusX: 60,
    radiusY: 60,
};
for (let h = 0; h < 40; h++) { //Milky Way
    let rdmPosX = (Math.random() + 1) * MW1.posX + 50 * h;
    let rdmPosY = (Math.random() + 1) * MW1.posY * 0.1 * h;
    let rdmRadX = (Math.random() + 1) * MW1.radiusX;
    let rdmRadY = (Math.random() + 1) * MW1.radiusY;
    let MilkyWayGradient = crc2.createRadialGradient(rdmPosX, rdmPosY, rdmRadX, rdmPosX, rdmPosY, rdmRadY);
    MilkyWayGradient.addColorStop(0, "white");
    MilkyWayGradient.addColorStop(1, "black");
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, rdmRadX, rdmRadY, 0, 0, 6);
    crc2.fillStyle = "#1e1e1e";
    crc2.fill();
    crc2.closePath();
}
for (let j = 0; j < 100; j++) { //Stars
    let rdmPosX = Math.random() * canvas.width;
    let rdmPosY = Math.random() * canvas.height;
    let rdmRadius = Math.random() * 3;
    crc2.beginPath();
    crc2.ellipse(rdmPosX, rdmPosY, rdmRadius, rdmRadius, 0, 0, 6);
    crc2.closePath();
    crc2.fillStyle = "#ffffff10"; //transparenz
    crc2.fill();
}
drawPlanets(generatePlanets());
