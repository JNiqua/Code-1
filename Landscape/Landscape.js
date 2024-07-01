"use strict";
let Star1 = {
    color: "white",
    radius: 10,
    Halo: true,
    HaloColor: "white",
    HaloInnerRadius: 15,
    haloOuterRadius: 20,
};
let Star2 = {
    color: "white",
    radius: 5,
    Halo: false,
    HaloColor: "none",
    HaloInnerRadius: 0,
    haloOuterRadius: 0,
};
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
crc2.fillStyle = "black";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.beginPath();
crc2.ellipse(100, 100, Star1.radius, Star1.radius, 0, 0, 0);
crc2.closePath();
crc2.fillStyle = Star1.color;
crc2.fill();
crc2.beginPath();
crc2.ellipse(100, 100, 20, 20, 0, 0, 0);
crc2.closePath();
crc2.fillStyle = "white";
crc2.fill();