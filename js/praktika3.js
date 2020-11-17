
// const skaicius1 = 5;
// const skaicius2 = 10;
// const suma = skaicius1 + skaicius2;
// console.log(suma);

// function skaiciavimas (a, b){
//     const suma = a / b;
//     console.log(suma)
// }

// skaiciavimas(2, 10);
// skaiciavimas(5, 10);
// skaiciavimas(2, 110);
// skaiciavimas(2, 150);
// skaiciavimas(2664, 10);

const sk = [10, 15, 20, 30, 40]
console.log(sk);

let suma = 0;
suma = suma + sk[0];
suma = suma - sk[1];
suma = suma + sk[2];
suma = suma - sk[3];
suma = suma + sk[4];

console.log(suma);

const city = ['Utena', 'Siauliai', "PNV"];
console.log (city);
let visi = "";
visi = visi + city[2];
visi = visi + ", " + city[1];
visi = visi + ", " + city[0];
console.log(visi);



const skaicius1 = 15;
const skaicius2 = 15;

if (skaicius1 > skaicius2){
    console.log("Pomidoras");
}
if (skaicius1 < skaicius2){
    console.log("Bandykite dar karta");
} else if (skaicius1===skaicius2){
    console.log("Lygybe");
}

const zodis = "Braskyte";
const zodis1 = "Braskyte";
console.log(zodis.length);
console.log(zodis1.length);

if (zodis.length > zodis1.length){
    console.log(`${zodis} ilgesnis`)
}
if (zodis.length < zodis1.length){
    console.log(`${zodis1} ilgesnis`)
}
if (zodis.length === zodis1.length){
    console.log(`Zodziai lygus`)
}


// 0 - 4            = 10
// -50 - 50         = 0
// 0 - 100          = 5050
// 0 - 0            = 0
// 574 - 815        = didelis teigiamas sveikas
// -70 - 30         = santykinai mazas neigiamas sveikas

const nuo = 30;
const iki = 30;

let sum = 0;

if (nuo > iki){
    console.log("Salyga netinkama")
}
else {
    for (let i = nuo; i <= iki; i++){
        sum = sum + i;
        // console.log(i, '=>', sum);
    }
    console.log(`Skaičių intervale tarp ${nuo} ir ${iki} suma yra ${sum}.
    `);
}

const text = "Besikisk";
let back = '';

for (let i =text.length -1; i >= 0; i--){
    const letter = text[i];
    back = back + letter;

    console.log(letter);
}


console.log(`${text} '=>' ${back}`);


const wordList = ['labas', 'rytas', 'Lietuva'];


for (let i = 0; i < wordList.length; i++){
    const zodelis = wordList[i];
    let backward = "";
    // console.log(zodelis);

    for (let r = 0; r < zodelis.length; r++){
        const letter = zodelis[r];
        // console.log(letter);
        backward = letter + backward;
    }
    console.log(backward);
}
const skc = 5;
const skc1 = 10;
let sum2 = skc + skc1;

console.log(sum2);

function sumos (a, b){
    console.log(a + b)
}
sumos(10, 20);
sumos(1, 20);
sumos(10, 2);
sumos(10, 20);