import lol from "./data/lol/lol.js";
const dataLol = (lol.data)

const datos = {

    allCards: () => {
        console.log("entro en all cards");
        const championname= [];
        console.log(championname);
        console.log("estos son los datos ");
        console.log(dataLol);
        for (let champ in dataLol) { 
            var card = {
                name: dataLol[champ].name,
                image:dataLol[champ].img
            }
            championname.push(card);
        }
        console.log(championname);
    return championname;
    }

}



export default datos;

