// map()
let data = [12, 22, 10, 2, 9];
let doubles = data.map(function(elements){
    return elements * 2
})
console.log('Datos originales:', data)
console.log('Datos al doble:', doubles)

// forEach
let dobles = new Array()
let dobs = data.forEach(function(elems){
    dobles.push(elems * 2)
})
console.log(dobles)

// filters
let ages = [33, 12, 19, 18, 9]
let underAged = ages.filter((elements)=>{
    return elements < 18
})
console.log('Estos son menores de edad:' + underAged)

// sort los organiza
ages.sort()
console.log(ages)

// Pop elimina el untimo del array
ages.pop()
console.log(ages)

/*Filter
    1.- A partir del siguiente arreglo de animalitos: 
    const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];
    Genera un nuevo arreglo en el que solo se encuentren
    los conejos del arreglo original. */ 
const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },
    { nombre: "esteban"   , especie: "perro" },
    { nombre: "fabiruchis", especie: "tortuga" },
    { nombre: "anita"     , especie: "gato" }, 
    { nombre: "miranda"   , especie: "conejo" },
    { nombre: "lucas"     , especie: "conejo" },
    { nombre: "Horacia"   , especie: "tortuga" } 
    ];
let conejos = animalitos.filter((cone)=>{
    return cone.especie == "conejo"
})
console.log(conejos)
/*Map
    2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];
    Genera un nuevo arreglo que contenga los nombres de todas 
    las mascotas. */
const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];
let nombres = mascotas.map((elements)=>{
    return elements.nombre
})
console.log(nombres)
