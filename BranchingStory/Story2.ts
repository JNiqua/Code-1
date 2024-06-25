let UserInput: string;

let Room_1_Text = [
    "Du stehst in einem hellen Raum mit drei Türen. Eine ist 'grün', eine ist 'rot' und die letzte ist 'blau'. Durch welche gehst du?",

]

Room_1();

function Room_1 () {
    let Klinke: boolean = false;
    UserInput = prompt(Room_1_Text[0])!;

    switch(UserInput) {
        case "rot":
            if (Klinke == false) {
                Klinke = true;
                alert("Die Tür ist verschlossen, allerdings bricht die Klinke ab.");
                Room_1();
                
            } else {
                alert("Die Tür ist verschlossen, die abgebrochene Klinke hältst du in der Hand.");
                Room_1();
            }
            

        case "blau":
            if (Klinke == false) {
                alert("Die Tür hat keinen Griff.")!;
                Room_1();
            } else {
                Room_2();
            }
            break;

        case "grün":
            alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!");
            break;
    }
}

function Room_2 () {
    UserInput = prompt("Der Boden unter dir gibt nach! Willst du dich 'festhalten' oder einfach nur 'fallen'?")!;
    if(UserInput=="festhalten") {
        UserInput = prompt("Du hältst dich an einem Rohr fest, welches jedoch abbricht, weswegen du in die Tiefe fällst. Du landest in einem kalten See in einer riesigen Höhle. Am Ufer entdeckst du einen Ausgang, der von einem Felsen versperrt ist. Möchtest du diesen mit dem Rohr 'entfernen', die Höhle 'erkunden' oder auf Hilfe 'warten'?")!;
        switch(UserInput) {
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

    } else {}
            
}