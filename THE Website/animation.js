"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
let ImgBackground = new Path2D;
ImgBackground.rect(580, 180, 390, 240);
crc2.fillStyle = "indianred";
crc2.fill(ImgBackground);
function mouseHover(_event) {
    let x = _event.offsetX;
    let y = _event.offsetY;
    if (crc2.isPointInPath(ImgBackground, x, y) == true) {
        console.log("yeeeeeeeeeeeeet");
        //ImgBackground.style.width = 120 + "%";
    }
    else {
        console.log("wtf");
    }
}
document.body.addEventListener("mouseover", mouseHover);
