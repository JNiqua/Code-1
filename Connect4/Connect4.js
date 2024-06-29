"use strict";
let numRows = 7;
let numColumns = 7;
let horPosition = 80 / numColumns;
let verPosition = 80 / numRows;
createBoard();
function createBoard() {
    for (let i = 0; i < numColumns; i++) {
        let newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.style.left = 10 + horPosition * i + "%";
        newDiv.style.position = "absolute";
        /*do {
            let newDive: HTMLDivElement = document.createElement("div")!;
            document.body.appendChild(newDive);

            newDive.style.top = 10 + verPosition * i + "%";
            newDive.style.position = "absolute"
        } while(i < numColumns)*/
    }
}
