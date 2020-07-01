const axios = require ('axios')
const request = require('request')
/*Escribe el código que permita hacer las operaciones elementales
de la siguiente API genérica (Hay que leer con GET, Crear con POST, 
    Editar con Put y borrar con DELETE):
         https://goodreads-devf-aaron.herokuapp.com/docs/ 
    Recuerda probar con Postman
    cómo hay que hacer las peticiones a la API
    para ver qué y cómo responde el servidor.*/
/*1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa.*/

// request.post({url: 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', 
// form: {id:"9999", name: "Daniel", last_name:"Salame", nacionalidad: "MX", biography: "Probando", gender: "M", age: 30}},
// (error, response, body)=>{
//     console.log(error)
//     console.log(body)
// }) 
function postName(){
    const url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`
    axios.post(url,
        {name: "Daniel",
        last_name: "Salame",
        nacionalidad: "MX",
        biography: "Probando",
        gender: "M",
        age: 30,})
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error.response.data)
    })
}
// postName()
/*2.- LISTO Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor. */
function getAuthor(id){
    return new Promise((resolve, reject)=>{
        let Url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
        request.get(Url, (error, response, body)=>{
            const autor = JSON.parse(body)
            if(response.statusCode == 200){
                resolve(autor)
            }
            else{
                reject(response.statusCode)
            }
        })
    })
}
// getAuthor(4369)
//     .then((respuesta) => {console.log(respuesta)})
//     .catch(error => console.log(error))

function getAuthor(id){
    const url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
    axios.get(url)
        .then((response)=>{
            console.log(response.data)
            return response.data
        })
        .catch((error)=>{
            console.log(error.response.data)
        })
}
// getAuthor(5459)

/*3.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para modificar un autor existente.
        Al ejecutar La función, esta debe retornar el autor 
        modificado en una promesa.*/
function putName(id){
    const url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
    axios.put(url,
        {name: "Editando",
        last_name: "Apellido",
        nacionalidad: "MX",
        biography: "Jugando",
        gender: "M",
        age: 30,})
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error.response.data)
    })
}
// putName(4615)


/*4.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para eliminar un
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor.*/
function deleteName(id){
    const url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
    axios.delete(url)
    .then((response)=>{
        console.log(response.data)
        console.log('Borrado')
    })
    .catch((error)=>{
        console.log(error.response.data)
    })
}
// deleteName(4969)