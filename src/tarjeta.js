import lol from "./data/lol/lol.js";

//const dataLol = lol.data



window.onload = function cambiar() {

    const pageURL = window.location.search;
    console.log(pageURL);

    const champname = pageURL.replace('?', "").replace('%20', " ").replace('%27', "'");

    console.log(champname);
	let input = document.getElementById("input");
    input.innerHTML = champname


}


