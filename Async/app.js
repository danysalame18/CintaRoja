function getUsers(callback){
    let users = [
        {name: 'Daniel', edad: '30', city: 'CDMX'},
        {name: 'David', edad: '25', city: 'Paris'},
        {name: 'Jose', edad: '12', city: 'Chiapas'},
    ]
    console.log('Antes del callback')
    setTimeout(function(){
        callback(users, 'Todo bien')
        console.log(`Esto pasa despues del callback`)
    }, 3000)
}
getUsers(function(users, text){
    console.log(users)
    console.log(text)
})

test = (hola) =>{
    console.log(hola)
}
test('Jajaja')

//              Ejemplo 2
function saludo(callback){
    console.log('Hola desde la funcion')
    callback()
}
function despedida(){
    console.warn('Adios desde el callback')
}
function burla(){
    console.log('Me estoy burlando')
}
saludo(despedida)
saludo(burla)

//              Ejemplo 3
function revisarPrecio(comprarMonedaX){
    console.log('Revisando precio')
    setTimeout(function(){comprarMonedaX()}, 2000)
}
function comprarBTC(){
    console.warn('Compraste un BTC')
}
function comprarEther(){
    console.log('Compraste ether')
}
revisarPrecio(comprarBTC)
revisarPrecio(comprarEther)