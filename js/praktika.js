console.log("labas");
console.log(8888, 15, 3.14, )
console.log("15-15")


const pirmasSkaicius = 15;
const antrasSkaicius = 20;
const skaicius = pirmasSkaicius + antrasSkaicius;

// console.log(pirmasSkaicius + antrasSkaicius);
// console.log(pirmasSkaicius, " + ", antrasSkaicius, " = ", suma);
// console.log(suma)
console.log(pirmasSkaicius, "+", antrasSkaicius, "=", skaicius);

// const vardas = "Mantas";
// const amzius = 36;
// const mieste = "Vilniuje";
// const sakinys = vardas + " gyvena " + mieste + " ir yra " + amzius + " metu " +'.'; 

// console.log(sakinys);

console.clear();

// Kintamieji
const metai = 2020;
const laimingasSkaicius = 4;
const piReiksme = 3.14;

console.log(skaicius)

const miestas = 'Utena';
const salis = "LTU";
const sostine = "Vilnius"
console.log(sostine);

const amzius = [15, 20, 22, 33, 8];
console.log(amzius);
const menesiai = [5, 12, 4, 6, 1]
console.log(miestas);
const pelnomiTaskai = [18, 0, 20, 6, 9]
console.log(pelnomiTaskai);


// 2
const suma = metai + skaicius + piReiksme;
console.log(suma);

// const fraze = miestas + ' ' + salis + ' '+ sostine +'.';
const fraze =`${miestas} ${salis} ${sostine}`
// logika: 1 - 2 + 3 - 4 + 5
console.log(fraze);

let pelnomiTaskai2 = 0;
pelnomiTaskai2 = pelnomiTaskai2 + pelnomiTaskai[0];
pelnomiTaskai2 = pelnomiTaskai2 - pelnomiTaskai[1];
pelnomiTaskai2 = pelnomiTaskai2 + pelnomiTaskai[2];
pelnomiTaskai2 = pelnomiTaskai2 - pelnomiTaskai[3];
pelnomiTaskai2 = pelnomiTaskai2 + pelnomiTaskai[4];

console.log(pelnomiTaskai2)

// // let amzius2 =0; const amzius = [15, 20, 22, 33, 8];
// const amzius2 = amzius [0]-amzius[1]+amzius[2]-amzius[3]+amzius[4]; 
// console.log(amzius2); 
// console.log(15-20+22-33+8);

let amzius2 = 0;
amzius2 = amzius2 + amzius [0];
amzius2 = amzius2 - amzius [1];
amzius2 = amzius2 + amzius [2];
amzius2 = amzius2 - amzius [3];
amzius2 = amzius2 + amzius [4];
console.log(amzius2)


// Logika 1+2-4-5+6

const sk = [10, 20, 30, 40, 50, 60]
console.log(sk)

let sk1 =0;
sk1 = sk1 + sk[0];

sk1 = sk1 + sk[1];
sk1 = sk1 + sk[2];
sk1 = sk1 - sk[3];
sk1 = sk1 - sk[4];
sk1 = sk1 + sk[5];
console.log(sk1);



const miestai = ['Utena', 'Anyksciai', 'Moletai', 'Panevezys', 'Zujunai'];
// console.log(miestai);
const filmai = ['Santa Barbara', "Saule", "Warriors", "Gravitacija"]
// // console.log(filmai);
// const miestai2 = "miestai[0]" + "," + "miestai[1] + '."

// // const miestai2 = `${miestai[0]}, ${miestai[1]}, ${miestai[2]}, ${miestai[3]}, ${miestai[4]}` 
// console.log(miestai2)

let visiMiestai = "";
visiMiestai = visiMiestai + miestai[1];
visiMiestai = visiMiestai + ', ' + miestai[0];

console.log(visiMiestai)

let megstfilmai ="";
megstfilmai = megstfilmai + filmai[0]; 
megstfilmai = megstfilmai + ", " + filmai[1];
megstfilmai = megstfilmai + ", " + filmai[2];
megstfilmai = megstfilmai + ", " + filmai[3];
// megstfilmai = megstfilmai ", " + filmai[4];
console.log(megstfilmai);


const rubai = ["Marskiniai", "Kelnes", "Triusikai", "Kojines"];
let visiRubai ="";
visiRubai = visiRubai + rubai[0];
visiRubai = visiRubai + ", " + rubai[1];
visiRubai = visiRubai + ", " + rubai[2];
visiRubai = visiRubai + ", " + rubai[3];
console.log(visiRubai);





const pinigai = 1000;
const skola = 1000;

if (pinigai >= skola){
    console.log("Viskas gerai")
}

if (pinigai < skola){
    console.log("Ragas")
}


const pinigas = 8;
const pinigas2 = 10;
if (pinigas >= pinigas2){
    console.log("Pomidoras");
}
if (pinigas < pinigas2){
    console.log("Bandykite dar karta!");
}

console.log(pinigas<=pinigas2);

// const balls = "Zydras";
// if (balls== "Zalias"){
//     console.log("Nememeluoji!");
// }
// else if (balls === "Juodas" ){
//     console.log('Vel meluoji!');
// }
// else if (balls === "Zydras"){
//     console.log("Apgavikas");
// }
// else if (balls === "Rudas") {
//     console.log("Meluoji");
// }


// const pinigine = 18;
// const gryni = 15;
// viso = gryni + pinigine;
// console.log(viso);
// if (pinigine >= gryni){
//     console.log("Gerai");
// } else {
//     console.log("Nepaeis");
// }

const spalvos = "";
if (spalvos === "Zalia" ){
    console.log("Viskas ZJBS")
} else if (spalvos ==="Ruda"){
    console.log("Nesamone")
} else {console.log("nei tas nei tas")}

const kamuoliai = "Mollllten";
if (kamuoliai === "Adidas"){
    console.log("OK")
} else if (kamuoliai === "Nike") {
    console.log("Irgi OK")
} else if (kamuoliai === "Molten") {
    console.log("ir sitas baika")
} 
else {console.log("Netinkamas kamuolys")};
console.log("BlogaiS");


// Kiek kartu noriu pasisveikinti (labas)
const kiek=5;
for (let i =0; i <= 8; i++){
    console.log("Labas", i);
}
console.log("pabaiga");

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++){
    // pajamos = i * alga; pajamos +alga;
    console.log(`${i}) ${i * alga} pinigu`);
}

const skk = 8;
const skk1 = 4;

for (let i = 8; i >= skk1; i--){
    console.log(i)
}


// isvardinti skaicius nuo 10 iki 2, kas antra 

for (let i = 10; i >= 2; i = i-2){
    console.log(i);
}

for (let i = 3; i <=12; i++){
    console.log(i);
}

const miesteliai = ['Utena', 'Anyksciai', 'Moletai', 'Panevezys', 'Zujunai'];

// console.log(`Aplankiau: ${miesteliai[0]}.`)

for (let i = 2; i < miesteliai.length; i++){
    console.log(`Aplankiau: ${miesteliai[i]}`);
}