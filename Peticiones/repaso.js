const request = require('request')

request('https://rickandmortyapi.com/api/character/1', (error, response, body)=>{
    if(error){
        console.log(response.statusCode)
        console.log(error)
    }
    else{
        console.log(response.statusCode)
        // console.log(body)
        let rick = JSON.parse(body) /*esto es para imprimir un nombre*/
        console.log(rick.name)
    }
})

// C create     = POST
// R read       = GET
// U update     = PUT
// D delete     = DELETE

request.post({url: 'https://jsonplaceholder.typicode.com/posts/', form: {title: "new title", body: "pedrito"}},
(error, response, body)=>{
    console.log(error)
    console.log(body)
})

request.put({url: 'https://jsonplaceholder.typicode.com/posts/100', form: {title: "new title", body: "panchito"}},
(error, response, body)=>{
    console.log(error)
    console.log(body)
})


// No jalo revisar github de David
// request.delete('https://jsonplaceholder.typicode.com/posts/99',
// (error, response, body)=>{
//     console.log(statusCode)
//     console.log(error)
//     console.log(body)
// })