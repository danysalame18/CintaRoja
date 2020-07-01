const axios = require ('axios')
const request = require('request') 

// function getCharacter(id){
//     const URL = `https://swapi.dev/api/people/${id}/`
//     axios.get(URL)
//         .then((response)=>{
//             console.log('Esto es en el THEN')
//             console.log(response.data.name)
//             console.log(response.status)
//         })
//         .catch((error)=>{
//             console.log('Esto es en el CATCH')
//             console.log(error.response.data)
//             console.log(error.response.status)
//         })
// }
// getCharacter(1)
// getCharacter(2)
// getCharacter(3)

// function getPokemon(name){
//     const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
//     axios.get(URL)
//         .then((response)=>{
//             console.log(response.data.name)
//             // return response.data
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
// }
// getPokemon('ditto')

function getCharacterById(idChar){
    return new Promise((resolve, reject)=>{
        let Url = `https://rickandmortyapi.com/api/character/${idChar}`
        request.get(Url, (error, response, body)=>{
            const data = JSON.parse(body)
            if(response.statusCode == 200){
                resolve(data)
            }
            else{
                reject('Algo salio mal status:' + response.statusCode)
            }
        })
    })
}
// getCharacterById(1)
//     .then((respuesta) => {console.log(respuesta.name)})
//     .catch(error => console.log(error))

let rickData
getCharacterById(1)
    .then((respuesta) => {rickData = respuesta.name})
    .catch(error => console.log(error))
setTimeout(()=>{
    console.log(`El personaje es ${rickData}`)
}, 5000)


// function getCharac(id){
//     let url = `https://rickandmortyapi.com/api/character/${id}`
//     let character = axios.get(url)
//         .then((response)=>{
//             console.log('Esto esta en THEN')
//             console.log(response.data)
//         })
//         .catch((error)=>{
//             console.log('Estamos en el CATCH')
//             console.log(error.response.data)
//         })
//         console.log(character)
// }
// getCharac(1)