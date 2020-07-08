import lol from "./data/lol/lol.js";

const dataLol = lol.data

const datos = {
    allCards: () => {
        const championname = [];
        for (let champ in dataLol) {
            let card = {
                name: dataLol[champ].name,
                image: dataLol[champ].img,
                difficulty: dataLol[champ].info.difficulty,
                tags: dataLol[champ].tags
            }
            championname.push(card);
        }

        return championname;
    },

    az: (a, b) => {
        return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
    },

    za: (a, b) => {
        return ((b.name < a.name) ? -1 : ((b.name > a.name) ? 1 : 0));
    },

    filterbyRole: (list, rolevalue) => {
        let rolelist = [];
        if (rolevalue == "Todos los Roles") {
            return rolelist = list;
        } else {
            return rolelist = list.filter(champ => champ.tags.includes(rolevalue));
        }
    },

    filterbyDificult: (list, dificultvalue) =>{
    let dificultlist = [];
    if (dificultvalue == "Todas las Dificultades") {
        dificultlist = list;
    } else if (dificultvalue == "Dificultad: Easy") {
        dificultlist = list.filter(champ => champ.difficulty < 4);
    } else if (dificultvalue == "Dificultad: Average") {
        dificultlist = list.filter(champ => champ.difficulty >= 4 && champ.difficulty <= 6);
    } else {
        dificultlist = list.filter(champ => champ.difficulty >= 7);
    }
    return dificultlist;
},
sortAlfabeticaly: (list, alfabeticvalue,) => {
    let alfabeticlist = []
if (alfabeticvalue == "Ordenar: A-Z") {
    return alfabeticlist = list.sort(datos.az);
}
else { 
    return alfabeticlist = list.sort(datos.za);}
},


}



export default datos;

