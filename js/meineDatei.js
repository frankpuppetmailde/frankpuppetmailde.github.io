"use strict";

document.getElementById("meineEingabe").value = "Vorbelegung";
document.getElementById("meinButton").addEventListener('click', ändereInhalt);

function ändereInhalt() {
    let inhalt = document.getElementById("meineEingabe").value;
    document.getElementById("meinButton").innerText = inhalt;
}


