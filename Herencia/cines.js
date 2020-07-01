class Largometraje{
    constructor (titulo, duracion){
        this._titulo = titulo;
        this._duracion = duracion;
    }
    getTitulo(){
        return this._titulo
    }
    
    getDuraciono(){
        return this._duracion
    }
    setTitulo(){
        return this._titulo = newTitulo
    }
    
    setDuraciono(){
        return this._duracion = newDuracion
    }
}
class Pelicula extends Largometraje{
    constructor (titulo, duracion, genero, clasficacion){
        super (titulo, duracion)
        this.genero = genero;
        this.clasficacion = clasficacion;
    }
    getGenero(){
        return this.genero
    }
}
class Documental extends Largometraje{
    constructor (titulo, duracion, pais, patrocinador){
        super (titulo, duracion)
        this.pais = pais;
        this.patrocinador = patrocinador;
    }
}
class Cine{
    constructor(nombre){
    this.nombre = nombre
    }
    reproducir(largometraje){
        return `Estan viendo ${largometraje.getTitulo()}`
    }
}

let Juanita = new Pelicula ('Juanita', '2 hr', 'Comedia', 'A')
let Michael = new Documental ('Michael Jordan, el Documental', '3 hr', 'USA', 'NBA')

let cinemex = new Cine ('Cinemex')

console.log(cinemex.reproducir(Michael))
console.log(cinemex.reproducir(Juanita))