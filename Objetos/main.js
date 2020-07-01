let snoopy = {
    nombre: "Snoopy",
    animal: "Perro",
    programa: "Charlie Brown",
    color: "Blanco",
    ficticio: true,
    raza: "beagle"
}
console.log (snoopy.nombre)
console.log (snoopy.color)
snoopy.color = "Blanco con negro"
console.log(snoopy.color)

let huesos = {
    nombre: "Ayudante de Santa",
    programa: "Los Simpson",
    animal: "Perro",
    color: "Cafe",
    raza: "Galgo",
    ficticio: true,
    ladra: ()=>{
        return "Waf Waf"
    },
    comer: (comida)=>{
        if (comida == "Croquetas"){
            return "Huesos come Croquetas"
        }
        else{
            return "Huesos come otra cosa"
        }
    },
    jugar: (juego)=>{
        return `Huesos juesga ${'Futbol'}`
    }
}
console.log(huesos.ladra())
console.log(huesos.comer("Croquetas"))
console.log(huesos.jugar("Futbol"))

let scooby = {
    nombre: "Scooby Doo",
    animal: "Perro",
    color: "Cafe",
    raza: "Gran Danes",
    ficticio: true,
    hablar: function(){
        return `Me llamo ${this.nombre} y como con ${snoopy.nombre}`
    }
}
console.log(scooby.hablar())

// Ejercicio Pinguinos
// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
// 	https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)
// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
// 3.- Escribe otra línea de código que añada una nueva propiedad a tu 
//     pingüino llamada puedeVolar y asignalo a falso.
//     Nota: No modifiques el código original donde definiste a tu pingüino
// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos
//     Nota de la Nota: No modifiques el código previo. Hazlo en una
//     nueva línea de código.
// 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
//     consola el mismo mensaje que escribimos para la bienvenida.
//     Esta vez, emplea la palabra reservada "this" para resolverlo.
// 6.- Sin modificar el código previo, cambia el nombre del pingüino a 
//     "Señor Pingu" y llama al método "saludar" para verificar que 
//     se ha aplicado el cambio correctamente.
// 7.- Escribe otro método llamado 'volar'. Con este método imprime en 
//     consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
//     en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
//     "No puedo volar :(" 
// 8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
//     llamar el método 'volar' para verificar que el cambio se efectuó
//     correctamente.

let myPenguin = {
    nombre: "Alfred",
    origen: "Zig et Puce",
    creador: "Alain Saint-Organ",
    puedoVolar: true,
    saludar: function(){
        return `Hola, soy el pinguino ${this.nombre}`
    },  
}
console.log(`Hola, soy el pinguino ${myPenguin.nombre}`)

function graznar(){
    return "kaww kaww"
}
console.log(graznar())

myPenguin.nombre = "Señor Pingu"
console.log(myPenguin.saludar())

function volar(){
    if (myPenguin.puedoVolar == true){
        console.log("Puedo volaaaar!!!!")
    }
    else{
        console.log("No puedo volar")
    }
}
volar()

// 9.- Crea un objeto que contenga información de una receta 
//     para preparar Mole. Debe contener las propiedades de
//     título (string), porciones (numero) e ingredientes (un
//     arreglo de strings). Muestra la información de la receta
//     para que luzca así:
//     Mole
//     Porciones: 2
//     Ingredientes:
//     canela
//     comino
//     cocoa


let mole = {
    titulo: "Mole Dany",
    porciones: 2,
    ingredientes: ["Canela", "Comino", "Cocoa"],
}
console.log(`Mole ${mole.titulo} 
Porciones ${mole.porciones} 
Ingredientes ${mole.ingredientes}`)

// 10.- Crea un arreglo de objetos, donde cada objeto describa 
//     un libro y tenga las propiedades para titulo(string),
//     autor(string) y leido(booleano para indicar si se ha 
//     leido o no). Itera sobre el arreglo de libros, y por 
//     cada libro imprime el titulo y autor, junto con su 
//     status de lectura (si ya ha sido leído, o no).

let libros = [
    {
        nombre: "Harry Potter",
        autor: "Daniel Salame",
        leido: true,
    },
    {
        nombre: "Harry Potter 2",
        autor: "David Zonana",
        leido: false,
    },
    {
        nombre: "Harry Potter 3",
        autor: "Pedrito",
        leido: false,
    }
]
for (i = 0; i < libros.length; i++) {
console.log(libros[i].nombre)
console.log(libros[i].autor)
console.log(libros[i].leido)
}