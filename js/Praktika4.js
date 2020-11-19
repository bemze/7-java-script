
    function suma(list) {
        if (typeof list !== 'object') {
            return 'Netinkama';
        }
        //  if (typeof list !== 'number') {
        //  continue;
        // }
        if (list.length === 0) {
             return 'Tuscias sarasas';
        }
        // if (value instanceof Array) {
        //     alert('value is Array!');
        //   } else {
        //     alert('Not an array');
        //   }

        let result = 0;
        for (let i = 0; i < list.length; i++) {
            const sk = list[i];
            if (typeof sk !== 'number'){
                return sk + ' Netinkamas formatas';
                // console.log(sk + ' Netinkamas formatas'); break ;
            }
            result += sk;
        }
    return result;
    
    }
   const medis = suma([10, 15, 8]);
   console.log(medis / 3);

console.log(suma(true));   
console.log(suma("zodis"));   
console.log(suma([]));  

console.log(suma([10,'8', 9, 2, 1, 0, 4]));   
console.log(suma([10, 'a', 9, 2, 1, 0, 4]));   

    
console.log(suma([10, 8, 9, 2, 1, 0, 4]));   
console.log(suma([10, 8, -9, 2, 1, 0, 4]));   
console.log(suma([10, true, 9, 2, 1, 0, 4]));   
console.log(suma([10, 8, 9, 2, 1, 0, 4]));










