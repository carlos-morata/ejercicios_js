console.log("Hola mundo");

const frutas = ["mango", "pera", "naranja", "llimon", "papaya"];

for(let i = 0; i < frutas.length; i++) { // i=0....2 -> 0....length - 1 -> 0....N-1
    
    console.log(frutas[i]); // cada palabra

    // imprime tercera letra de cada palabra
    // Búsqueda bidimensional
    console.log(frutas[i][2]);

    // imprimir sólo frutas impares --> i = 1, 3, 5, 7
    if(i % 2 !== 0) {
        console.log("Impares: ", frutas[i]);
    }
}

// "mango" --> "m:a:n:g:o"
// Entrada: frutas = ["mango", "pera", "naranja", "llimon", "papaya"];
// Salida: frutas = ["m:a:n:g:o", "p:e:r:a", "n:a:r:a:n:j:a", "l:i:m:o:n", "p:a:p:a:y:a"];

let resultadoFrutas = [];
for(let i = 0; i < frutas.length; i++) { // recorrer palabras del array
    const myFruit = frutas[i]; // guardar frutas -> Ej: Mango

    let resultado = "";
    for(let j = 0; j < myFruit.length; j++) { // recorrer cada letra de las palabras del array

        if(j < myFruit.length - 1) 
            resultado += myFruit[j] + ":"; // concatenar
         else 
            resultado += myFruit[j]; // concatenar última posición
        
    }
    console.log(resultado); // frutas transformadas
    resultadoFrutas.push(resultado); // método push para añadir elementos al array
}
console.log(resultadoFrutas);

// Otra forma con método split y join

let resultadoFrutas2 = [];
for(let i = 0; i < frutas.length; i++) {
    const myFruit = frutas[i];

    let letras = myFruit.split("");
    let resultado = letras.join(":");

    console.log(resultado);
    resultadoFrutas2.push(resultado);
}
console.log(resultadoFrutas2);

// -------------------------------

// Función
// params:
    //  prefijo numérico entre 1 y 3 cifras
    // teléfono numérico hasta 9 cifras
// return: "Llamando a +34 987987987" o "Error en los datos"

function llamar(prefijo, telefono) { // 34, 987987987

    if(
        (typeof prefijo === "number" &&  
       prefijo.toString().length >= 1 &&
       prefijo.toString().length <= 3) 
       &&
       (typeof telefono === "number" &&
       telefono.toString().length == 9)
    ) {
        return `Llamando a +${prefijo} ${telefono}`;
    } else {
        return "Error en los datos";
    }
}

// Ejecutar la función
console.log(llamar(34, 897234543));
console.log(llamar(3444, 897234543));