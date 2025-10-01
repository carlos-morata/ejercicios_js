// Eliminar duplicados
// [1, 2, 33, 4, 55, 55, 6, 6, 7]
// return [1, 2, 33, 4, 55, 6, 7] -> 

function eliminarDuplicados(datos) {
    let result = []; // array para almacenar los datos sin duplicar
    for(let i = 0; i < datos.length; i++) {

        if(!result.includes(datos[i])) { // comprueba que el número no está duplicado. Si no incluye x 
                                        // número lo almacena en la variable result

            result.push(datos[i]); // almacena los números sin repetir
        }
    }
    return result;
}
console.log(eliminarDuplicados([1, 2, 33, 4, 55, 55, 6, 6, 7]));

// Otra forma: -> Esto hace el método includes por "detrás"
function eliminarDuplicados2(datos) {
    let result = []; // array para almacenar los datos sin duplicar
    for(let i = 0; i < datos.length; i++) { // recorre cada número

        let encontrado = false;

        for(let j = 0; j < result.length; j++) { // comprueba si ya se guardó el número
            if(result[j] === datos[i]) {
                encontrado = true;
                break;
            }

            if(encontrado === false) {
                result.push(datos[i]); // almacenar en array de datos sin duplicar
            } else {
                console.log("El número estaba repetido: " + datos[i]);
            }
        }
    }
    return result;
}
console.log(eliminarDuplicados2([1, 2, 33, 4, 55, 55, 6, 6, 7]));

// Otra forma: -> Utilizando el bucle while
function eliminarDuplicados3(datos){
    let result = []; // array datos sin duplicar

    let i = 0;

    while(i < datos.length){
        if(!result.includes(datos[i])){
            result.push(datos[i]); // almacenar en array de datos sin duplicar
        }
        i++;
    }

    return result;
}

console.log(eliminarDuplicados3([1,2,33,33,4,55,55,6,6,7]));

// -------------------------------------------
// Bucle

let year = 1995;
while(year <= 2025) {
    if(year % 2 === 0) {
        console.log(year);
    }

    if(year === 2020) {
        break;
    }

    year++;
}

// This problem was asked by Apple.
// A fixed point in an array is an element whose value is equal to its index. Given
// a sorted array of distinct elements, return a fixed point, if one exists.
// Otherwise, return False.
// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you
// should return False

//// Este problema fue planteado por Apple.
// Un punto fijo en un array es un elemento cuyo valor es igual a su índice. Dado un array ordenado de elementos distintos, se devuelve un punto fijo, si existe.
// De lo contrario, se devuelve Falso.
// Por ejemplo, dado [-6, 0, 2, 40], se debe devolver 2. Dado [1, 5, 7, 8], se debe devolver Falso.


function igual(array) {

    for(let i = 0; i < array.length; i++) {

            if(array[i] === i) {
                return i;
            }
    }
        return false;
}
console.log(igual([5, 1, 3, 33, 8]));
