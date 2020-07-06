import datos from './data.js';

let initialList = datos.allCards();
let finalList = [];

const aToz = document.getElementById("az");
const zToa = document.getElementById("za");
const tankfilter = document.getElementById("tank");
const hardfilter = document.getElementById("hard");
const averagefilter = document.getElementById("average");
const easyfilter = document.getElementById("easy");
const dashboard = document.getElementById("dashboard");

aToz.addEventListener("click", ordenardeaz);

function ordenardeaz() {
    finalList = initialList.sort(datos.az);
    fillDashboard(finalList);
}

zToa.addEventListener("click", ordenardeza);

function ordenardeza() {
    finalList = initialList.sort(datos.za)
    fillDashboard(finalList);
}

tankfilter.addEventListener("click", rolefiltertank);

function rolefiltertank() {
    finalList = initialList.filter(champ => champ.tags.includes("Tank"));
    fillDashboard(finalList);
}
hardfilter.addEventListener("click", dificultfilterHard);

function dificultfilterHard() {
    finalList = initialList.filter(champ => champ.difficulty >= 7);
    console.log(finalList);
    fillDashboard(finalList);
}
averagefilter.addEventListener("click", dificultfilterAverage);

function dificultfilterAverage() {
    finalList = initialList.filter(champ => champ.difficulty >= 4 && champ.difficulty <= 6);
    console.log(finalList);
    fillDashboard(finalList);
}
easyfilter.addEventListener("click", dificultfilterEasy);

function dificultfilterEasy() {
    finalList = initialList.filter(champ => champ.difficulty < 4);
    console.log(finalList);
    fillDashboard(finalList);
}








function clearDashboard() {
    while (dashboard.firstChild) {
        dashboard.removeChild(dashboard.firstChild);
    }
}

function fillDashboard(desiredList) {
    clearDashboard();
    desiredList.forEach(element => {

        let div = document.createElement("div");
        div.className = "tarjeta";
        div.id = element.name;

        let img = document.createElement("img");
        img.src = element.image;

        let photoname = document.createElement("h5");
        photoname.innerHTML = element.name;

        div.appendChild(img);
        div.appendChild(photoname);
        dashboard.appendChild(div);

    })
}


window.onload = function allChamps() {

    initialList.forEach(element => {

        let div = document.createElement("div");
        div.className = "tarjeta";
        div.id = element.name;

        let img = document.createElement("img");
        img.src = element.image;

        let photoname = document.createElement("h5");
        photoname.innerHTML = element.name;

        div.appendChild(img);
        div.appendChild(photoname);
        dashboard.appendChild(div);

    });
}

/*
<div class="tarjeta">
 <img src="https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png" alt="Akali build guides">
 <h5>Akali</h5>
</div>*/