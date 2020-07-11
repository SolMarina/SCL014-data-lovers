import lol from "./data/lol/lol.js";
const dataLol = lol.data



window.onload = function cambiar() {

    const pageURL = window.location.search;
    console.log(pageURL);

    const champname = pageURL.replace('?', "").replace('%20', " ").replace('%27', "'");
    console.log(champname);


    const pic = document.getElementById("foto");
    const labelName = document.getElementById("name1");
    const labelTitle = document.getElementById("title1")
    const labelblurb = document.getElementById("blurb1")

    for (const hero in dataLol) {
        if (champname == dataLol[hero].name) {
            pic.src = dataLol[hero].splash;
            labelName.innerText = dataLol[hero].name;
            labelTitle.innerText = dataLol[hero].title;
            labelblurb.innerHTML = dataLol[hero].blurb;
        }
    }

}
