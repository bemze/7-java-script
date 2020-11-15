const vardas = 'Vardenis';
const pasisveikinimas = "Labas rytas, Lietuva!";

// do not -> don't
const neiginys = "don't";
console.log(neiginys);

// Jis pasake: "Labas".
const fraze = 'Jis pasake: "Labas".';
console.log(fraze);

// Mother said: "Don't do it!".
const mother1 = "Mother said: \"Don't do it!\".";
const mother2 = 'Mother said: "Don\'t do it!".';
console.log(mother1);
console.log(mother2);

/*
<div>
    <p>Lorem upsum</p>
    <a href="#">Click me</a>
</div>
*/
const html = '<div>\
    <p>Lorem upsum</p>\
    <a href="#">Click me</a>\
</div>';
console.log(html);

/*
<div>
    <p>Lorem upsum its amet</p>
    <a href="#">Don't click me</a>
</div>
*/
const html2 = `<div>
    <p>Lorem upsum its amet</p>
    <a href="#">Don't click me</a>
</div>`;
console.log(html2);

console.clear();

// Joniukas ir Gretute ejo i miska.
const berniukas = 'Joniukas';
const mergaite = 'Gretute';
const judejimoBudas = 'ejo';
const vieta = 'miska';

// const pasaka = berniukas + ' ir ' + mergaite + ' ' + judejimoBudas + ' i ' + vieta + '.';
const pasaka = `${berniukas} ir ${mergaite} ${judejimoBudas} i ${vieta}.`;
console.log(pasaka);


// Chuck Norris (80).
const heroName = 'Chuck';
const heroLast = 'Norris';
const birth = 1940;

const heroSays = `${heroName} ${heroLast} (${2020 - birth}).`;
console.log(heroSays);
/*
Saraso tipo kintamieji:
    sinonimai: sarasas, masyvas, array, matrica*
    inicijuojama su lauztyniais skliausteliai;
    viduje gali buti ivairiu tipu reiksmiu;
    bet rekomenduotina, kad butu tik vieno tipo reiksmes.
*/

// Pazymiai

const petriukoPazymiai = [2, 10, 7, 5];
console.log(petriukoPazymiai);

// kaip suskaiciuoti pazymiu vidurki?
let suma = 0;
suma = suma + petriukoPazymiai[0];
suma = suma + petriukoPazymiai[1];
suma = suma + petriukoPazymiai[2];
suma = suma + petriukoPazymiai[3];
// suma = suma + petriukoPazymiai[4];

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);




const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
console.log(miestai);

console.log(miestai[3]);
console.log(miestai[1]);
console.log(miestai[2]);
console.log(miestai[0]);
