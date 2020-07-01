// Variables
// Espacios en memoria donde guardamos valores

var nombre = "David";
let edad = 12;
// No podemos cambiar su valor ya que se le asigno
const apellido = "Zonana";

// Decidir que pasar dependiedo de una condición
if (edad < 18) {
  console.log("Es menor de edad");
} else {
  console.log("Es mayor de edad");
}
// Los arreglos son estructuras donde puedo guardar varios datos en una variable
let perros = ["Scooby Doo", "Snoopy", "Ayudante de santa", "Pluto"];
// Estructuras que repiten nuestro código
for (i = 0; i < perros.length; i++) {
  console.log(perros[i]);
}
for (perro in perros) {
  console.log(
    `Este perro es: ${perros[perro]} y esta en la posición ${perro} del arreglo`
  );
}
let ladrar = (dog) => {
  console.log(`${dog} ladara asi: Woof`);
};
function barf(dog) {
  console.log(`${dog} ladara asi: Woof`);
}
for (let dog of perros) {
  barf(dog);
}
// Las funciones son maneras de tener codigo que podamos reciclar y usar en diferentes lugares
let sumar = (a, b) => {
  return a + b;
};
let restar = function (a, b) {
  return a - b;
};
console.log(restar(2, 4));

// Java
// Script
// Object
// Notation
// Asi declaramos los objetos, que es cuando queremos tener mejor documentado un elemento

let gatos = [
  {
    nombre: "Don Gato",
    casa: "Basurero",
    amigo: "Benito bodoque",
    enemigo: "Matute",
  },
  {
    nombre: "Benito bodoque",
    casa: "Basurero",
    amigo: "Don Gato",
    enemigo: "Matute",
  },
];

let contCasa = document.getElementById("casa");
let contNombre = document.getElementById("title");
let contAmigo = document.getElementById("amigo");
let contEnemigo = document.getElementById("enemigo");

contNombre.innerHTML = gatos[1].nombre;
contAmigo.innerHTML = gatos[1].amigo;
contCasa.innerHTML = gatos[1].casa;
contEnemigo.innerHTML = gatos[1].enemigo;

let gritar = (nombre, casa) => {
  alert(`${nombre} vete a ${casa}`);
};
