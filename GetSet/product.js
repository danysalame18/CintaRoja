class Product{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    getNombre(){
        return this._nombre
    }
    getPrecio(){
        return this._precio
    }
    setNombre(newNombre){
        this._nombre = newNombre
    }
    setPrecio(newPrecio){
        this._precio = newPrecio
    }
}

module.exports = Product;