import datos from './data.js';
// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

/*const validatebuton = document.getElementById('btn');
validatebuton.addEventListener('click', allChamps);*/

const dashboard = document.getElementById('dashboard');

window.onload = function allChamps(){
var lista = datos.allCards();

lista.forEach(element => {

   var div = document.createElement("div");
   div.className = "tarjeta";
   div.id = element.name;

   var img = document.createElement("img");
   img.src = element.image;

   var photoname = document.createElement("h5");
   photoname.innerHTML = element.name;

   div.appendChild(img);
   div.appendChild(photoname);
   dashboard.appendChild(div);
   
});
  
 /*
 <div class="tarjeta">
  <img src="https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png" alt="Akali build guides">
  <h5>Akali</h5>
</div>*/  
    
   
//document.getElementById("dashboard").innerHTML = ();

}


