"use strict";
let YEETText = [
    "YAAT",
    "YEET",
    "YIIT",
    "YOOT",
    "YUUT"
];
let YEETColor = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "pink",
    "orange",
];
let spanElement = document.querySelector("title#yeetTitle");
spanElement.textContent = YEETText[Math.floor(Math.random() * 5)];
let i = 0;
do {
    i++;
    console.log(i);
    let newSpan = document.createElement("span");
    newSpan.textContent = YEETText[Math.floor(Math.random() * 5)];
    document.body.appendChild(newSpan);
    newSpan.style.color = YEETColor[Math.floor(Math.random() * 7)];
    newSpan.style.backgroundColor = YEETColor[Math.floor(Math.random() * 7)];
    newSpan.style.fontSize = Math.random() * 50 + "pt";
    newSpan.style.position = "absolute";
    //newSpan.style.top = Math.random() * window.innerHeight + "px";
    //newSpan.style.left = Math.random() * window.innerWidth + "px";
    newSpan.style.top = Math.random() * 90 + "%";
    newSpan.style.left = Math.random() * 85 + "%";
} while (i < 200);
