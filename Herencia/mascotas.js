class Mascota {
    constructor (nombre = 'Fido', color = 'Cafe'){
    this.nombre = nombre;
    this.color = color;
    }
    comer(alimento){
        return `Soy ${this.nombre} y como ${alimento}`
    }
}
class Perro extends Mascota{
    constructor (nombre, color, patas, raza, peso, alimento){
        super(nombre, color)
        this.patas = patas;
        this.raza = raza;
        this.peso = peso;
        this.alimento = alimento
    }
}
class Pez extends Mascota{
    constructor (nombre, color, tipoDeAgua, cantidadDeAlimento, tipoDePez){
        super(nombre, color)
        this.tipoDeAgua = tipoDeAgua
        this.cantidadDeAlimento = cantidadDeAlimento
        this.tipoDePez = tipoDePez
    }
}
let firulais = new Perro('Firulais', 'Verde', 4, 'Pug', '5kg', 'Croquetas')
let nemo = new Pez('Nemo', 'Naranja', 'Agua Salada', '10gr', 'Pez Payaso')
console.log(firulais.comer(firulais.alimento))
console.log(nemo)