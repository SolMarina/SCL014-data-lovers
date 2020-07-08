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

}



export default datos;

