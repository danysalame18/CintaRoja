class Perro{
    constructor(nombre, raza, color='Cafe', comida='Croquetas'){
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.comida = comida;
    }
    come(){
        return `${this.nombre} come ${this.comida}`
    }
    ladrar(){
        return `${this.nombre} ladra waf waf`
    }
}
let scooby = new Perro('Scooby Doo' , 'Gran Danes', 'Cafe', 'Scooby Galletas');
let snoopy = new Perro('Snoopy' , 'Beagle', 'Blanco');
const huesos = new Perro('Ayudante de Santa' , 'Galgo')
console.log(scooby)
scooby.color = 'Blanco'
console.log(scooby, snoopy, huesos);
console.log(scooby.ladrar());
console.log(scooby.come());

// 11.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
// 	 Generar el RFC a partir de el nombre, edad y sexo

class Persona{
    constructor(nombre, edad, sexo, peso, altura, fecha){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fecha = fecha;
    }
    mayor(){
        if (this.edad >= 18){
            return `${this.nombre} es mayor de edad`
        }
        else{
            return `${this.nombre} es menor de edad`
        }
    }
    masa(){
        let pesoimc = parseInt(this.peso);
        let alturaimc = parseInt(this.altura);
        let imc = (alturaimc * alturaimc) / pesoimc
        return `La masa corporal de ${this.nombre} es ${imc}`
    }
    rfc(){
        return `El RFC es ${this.nombre[7]}${this.nombre[8]}${this.nombre[13,14]}${this.nombre[0]}${this.fecha[6]}${this.fecha[7]}${this.fecha[3]}${this.fecha[4]}${this.fecha[0]}${this.fecha[1]}`
    }
}

let dany = new Persona('Daniel Salame Moussan', '30', 'Masculino', '70', '1.70', '03-06-90');
// let pedro = new Persona('Pedro Gomez Hernandez', '33', 'Masculino', '83', '1.65', '23-02-87');
// let ana = new Persona('Ana Peres Chavez', '27', 'Femenino', '63', '1.60', '12-11-92');
console.log(dany.mayor());
console.log(dany.masa());
console.log(dany.rfc().toUpperCase());

// 12.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad, estado 
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta{
    constructor(titular, estado, cantidad){
        this.titular = titular;
        this.estado = estado;
        this.cantidad = cantidad;
    }
    deposito(ingreso, retiro){
        let total = this.cantidad + ingreso - retiro
        return  `Tu saldo es de ${total}`
    }
    calificacion(){
        if (this.total < 10 || this.total > 900){
            return `Eres mal cliente`
        }
        else{
            return "Eres buen cliente"
        }
    }
}

let cliente1 = new Cuenta('Daniel Salame', 'Casado', 500)
console.log(cliente1);
console.log(cliente1.deposito(100, 50))
console.log(cliente1.calificacion())