
for (let i = 0; i <= 10; i++){
    console.log(i)
}
const skaicius = 15
if (skaicius > 5){
    console.log("ZJBS")};
     if (skaicius < 5)
    {console.log("Nepaejo")}
    else {console.log("Kas toliau")};

// kaip suskaiciuoti pazymiu vidurki?

const marks = [10, 8, 7, 9, 2, 10];
console.log(marks);

let suma2 = 0;
suma2 = suma2 + (marks[0]);
suma2 = suma2 + (marks[1]);
suma2 = suma2 + (marks[2]); 
suma2 = suma2 + (marks[3]);
suma2 = suma2 + (marks[4]);
suma2 = suma2 + (marks[5]);
const kiekis2 = marks.length;
const vidurkis2 = suma2 / kiekis2;
console.log(vidurkis2);
console.log(marks.length)
console.log(suma2)


// const petriukoPazymiai = [2, 10, 7, 5];
// console.log(petriukoPazymiai);

// // kaip suskaiciuoti pazymiu vidurki?
// let suma = 0;
// suma = suma + petriukoPazymiai[0];
// suma = suma + petriukoPazymiai[1];
// suma = suma + petriukoPazymiai[2];
// suma = suma + petriukoPazymiai[3];
// // suma = suma + petriukoPazymiai[4];

// const kiekis = petriukoPazymiai.length;
// const vidurkis = suma / kiekis;

// console.log(vidurkis);

// Edita Zabiele 35 metu

const vardas = "Edita";
const pavarde = "Zabiele";
const amzius = 1985;

const posakis = (`${vardas} ${pavarde} yra (${2020 - amzius}) metu.`);
console.log(posakis);


let turiu = 1111;
const sausis = 100;
const vasaris = 200;

turiu = turiu + sausis;
// const viso = turiu + vasaris;
console.log(turiu);

turiu = turiu + vasaris;
console.log(turiu);
 

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];
console.log(miestai);

for (let i = miestai.length - 1; i >= 0; i--){
    console.log(miestai[i]);
}

const zodis = "besikiskiapopusdeliaudamasis"
for (let i = 0; i < zodis.length; i=i+5){
    console.log(zodis[i]);
}

const zod = "braskyte";
for (let i = 0; i < zod.length; i++){
    console.log(zod[i]);
}

console.clear();


const sk = 8;
console.log(sk);

const zo1 = "Begti";
console.log(zo1);

const eile = [10, 15, 16, 17, 20];
let sum = 0;
sum = sum + eile[0];
sum = sum + eile[1];
sum = sum + eile[2];
sum = sum + eile[3];
sum = sum + eile[4];
console.log(sum);


const zo2 = ["begti", "eiti", "ciuozti"];
console.log(zo2);
console.log(zo2[0]);
let visiZo2 = "";
visiZo2 = visiZo2 + zo2[0];
visiZo2 = visiZo2 + ', ' + zo2[1];
visiZo2 = visiZo2 + ', ' + zo2[2];
console.log(visiZo2)
console.log(`begti, eiti, ciuozti`);

// logika 10-15+16-17+20

let i = 0;
i = i + eile[0];
i = i - eile[1];
i = i + eile[2];
i = i - eile[3];
i = i + eile[4];
console.log(i);

let sar = "";
sar = sar + zo2[2];
sar = sar + ", " + zo2[1];
sar = sar + ', ' + zo2[0];
console.log(sar);


const no = 10;
const no1 = 11;

if (no >= no1){
    console.log("Pomidoras");
}
if (no < no1){
    console.log("Bandykite dar karta");
}

if (no < no1){
    console.log(true);
}
if (no > no1){
    console.log(false);
}
if (no === no1){
    console.log("equal");
}
if (no !== no1){
    console.log("Nelygus");
}

// const abc = "Braskyte";
// const abcd = "Braskyte"
// console.log(abc.length);
// console.log(abcd.length);

// if (abc.length > abcd.length){
//     console.log("Taip ir norejau");
// }

//    else if (abc.length === abcd.length){
//         console.log("Paieskok ilgesnio zodzio");
//     }
//     else {console.log("radai lygybe");
// }

const position = "Misi";
if (position === "Suniukas"){
    console.log("Keisk poza");
} else if ( position === "Doogyy"){
    console.log("Neblogai");
} else {console.log("Nemoki p****, nereikia list");
}


const paz = [10, 5, 10];
let sum1 = 0;
sum1 = sum1 + paz[0];
sum1 = sum1 + paz[1];
sum1 = sum1 + paz[2];
console.log(sum1);
console.log(sum1 / paz.length);

const aa ="Arkassssssss";
const bb = "Karves";

console.log(aa.length);

if (aa.length > bb.length){
    console.log(true);}
    // console.log(false);}


// } else if (aa.length < bb.length){
//     console.log(false);
// } else {console.log("lygu")}

// if (aa.length > bb.length){
//     console.log(true)
// } 
// if (aa.length >= bb.length){
//     console.log(true)
// } 
// if (aa.length <= bb.length){
//     console.log(true)
// } 



// if (aa.length > bb.length){
//     console.log(true)
// } 

// if (aa.length < bb.length){
//     console.log(false);
// } 

// if(aa.length == bb.length) {
//     console.log("lygu")
// }
// if(aa.length != bb.length) {
//     console.log("lygu")
// }
// if(!aa.length == bb.length) {
//     console.log("lygu")
// }


const zzz = [8, 10, 10, 15, 20, 20, 1, 10];
const xxx = [ 1, 2, 4, 10, 5, 6, 10];
console.log(zzz.length);
console.log(xxx.length);

if (zzz.length > xxx.length){
    console.log("Didesnis");
} else if (zzz.length < xxx.length){
    console.log('Mazesnis');
} else if (zzz.length === xxx.length){
    console.log('Lygu');
}

const k = 4;
// let count = 0;
for (let i =0; i < k; i++){
    console.log(k, i);
}

for (let i = 0; i <= 4; i++){
    console.log(i);
}

const alga = 1212;
const men = 12;
let pajamos = 0;

for (let i = 1; i <= men; i++){
    pajamos = pajamos + alga;
    console.log(`${i}) ${pajamos}`);
}

// const w = "Lietuva";
// let back = "";
// for (i = 0; i < w.length; i++){
//     const letter = i; 
// }
// console.log(text, '->', back);