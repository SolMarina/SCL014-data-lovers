
import datos from './data.js';

window.onload = function cambiar() {

    const pageURL = window.location.search;
    const champname = pageURL.replace('?', '').replace('%20', ' ').replace('%27', "'");
    const pic = document.getElementById('foto');
    const labelName = document.getElementById('name1');
    const labelTitle = document.getElementById('title1')
    const labelblurb = document.getElementById('blurb1')

    const hero = datos.givemeThechampion(champname);
            pic.src = hero.splash;
            labelName.innerText = hero.name;
            labelTitle.innerText = hero.title;
            labelblurb.innerHTML = hero.blurb;
}
