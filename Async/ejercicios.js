//  1.- Muestra un mensaje en consola mediante un callback.
// La función de orden superior que escribas debe poder mostrar
// el mensaje como console.warn, console.log, console.info
// (Todos son lo mismo, solo pueden poner colores deiferentes).

//              Opcion 1
function saludo(callback) {
  console.log("Hola joven");
  callback();
}
function despedida() {
  console.log("Adios joven");
}
saludo(despedida);

//              Opcion 2
function saludo2(callback) {
  console.log("Hola señor");
  callback();
}
saludo2(function desp() {
  console.log("Adios señor");
});

//  2.- Crear una función de orden superior que reciba como
//  argumento una variable de cualquier tipo y un callback.
// La función de orden superior debe retornar como resultado,
//  mediante el callback, cual es el tipo de dato de la
// variable ingresada e imprimir su contenido. (editado)

//              Opcion 1
function tipo(variable, callback) {
  callback(variable);
}
function dato(a) {
  console.log(typeof a);
}
tipo(3, dato);

//              Opcion 2
function tipo2(callback) {
  a = "hola";
  callback(a);
}
tipo2(function dato(variable) {
  console.log(typeof a);
});

// 3.- Crear una función de orden superior que reciba como
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

//                  Opcion 1
function numeros(x, y, callback) {
  callback(x, y);
}
function suma(x, y) {
  console.log(`La suma de ${x} + ${y} es ${x + y}`);
}
function resta(x, y) {
  console.log(`La resta de ${x} - ${y} es ${x - y}`);
}
function multiplicacion(x, y) {
  console.log(`La multiplicacion de ${x} x ${y} es ${x * y}`);
}
numeros(120, 37, suma);
numeros(150, 42, resta);
numeros(12, 10, multiplicacion);

//                  Opcion 2
function numeros2(callback) {
  let x = 10;
  let y = 8;
  callback(x, y);
}
numeros2(function suma(x, y) {
  console.log(`La suma de ${x} + ${y} es ${x + y}`);
});
numeros2(function resta(x, y) {
  console.log(`La resta de ${x} - ${y} es ${x - y}`);
});
numeros2(function multiplicacion(x, y) {
  console.log(`La resta de ${x} x ${y} es ${x * y}`);
});

//          Opcion 3 David Zonana
function operacion(num1, num2, operacion/*callcack*/){
  return operacion(num1, num2)
}
function suma(num1, num2){
  return num1 + num2
}
function resta(num1, num2){
  return num1 - num2
}
function multiplicacion(num1, num2){
  return num1 * num2
}
function division(num1, num2){
  return num1 / num2
}
console.log(operacion(7, 2, suma))
// 4.- Escribe una función de orden superior que reciba una cadena
//     de caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

//          Opcion 1
function caracteres(palabra, callback) {
  callback(palabra);
}
function minus(palabra) {
  console.log(palabra.toLowerCase());
}
function mayus(palabra) {
  console.log(palabra.toUpperCase());
}
caracteres("PejeLagarto", minus);
caracteres("PejeLagarto", mayus);

//          Opcion 2
function caracteres2(callback) {
  let palabra = "Prangaricutirimicuaro";
  callback(palabra);
}
caracteres2(function minus(palabra) {
  console.log(palabra.toLowerCase());
});
caracteres2(function mayus(palabra) {
  console.log(palabra.toUpperCase());
});

//          Opcion 3 David Zonana
function formatoPalabra(string, callback){
    return callback(string)
}
function mayusculas(string){
    return string.toUpperCase();
}
function minusculas(string){
    return string.toLowerCase();
}
console.log(formatoPalabra('PejeLagarto', mayusculas))
console.log(formatoPalabra('PejeLagarto', minusculas))

let amlo = formatoPalabra('PejeLagarto', minusculas)
console.log(`${amlo} es el prejidente`)

// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas)
//     mediante un callback.

//                   Opcion 1
function minutos(hrs, callback) {
  callback(hrs);
}
function valida(hrs) {
  for (var i = 0; i < hrs.length; i++) {
    if (hrs[i] >= 120) {
      console.log(`${hrs[i]} minutos es mayor a 2 horas`);
    } else console.log(`${hrs[i]} minutos es menor a 2 horas`);
  }
}
minutos([120, 80, 200, 100], valida);

//                   Opcion 2
function horas2(callback) {
  let minutos = [220, 10, 450, 145];
  callback(minutos);
}
horas2(function (minutos) {
  for (var i = 0; i < minutos.length; i++) {
    if (minutos[i] >= 180) {
      console.log(`${minutos[i]} minutos es mayor a 3 horas`);
    } else console.log(`${minutos[i]} minutos es menor a 3 horas`);
  }
});

//           Opcion 3 David Zonana
const MayorQueDosHoras = (arreglo, callback)=>{
    return callback(arreglo)
}
const comparar = (arreglo)=>{
    let nuevoArray = []
    for (let i = 0; i < arreglo.length; i++){
        if(arreglo [i]>=120){
            nuevoArray.push(arreglo[i])
        }
    }
    return nuevoArray
}
console.log(MayorQueDosHoras([120, 80, 200, 100], comparar))