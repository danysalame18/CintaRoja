setTimeout(()=>{
    console.log('Hola')
}, 1000)

function getUsers(calback){
    let datos = [
        {'name': 'Juan', 'age': '27', 'city': 'CDMX'},
        {'name': 'David', 'age': '22', 'city': 'Acapulco'},
        {'name': 'Pedro', 'age': '30', 'city': 'Chihuahua'},
    ]
    setTimeout(()=>{
        calback(datos, 'Datos recibidos')
    }, 1000)
}

getUsers(function(data,mensaje){
    console.log(data)
    console.log(mensaje)
})
console.log('Obtaniendo Datos')
