let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crcr2: CanvasRenderingContext2D = canvas.getContext("2d")!;
//crcr2.fillStyle = "yellow";
//crcr2.fillRect(0, 0, crcr2.canvas.width, crcr2.canvas.height);

//let Imageee: HTMLImageElement = document.querySelector("img")!;
//Imageee.addEventListener("mouseover", mouseHover);

/*let wawawu: Path2D = new Path2D;
wawawu.rect(580, 380, 930, 580);
crcr2.fillStyle = "indianred";
crcr2.fill(wawawu);
*/
crcr2.beginPath();
crcr2.ellipse(40, 40, 40, 30, 0, 0, 6);
crcr2.fillStyle = "red";
crcr2.fill();
crcr2.closePath();





function mouseHover(_event: MouseEvent): void {
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;
    
    //crcr2.isPointInPath
    console.log("yeeeeeeeeeeeeet");
    //Imageee.style.width = 120 + "%";
}

//document.body.addEventListener("mouseover", mouseHover);