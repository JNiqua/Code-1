"use strict";
let Pinetree = {
    Species: "Pine",
    LeavesTopX: ,
    LeavesTopY: ,
    LeavesHeight,
    LeavesColor: ,
    TrunkWidth: ,
    TrunkHeight: ,
    TrunkColor: ,
};
/*
let Oaktree: Trees = {
    Species: "Oak",
    LeavesWidth:,
    LeavesHeight:,
    LeavesColor:,
    TrunkWidth:,
    TrunkHeight:,
    TrunkColor:,
}*/
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
//crc2.fillStyle = "white"
//crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.fillStyle = "brown";
crc2.fillRect(200, 200, 30, 30);
crc2.arc(170, 200, 0, 0, 0);
crc2.lineTo(215, 80);
crc2.lineTo(260, 200);
crc2.fillStyle = "green";
crc2.fill();
/*DrawTree();

function DrawTree() {

}*/ 
//# sourceMappingURL=Flower.js.map