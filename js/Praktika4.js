// const skaiciai = [9, 8, 8, 7, 10];

function pazymiuSumuma(list) {
   let rez = 0;
   for (let i = 0; i < list.lenght; i++){
       const pazymys = list[i];
        rez = rez + pazymys;   
    }
    console.log(rez);
}
pazymiuSumuma([9, 8, 8, 7, 10]);

// function pazymiuVidurkis(list) {
//     let suma = 0;
//     const kiekis = list.length;

//     for (let i = 0; i < kiekis; i++) {
//         const pazymys = list[i];
//         suma = suma + pazymys;
//     }

//     const vidurkis = suma;

//     if (kiekis === 0) {
//         console.log('Neturi pazymiu...');
//     } else {
//         console.log(`${vidurkis}.`);
//     }
// }

// pazymiuVidurkis([5, 8, 9]);
// pazymiuVidurkis([5, 8, 9, 7]);
// pazymiuVidurkis([]);
// pazymiuVidurkis([10, 10, 10, 10, 10, 10, 10]); 



