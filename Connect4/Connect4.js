"use strict";
let numRows = 7;
let numColumns = 7;
let horPosition = 50 / numColumns;
let verPosition = 70 / numRows;
document.body.addEventListener("click", hndClick);
//document.body.addEventListener
createBoard();
function createBoard() {
    let BoardBorder = document.createElement("span");
    document.body.appendChild(BoardBorder);
    BoardBorder.style.backgroundColor = "darkred";
    BoardBorder.style.position = "absolute";
    BoardBorder.style.top = 16 + "%";
    BoardBorder.style.left = 22 + "%";
    BoardBorder.style.height = 76 + "%";
    BoardBorder.style.width = 53 + "%";
    let Board = document.createElement("span");
    document.body.appendChild(Board);
    Board.style.backgroundColor = "indianred";
    Board.style.position = "absolute";
    Board.style.top = 18 + "%";
    Board.style.left = 23 + "%";
    Board.style.height = 72 + "%";
    Board.style.width = 51 + "%";
    for (let h = 0; h < numRows; h++) {
        for (let i = 0; i < numColumns; i++) {
            let newDiv = document.createElement("div");
            document.body.appendChild(newDiv);
            newDiv.style.top = 20 + verPosition * h + "%";
            newDiv.style.left = 25 + horPosition * i + "%";
        }
    }
}
let ColorChanger = true;
function hndClick(_event) {
    let target = _event.target;
    if (ColorChanger == true) {
        target.style.backgroundColor = "aquamarine";
        ColorChanger = false;
    }
    else {
        target.style.backgroundColor = "gold";
        ColorChanger = true;
    }
}
/*function hndBrdSizeInput(_event: Event): void {
    let target1: HTMLElement = <HTMLElement>_event.target;
    target1.style.backgroundColor = "red";
}*/ 
