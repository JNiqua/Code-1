let numRows: number = 7;
let numColumns: number = 7;
let horPosition: number = 80 / numColumns;
let verPosition: number = 80 / numRows;

createBoard();

function createBoard() {

    for (let i: number = 0; i < numColumns; i++) {
        let newDiv: HTMLDivElement = document.createElement("div")!;
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
