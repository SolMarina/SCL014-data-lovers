import datos from './data.js';

let initialList = datos.allCards();


//Elementos de la pagina con los que interactuo orden buscador
const buscardor = document.getElementById('buscador');

//Elementos de la pagina con los que interactuo orden alfabetico
const orderlabel = document.getElementById('order');
const aToz = document.getElementById('az');
const zToa = document.getElementById('za');

//Elementos de la pagina con los que interactuo por roles
const roleOrder = document.getElementById('roleOrder');
const tankfilter = document.getElementById('tank');
const fightfilter = document.getElementById('fighter');
const supportfilter = document.getElementById('support');
const magefilter = document.getElementById('mage');
const assasinfilter = document.getElementById('assasin');
const marksmanfilter = document.getElementById('marksman');
const allrole = document.getElementById('todos');

//Elementos de la pagina con los que interactuo por dificultad
const dificultlabel = document.getElementById('dificult')
const easyfilter = document.getElementById('easy');
const averagefilter = document.getElementById('average');
const hardfilter = document.getElementById('hard');
const alldificult = document.getElementById('all');
//Elemento para imprimir cajitas
const dashboard = document.getElementById('dashboard');

//Funcion para unificar los filtros
function joinedFilter() {

    let alfabeticvalue = orderlabel.innerHTML;
    let rolevalue = roleOrder.innerHTML;
    let dificultvalue = dificultlabel.innerHTML;

    let alfabeticlist = datos.sortAlfabeticaly(initialList, alfabeticvalue);

    let rolelist = datos.filterbyRole(alfabeticlist, rolevalue);

    let dificultList = datos.filterbyDificult(rolelist, dificultvalue);

    fillDashboard(dificultList);
}

//Funcion para el buscador
buscardor.addEventListener('keyup', findName);
function findName() {
    let finalList = [];
    let stringName = buscardor.value;
    finalList = initialList.filter(champ => champ.name.toLowerCase().includes(stringName.toLowerCase()));
    fillDashboard(finalList);
}

aToz.addEventListener('click', ordenardeaz);
function ordenardeaz() {
    orderlabel.innerHTML = 'Ordenar: A-Z';
    joinedFilter()
}
zToa.addEventListener('click', ordenardeza);
function ordenardeza() {
    orderlabel.innerHTML = 'Ordenar: Z-A';
    joinedFilter()
}

allrole.addEventListener('click', rolefilterall);
function rolefilterall() {
    roleOrder.innerHTML = 'Todos los Roles';
    joinedFilter()
}
alldificult.addEventListener('click', dificultfiltertodos);
function dificultfiltertodos() {
    dificultlabel.innerHTML = 'Todas las Dificultades';
    joinedFilter()
}

tankfilter.addEventListener('click', rolefiltertank);
function rolefiltertank() {
    roleOrder.innerHTML = 'Tank';
    joinedFilter()
}

fightfilter.addEventListener('click', rolefilterfighter);
function rolefilterfighter() {
    roleOrder.innerHTML = 'Fighter';
    joinedFilter();
}


supportfilter.addEventListener('click', rolefiltersupport);
function rolefiltersupport() {
    roleOrder.innerHTML = 'Support';
    joinedFilter();
}

magefilter.addEventListener('click', rolefiltermage);
function rolefiltermage() {
    roleOrder.innerHTML = 'Mage';
    joinedFilter();

}

assasinfilter.addEventListener('click', rolefilterassasin);
function rolefilterassasin() {
    roleOrder.innerHTML = 'Assassin';
    joinedFilter();

}

marksmanfilter.addEventListener('click', rolefiltermarksman);
function rolefiltermarksman() {
    roleOrder.innerHTML = 'Marksman';
    joinedFilter();
}

hardfilter.addEventListener('click', dificultfilterHard);
function dificultfilterHard() {
    dificultlabel.innerHTML = 'Dificultad: Hard';
    joinedFilter();
}


averagefilter.addEventListener('click', dificultfilterAverage);
function dificultfilterAverage() {
    dificultlabel.innerHTML = 'Dificultad: Average';
    joinedFilter();
}


easyfilter.addEventListener('click', dificultfilterEasy);
function dificultfilterEasy() {
    dificultlabel.innerHTML = 'Dificultad: Easy';
    joinedFilter();
}

//Funcion para limpiar el Dashboard
function clearDashboard() {

    while (dashboard.firstChild) {
        dashboard.removeChild(dashboard.firstChild);
    }
}

//Funcion para imprimir cajitas
function fillDashboard(desiredList) {
    clearDashboard();
    desiredList.forEach(element => {

        let box = document.createElement('a');
        box.className = 'tarjeta';
        box.id = element.name;
        box.href = 'vista.html?' + element.name;

        let img = document.createElement('img');
        img.src = element.image;

        let photoname = document.createElement('h5');
        photoname.innerHTML = element.name;

        box.appendChild(img);
        box.appendChild(photoname);
        dashboard.appendChild(box);

    })
}

//Funcion para que aparezcan las cajitas al cargar la pagina
window.onload = function allChamps() {

    fillDashboard(initialList);

}