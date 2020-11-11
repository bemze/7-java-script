// spausdiname sveikaji skaiciu
console.log(88888);

// 2 skaiciai vs desimtainis - kaip ir koks kablelis
console.log(3 , 14)
console.log(3.14)

// kaip spausdinamas tekstas
console.log ("Labas rytas");
console.log ("1984-04-05");

// KINTAMIEJI - kitas topikas

// Iniciavimo budai:
//     const - tai musu pirmasis pasirinkimas
//     let - WebGLShaderPrecisionFormat, tik jei yra reikalas keisti reiksme
//     var - nenaudotinas

// Kintamuju tipai (pagal reiksmes):
//     skaiciai (number)- 2020, 3,14, -7
//     tekstai (string) - "labas", "ka tu?", ":)"
//      logines (Boolean) - true, false
//      sarasai (array) - []
//      objektai (object) - {}



const pirmasSkaicius = 8;
const antrasSkaicius = 10;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(suma);

console.log(pirmasSkaicius, "+", antrasSkaicius, "=", suma);

const vardas = 'Mantas'
const amzius = 36;
console.log (vardas);
console.log (amzius);

const sakinys = vardas + ' yra ' + amzius + ' metu amziaus.';
console.log(sakinys)

// PVZ BEMZE YRA AFIGIENAS ir NEPAKARTOJAMAS

const nikas = 'Bemze';
const savybes = "afigienas ir nepakartojamas";
const posakis = nikas + ' yra ' + savybes + ".";
console.log(posakis);




const heroName = "Chuck";
const heroLastname = "Norris";
const birth = 1940;
const metai = 2020;

const sakinys2 = heroName + " " + heroLastname + " " + "(" +  ( metai - birth) + ")" +".";
console.log(sakinys2);





