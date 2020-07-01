const request = require('request');
const cowsay = require('cowsay');


// request('https://swapi.dev/api/people/', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     // console.log(JSON.parse(body))
//     var data = JSON.parse(body)
//     for(let character of data.results){
//         console.log(character.name)
//     }
// })

// request('https://swapi.dev/api/people/1', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     // console.log(JSON.parse(body))
//     var data = JSON.parse(body)
//     console.log('Nombre elegido' + data.name)
// })


// console.log(cowsay.say({
//     text: 'Holaa'
// }))

// EJERCICIOS
// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/
// request('http://pokeapi.co/api/v2/pokemon/1', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     var data = JSON.parse(body)
//     console.log(data.types[0].type.name)
// })

// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer 
//      libro http://openlibrary.org/search.json?q=i+robot)

// request('http://openlibrary.org/search.json?q=i+robot', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     var data = JSON.parse(body)
//     console.log(data.docs[0].title_suggest)
// })

// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

// request('http://openlibrary.org/search.json?author=asimov', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     var data = JSON.parse(body)
//     for(var i= 0; i < data.docs.length; i++){
//         console.log(data.docs[i].title_suggest)
//     }
// })

// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
// request('http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     var data = JSON.parse(body)
//     console.log(data.artists[0].strGenre)
// })

// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas. https://swapi.co/
// request('https://swapi.dev/api/people/1/', function(error, response, body){
//     console.log(error)
//     console.log(response.statusCode)
//     var data = JSON.parse(body)
//     console.log(data.films)
// })

// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
const URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-18&end_date=2020-06-24&api_key=eRCovb3MHahosZhPNN9YM7yHzyRerdq1pneFJ4Pw'
request.get(URL, function(error, response, body){
    if (response.statusCode == 200){
        let asteroides = JSON.parse(body).near_earth_objects;
        Object.keys(asteroides).forEach(function(key){
            asteroidesPeligrosos = asteroides[key].map(asteroide =>{
                if (asteroide.is_potentially_hazardous_asteroid){
                    console.log(`${asteroide.name} ES PELIGROSO PARA LA TIERRA`);
                }
                else console.log(`${asteroide.name} no es peligroso`)
            })
        })
    } else console.log(error)
})

// 7.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.  https://pokeapi.co/
// request(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=1`, 
// function(error, response, body){
//     console.log(error)
//     let data = JSON.parse(body).results
//     let nombres = data.map((elements)=>{
//         return elements.name
//     })
//     console.log(nombres)
// })