import datos from './data.js';

let initialList = datos.allCards();
let finalList = [];

const aToz = document.getElementById("az");
const zToa = document.getElementById("za");

const tankfilter = document.getElementById("tank");
const fightfilter = document.getElementById("fighter");
const supportfilter = document.getElementById("support");
const magefilter = document.getElementById("mage");
const assasingfilter = document.getElementById("assasing");
const marksmanfilter = document.getElementById("marksman");

const hardfilter = document.getElementById("hard");
const averagefilter = document.getElementById("average");
const easyfilter = document.getElementById("easy");
const dificultlabel = document.getElementById ("dificult")
const orderlabel= document.getElementById ("order")
const dashboard = document.getElementById("dashboard");

aToz.addEventListener("click", ordenardeaz);
function ordenardeaz() {
    orderlabel.innerHTML = "Ordenar: A-Z";
    finalList = initialList.sort(datos.az);
    fillDashboard(finalList);
}
zToa.addEventListener("click", ordenardeza);
function ordenardeza() {
    orderlabel.innerHTML = "Ordenar: Z-A";
    finalList = initialList.sort(datos.za)
    fillDashboard(finalList);
}

tankfilter.addEventListener("click", rolefiltertank);
function rolefiltertank() {
    finalList = initialList.filter(champ => champ.tags.includes("Tank"));
    fillDashboard(finalList);
}

fightfilter.addEventListener("click", rolefilterfighter);
function rolefilterfighter() {
    finalList = initialList.filter(champ => champ.tags.includes("Fighter"));
    fillDashboard(finalList);
}


supportfilter.addEventListener("click", rolefiltersupport);
function rolefiltersupport() {
    finalList = initialList.filter(champ => champ.tags.includes("Support"));
    fillDashboard(finalList);
}
magefilter.addEventListener("click", rolefiltermage);
function rolefiltermage() {
    finalList = initialList.filter(champ => champ.tags.includes("Mage"));
    fillDashboard(finalList);
}
assasingfilter.addEventListener("click", rolefilterassasing);
function rolefilterassasing() {
    finalList = initialList.filter(champ => champ.tags.includes("Assasing"));
    fillDashboard(finalList);
}
marksmanfilter.addEventListener("click", rolefiltermarksman);
function rolefiltermarksman() {
    finalList = initialList.filter(champ => champ.tags.includes("Marksman"));
    fillDashboard(finalList);
}
hardfilter.addEventListener("click", dificultfilterHard);

function dificultfilterHard() {
    dificultlabel.innerHTML = "Dificultad: Hard";
    finalList = initialList.filter(champ => champ.difficulty >= 7);
    console.log(finalList);
    fillDashboard(finalList);
}
averagefilter.addEventListener("click", dificultfilterAverage);

function dificultfilterAverage() {
    dificultlabel.innerHTML = "Dificultad: Average";
    finalList = initialList.filter(champ => champ.difficulty >= 4 && champ.difficulty <= 6);
    console.log(finalList);
    fillDashboard(finalList);
}
easyfilter.addEventListener("click", dificultfilterEasy);

function dificultfilterEasy() {
    dificultlabel.innerHTML = "Dificultad: Easy";
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