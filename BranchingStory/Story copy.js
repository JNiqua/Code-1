"use strict";
let UserInput;
let Room_1_Text = [
    "Du stehst in einem hellen Raum mit drei Türen. Eine ist 'grün', eine ist 'rot' und die letzte ist 'blau'. Durch welche gehst du?",
];
function Room_1() {
    let Klinke;
    UserInput = prompt(Room_1_Text[0]);
    switch (UserInput) {
        case "rot":
            Klinke = true;
            UserInput = prompt("Die Tür ist verschlossen. Die Klinke bricht allerdings ab. Welche der beiden verbleibenden Türen willst du öffnen? 'blau' oder 'grün'");
            switch (UserInput) {
                case "blau":
                    Room_2();
                    break;
                case "grün":
                    Room_3();
                    break;
                default:
                    alert("WRONG");
                    break;
            }
        case "blau":
            if (Klinke == false) {
                alert("Die Tür hat keinen Griff.");
                Room_1();
            }
            else {
            }
        case "grün":
    }
}
function Room_2() {
    UserInput = prompt("Der Boden unter dir gibt nach! Willst du dich 'festhalten' oder einfach nur 'fallen'?");
    if (UserInput == "festhalten") {
        UserInput = prompt("Du hältst dich an einem Rohr fest, welches jedoch abbricht, weswegen du in die Tiefe fällst. Du landest in einem kalten See in einer riesigen Höhle. Am Ufer entdeckst du einen Ausgang, der von einem Felsen versperrt ist. Möchtest du diesen mit dem Rohr 'entfernen', die Höhle 'erkunden' oder auf Hilfe 'warten'?");
        switch (UserInput) {
            case "entfernen":
                alert("Du gelangst ins Freie und lebst ein langes, glückliches, aber sehr armes Leben.");
                break;
            case "erkunden":
                alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!");
                break;
            default:
                alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht.");
                break;
        }
    }
    else { }
}
