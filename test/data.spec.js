import datos from '../src/data.js';
import lol from '../src/data/lol/lol.js';

let list = [
  {name: "Aatrox", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", difficulty: 4, tags:["Fighter","Tank"]},
  {name: "Ahri", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png", difficulty: 5, tags:["Mage","Assassin"]},
  {name: "Akali", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png", difficulty: 7, tags:["Assassin"]},
  {name: "Amumu", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png", difficulty: 3, tags:["Tank", "Mage"]}
];


describe('datos', () => {
  
  test('debería ser un objeto', () => {
    expect(typeof datos).toBe('object');
  });

  describe('datos.filterbyRole', () => {


    test('debería ser una función', () => {
      expect(typeof datos.filterbyRole).toBe('function');
    });
    test('debería retornar lista filtrada por Fighter"', () => {
      expect(datos.filterbyRole(list, "Fighter") === [{name: "Aatrox", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", difficulty: 4, tags:["Fighter","Tank"]}]);
    });
    test('debería retornar lista original"', () => {
      expect(datos.filterbyRole(list, "Todos los Roles") === list);
    });
  
  }),


  describe('datos.filterbyDificult', () => {

    test('debería retornar lista original"', () => {
      expect(datos.filterbyDificult(list, "Todas las Dificultades") === list);
    });
    
    test('debería retornar lista de dificultad: Easy', () => {
      expect(datos.filterbyDificult(list, "Dificultad: Easy") === [{name: "Amumu", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png", difficulty: 3, tags:["Tank", "Mage"]}]);
    });
  
    test('debería retornar lista de dificultad: Average', () => {
      expect(datos.filterbyDificult(list, "Dificultad: Average") === [{name: "Akali", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png", difficulty: 7, tags:["Assassin"]}]);
    });
  
    test('debería retornar lista de dificultad: Hard', () => {
      expect(datos.filterbyDificult(list, "Dificultad: Hard") === [{name: "Akali", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png", difficulty: 7, tags:["Assassin"]}]);
    });
  

  
  }),

  describe('datos.sortAlfabeticaly', () => {

    test('debería retornar lista original', () => {
    expect(datos.sortAlfabeticaly (list, "Ordenar: A-Z") === list);
  });


    test('debería retornar lista original', () => {
    expect(datos.sortAlfabeticaly (list, "Ordenar: Z-A") === list);
  });
   
  
  })

   });

describe ('lol',()=>{

  test('debería ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });


});