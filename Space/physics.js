"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas = document.querySelector("canvas");
const crc2 = canvas.getContext("2d");
const simplex_noise_1 = require("simplex-noise");
for (let i = 0; i < 30; i++) {
    const noise2D = (0, simplex_noise_1.createNoise2D)();
    console.log(noise2D(5, 6));
}
class Wall {
    constructor(leftEdge, rightEdge, MntnHeight, Color, topEdge, bottomEdge) {
        this.leftEdge = leftEdge;
        this.rightEdge = rightEdge;
        this.MntnHeight = MntnHeight;
        this.Color = Color;
        this.topEdge = topEdge;
        this.bottomEdge = bottomEdge;
    }
}
//# sourceMappingURL=physics.js.map