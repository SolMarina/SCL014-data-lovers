import datos from './data.js';

let initialList = datos.allCards();
let finalList = [];

//Elementos de la pagina con los que interactuo orden buscador
const buscardor= document.getElementById("buscador")

//Elementos de la pagina con los que interactuo orden alfabetico
const orderlabel= document.getElementById ("order");
const aToz = document.getElementById("az");
const zToa = document.getElementById("za");

//Elementos de la pagina con los que interactuo por roles
const roleOrder= document.getElementById ("roleOrder");
const tankfilter = document.getElementById("tank");
const fightfilter = document.getElementById("fighter");
const supportfilter = document.getElementById("support");
const magefilter = document.getElementById("mage");
const assasinfilter = document.getElementById("assasin");
const marksmanfilter = document.getElementById("marksman");
const allrole = document.getElementById("todos");

//Elementos de la pagina con los que interactuo por dificultad
const dificultlabel = document.getElementById ("dificult")
const easyfilter = document.getElementById("easy");
const averagefilter = document.getElementById("average");
const hardfilter = document.getElementById("hard");
const alldificult= document.getElementById("all");
//Elemento para imprimir cajitas
const dashboard = document.getElementById("dashboard");

buscardor.addEventListener('keyup', findName);
function findName(){
let stringName = buscardor.value;

    finalList = initialList.filter(champ => champ.name.toLowerCase().includes(stringName.toLowerCase()));
    console.log(finalList);
    fillDashboard(finalList);


}

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

allrole.addEventListener("click", rolefilterall);
function rolefilterall() {
    roleOrder.innerHTML = "Todos los Roles";
    finalList = initialList.filter(champ => champ.tags.includes("Todos los Roles"));
    fillDashboard(finalList);
}
alldificult.addEventListener("click", dificultfiltertodos);
function dificultfiltertodos() {
    alldificult .innerHTML = "Todas las Dificultades";
    finalList = initialList.filter(champ => champ.tags.includes("Todas las Dificultades"));
    fillDashboard(finalList);
}

tankfilter.addEventListener("click", rolefiltertank);
function rolefiltertank() {
    roleOrder.innerHTML = "Role: Tank";
    finalList = initialList.filter(champ => champ.tags.includes("Tank"));
    fillDashboard(finalList);
}

fightfilter.addEventListener("click", rolefilterfighter);
function rolefilterfighter() {
    roleOrder.innerHTML = "Role: Fighter";
    finalList = initialList.filter(champ => champ.tags.includes("Fighter"));
    fillDashboard(finalList);
}


supportfilter.addEventListener("click", rolefiltersupport);
function rolefiltersupport() {
    roleOrder.innerHTML = "Role: Support"
    finalList = initialList.filter(champ => champ.tags.includes("Support"));
    fillDashboard(finalList);
}
magefilter.addEventListener("click", rolefiltermage);
function rolefiltermage() {
    roleOrder.innerHTML = "Role: Mage"
    finalList = initialList.filter(champ => champ.tags.includes("Mage"));
    fillDashboard(finalList);
}
assasinfilter.addEventListener("click", rolefilterassasin);
function rolefilterassasin() {
    roleOrder.innerHTML = "Role: Assasin"
    finalList = initialList.filter(champ => champ.tags.includes("Assassin"));
    fillDashboard(finalList);
}
marksmanfilter.addEventListener("click", rolefiltermarksman);
function rolefiltermarksman() {
    roleOrder.innerHTML = "Role: Marksman"
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