import lol from './data/lol/lol.js';
const dataLol = lol.data

const datos = {
//Funcion que retorna una lista con objetos para poder hacer los boxes
    allCards: () => {
        const championname = [];
        for (let key in dataLol) {
            let card = {
                name: dataLol[key].name,
                image: dataLol[key].img,
                difficulty: dataLol[key].info.difficulty,
                tags: dataLol[key].tags
            }
            championname.push(card);
        }
        return championname;
    },
//Funcion para filtrar por role
    filterbyRole: (list, rolevalue) => {
        
        if (rolevalue == 'Todos los Roles') {
            return list;
        } else {
            return list.filter(champ => champ.tags.includes(rolevalue));
        }
    },
//Funcion para filtrar por dificultad
    filterbyDificult: (list, dificultvalue) =>{
    let dificultlist = [];
    if (dificultvalue == 'Todas las Dificultades') {
        dificultlist = list;
    } else if (dificultvalue == 'Dificultad: Easy') {
        dificultlist = list.filter(champ => champ.difficulty < 4);
    } else if (dificultvalue == 'Dificultad: Average') {
        dificultlist = list.filter(champ => champ.difficulty >= 4 && champ.difficulty <= 6);
    } else {
        dificultlist = list.filter(champ => champ.difficulty >= 7);
    }
    return dificultlist;
},
//Ordenar de la az y za
az: (a, b) => {
    return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
},

za: (a, b) => {
    return ((b.name < a.name) ? -1 : ((b.name > a.name) ? 1 : 0));
},

sortAlfabeticaly: (list, alfabeticvalue,) => {
    
if (alfabeticvalue == 'Ordenar: A-Z') {
    return list.sort(datos.az);
}
else { 
    return list.sort(datos.za);}
},
//Funcion que recibe nombre y retorna objeto con la data del campeon 
givemeThechampion:(championName1)=>{

    for (const key in dataLol) {
        if (dataLol[key].name == championName1) {
            return dataLol[key];
        }
    }
},

}

export default datos;