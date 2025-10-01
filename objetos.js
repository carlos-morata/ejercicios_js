const usuario ={
    nombre: "Carlos",
    Apellido: "Moratinos"
}

// 1. Acceso a propiedades
console.log(usuario.nombre)
console.log(usuario["nombre"])

console.log("Antes:", usuario)
// 2. Propiedades dinámicas

    // Añadir
    usuario.direccion = "TheBridge"
    console.log("Después:", usuario)

    //Modificar
    usuario.nombre = "Rebeca"
    console.log("Cambio:", usuario)

    // Eliminar
    delete usuario.Apellido
    console.log("Eliminar:", usuario)

// 3. Métodos nativos útiles

    // Object.keys(obj)
    console.log(Object.keys(usuario))
        // Otra forma:
        const claves = Object.keys(usuario)
        console.log("claves:", claves[0])

    // Object.values(obj)
    const valores = Object.values(usuario)
    console.log("valores:", valores)


    // Object.entries(obj)
    const entries = Object.entries(usuario)
    console.log(entries)

// 4. Recorrer objetos

    // for...in
    for(let clave in usuario) {
        console.log(clave)
    }

    // for...of
    const arr = ["patata", "cocreta", "botella"]

    for(let elemento of arr) {
        console.log("elemento:", elemento)
    }

    for(let i in arr) {
        console.log("Indice:", arr[i])
    }

    for(let i in arr) {
        console.log(`INDICE: ${i} ${arr[i]}`)
    }

// 5. Objetos dentro de objetos
const persona = {
    id: 1,
    nombre: "Lucia",
    direccion: {
        ciudad: "Madrid",
        calle: "TheBridge"
    }
}

console.log(persona.direccion.ciudad)

// 6. Arrays de objetos
const pelis = [
    {
    titulo: "Matrix",
    year: 1999
    },
    {
    titulo: "El padrino",
    year: 1972
    }
]

for(let peli of pelis) {
    console.log(peli.titulo)
    console.log(peli.year)
}

// 7. Comparación de objetos

// 8. Conversión a JSON
let numero1 = 5
let numero2 = 5

console.log(numero1 === numero2)

let obj1 = {titulo: "Matrix"}
let obj2 = {titulo: "Matrix"}

console.log(obj1 === obj2)
// Comparación entre objetos siempre va a dar false, porque compara referencias y cada uno tiene una distinta.

// ### Ejercicio 1
// Crea un objeto `coche` con propiedades: `marca`, `modelo`, `año`.
// * Añade un método que devuelva la frase `"Mi coche es un [marca] [modelo]"`.

let coche = {
    marca: "Peugeot",
    modelo: "208",
    ano: "2024"
}

console.log(`Mi coche es un ${coche.marca} ${coche.modelo}`)

// ### Ejercicio 2
// Dado el objeto:
// ```js
// const libro = {
//   titulo: "El Quijote",
//   autor: "Cervantes",
//   paginas: 863
// };
// * Imprime todas las claves.
// * Imprime todos los valores.
// * Añade la propiedad `anio: 1605`.

const libro = {
    titulo: "El Quijote",
    autor: "Cervantes",
    paginas: 863
}

console.log(Object.keys(libro))
console.log(Object.values(libro))
libro.anio = 1605;
console.log(libro)

// Crea un array de objetos `pokemons`, con al menos 3 Pokémon, cada uno con: `nombre`, `tipo` y `nivel`.
// * Recorre el array e imprime `"Pikachu es de tipo Eléctrico y nivel 12"`

let pokemons = [ 
    {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    nivel: 12
    },
    {
    nombre: "Charizar",
    tipo: "Montaña",
    nivel: 5
    },
    {
    nombre: "Inventado",
    tipo: "Aire",
    nivel: 100
    }
]

for(let pokemon of pokemons) {
    console.log(`${pokemon.nombre} es de tipo ${pokemon.tipo} y nivel ${pokemon.nivel}`)

    console.log(`${pokemons[0].nombre} es de tipo ${pokemons[0].tipo} y nivel ${pokemons[0].nivel}`)

}

// ### Ejercicio 4
// Dado:
// ```js
// const usuarios = [
//   { nombre: "Ana", edad: 20 },
//   { nombre: "Luis", edad: 25 },
//   { nombre: "Marta", edad: 30 }
// ];
// ```
// * Devuelve solo los usuarios mayores de 22.
// * Devuelve los nombres en un array.

const usuarios = [
    {nombre: "Ana", edad: 20},
    {nombre: "Luis", edad: 25},
    {nombre: "Marta", edad: 30}
]

let mayores = [];
for(let nombre of usuarios) {
    if(nombre.edad > 22) {
        mayores.push(nombre)
    }
}
console.log(mayores)