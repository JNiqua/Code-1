let YEETText = [
    "YAAT",
    "YEET",
    "YIIT",
    "YOOT",
    "YUUT"
]

let YEETColor = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "pink",
    "orange",
]


let titleElement: HTMLTitleElement = document.querySelector("title#yeetTitle")!;
titleElement.textContent = YEETText[Math.floor(Math.random()*5)];

function hndClick(_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    target.textContent = YEETText[Math.floor(Math.random()*5)];
    target.style.color =  YEETColor[Math.floor(Math.random()*7)];
    target.style.backgroundColor = YEETColor[Math.floor(Math.random()*7)];
    target.style.fontSize = Math.random() * 50 + "pt";
    
}

document.body.addEventListener("click", hndClick);

let i: number = 0;

do {
    i++
    //console.log(i);

    let newSpan: HTMLSpanElement = document.createElement("span")!;
    document.body.appendChild(newSpan);
    
    newSpan.textContent = YEETText[Math.floor(Math.random()*5)];
    newSpan.style.color = YEETColor[Math.floor(Math.random()*7)];
    newSpan.style.backgroundColor = YEETColor[Math.floor(Math.random()*7)];
    newSpan.style.fontSize = Math.random() * 50 + "pt";
    newSpan.style.position = "absolute";
    //newSpan.style.top = Math.random() * window.innerHeight + "px";
    //newSpan.style.left = Math.random() * window.innerWidth + "px";
    newSpan.style.top = Math.random() * 90 + "%";
    newSpan.style.left = Math.random() * 85 + "%";

    newSpan.addEventListener("click", hndClick);

} while(i < 200)

/*
while (i < 10) {
    i++;
    console.log(i);
}

for (let j: number: 0; j < 10; j++)
*/