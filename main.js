import datos from './data.js';

let initialList = datos.allCards();
let finalList = [];

const aToz = document.getElementById("az");
const zToa = document.getElementById("za");
const dashboard = document.getElementById("dashboard");

aToz.addEventListener("click", ordenardeaz);
function ordenardeaz() {
   console.log(initialList);
   initialList.sort(datos.az);
   finalList = initialList;
   fillDashboard(finalList);
}

zToa.addEventListener("click", ordenardeza);
function ordenardeza() {
   initialList.sort(datos.za)
   finalList = initialList;
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



  
