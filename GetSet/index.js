const Product = require('./product');
const Cliente = require('./cliente');

let cocacola = new Product('Coca Cola', 10)
let pepsi = new Product('Pepsi', 8)
let bigCola = new Product('Big Cola', 7)

let cliente1 = new Cliente('Dany', 'danysalame18@gmail.com', 5541109490, true)
let cliente2 = new Cliente('David', 'david@gmail.com', 55323265)
// refresco.setPrecio(12)
// refresco.setNombre('Sprite')
console.log(cocacola.getNombre(), cocacola.getPrecio())
console.log(pepsi.getNombre(), pepsi.getPrecio())
console.log(bigCola.getNombre(), bigCola.getPrecio())

console.log(cliente1.suscribed())
console.log(cliente2.suscribed())

cliente1.agregarCarrito(cocacola)
cliente1.agregarCarrito(pepsi)
cliente1.agregarCarrito(bigCola)
console.log(cliente1.getCarrito())
console.log(cliente1.sumarCarrito())