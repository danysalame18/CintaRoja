// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones	 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
class Maestro{
    constructor(nombre, apellido, materia, calificaciones){
        this.nombre = nombre;
        this.apellido = apellido;
        this.materia = materia;
        this.calificaciones = calificaciones
    }
}
class Fisica extends Maestro{
    constructor(nombre, apellido, materia, calificaciones, antiguedad){
        super(nombre, apellido, materia, calificaciones)
        this.antiguedad = antiguedad
    }
    calif(){
        let total = 0;
        for(let i = 0; i< this.calificaciones.length; i++){
            total = total + this.calificaciones[i]
        }
        let promedio = total / this.calificaciones.length
        return `El promedio es: ${promedio}`
    }
}
class Musica extends Maestro{
    constructor(nombre, apellido, materia, calificaciones, edad){
        super(nombre, apellido, materia, calificaciones)
        this.edad = edad
    }
}

let Fernando = new Fisica ('Fernando', 'Gomez', 'Fisica', [10,9,6], 3)
let Javier = new Musica ('Javier', 'Peres', 'Musica', [8,7,6], 42)
console.log(Fernando.calif())

// 2.- Crear la clase construcción que hereda a otras dos 
// clases "casa" y "edificio". 
// a. Sus atributos son: numPuertas, numVentanas, numPisos,
//    direccion, altura, largo y ancho del terreno.
// b. Cada uno tiene un método que regresa los metros 
//    cuadrados
// c. Un método debe regresar la direccion
// d. Un método debe permitir modificar la direccion
// e. Buscar la mejor manera de aprovechar la herencia

class Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
    this._numPuertas = numPuertas;
    this._numVentanas = numVentanas;
    this._numPisos = numPisos;
    this._direccion = direccion;
    this._altura = altura;
    this._ancho = ancho;
    this._largo = largo;
    }
    metros2(){
        let mt2 = this._ancho * this._largo * this._numPisos
        return `Los metros cuadrados son: ${mt2}`
    }
}
class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
    getDireccion(){
        return this._direccion
    }
    setDireccion(newDireccion){
        this._direccion = newDireccion
    }
}
class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
}

let molinos = new Casa (8, 15, 2, 'Molinos', 6, 25, 14)
let polanco = new Edificio (30, 80, 8, 'Polanco', 24, 30, 18)
console.log(molinos.metros2())
console.log(polanco.metros2())
molinos.setDireccion('Teca')
console.log(molinos._direccion)


/*3.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol
. Crear los getters y setters
    correspondientes.*/
class Bebida{
    constructor(nombre, cantidad){
        this._nombre = nombre;
        this._cantidad = cantidad;
    }
}
class Cerveza extends Bebida{
    constructor(nombre, cantidad, alcohol){
        super(nombre, cantidad)
        this._alcochol = alcohol;
    }
    getAlcohol(){
        return this._alcohol
    }
    setDireccion(newAlcohol){
        this._alcohol = newAlcohol
    }
}
class Refresco extends Bebida{
    constructor(nombre, cantidad, azucar){
        super(nombre, cantidad)
        this._azucar = azucar;
    }
    getAzucar(){
        return this._azucar
    }
    setAzucar(newAzucar){
        this._azucar = newAzucar
    }
}

let corona = new Cerveza ('Corona', '600 ml', '12%')
let coca = new Refresco ('Coca Cola', '600 ml', '6%')

console.log(coca)
coca.setAzucar('10')
console.log(coca._azucar)


/*4.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100 (en el constructor)
5.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga. */
class Electrodomesticos{
    constructor(precio, color, consumoEnergetico = '100', capacidad){
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.capacidad = capacidad;
    }
}
class Lavadora extends Electrodomesticos{
    constructor(color, capacidad, consumoEnergetico = '100', kilos){
        super(color, capacidad, consumoEnergetico);
        this.kilos = kilos;
    }
    precioFinal(){
        let precio = this.kilos * this.consumoEnergetico
        return `Tu precio final es de $${precio}`
    }
}

let lavadora1 = new Lavadora ('Blanca', '20 kg', 300, 20)
console.log(lavadora1.precioFinal())