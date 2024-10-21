const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;


import { createNoise2D } from 'simplex-noise';

for (let i = 0; i < 30; i++) {
    const noise2D = createNoise2D();
    console.log(noise2D(5, 6));
}

class Wall {

    constructor (
        public leftEdge: number,
        public rightEdge: number,
        public MntnHeight: number,
        public Color: string,
        private topEdge: number,
        private bottomEdge: number,
    ) {}

}

