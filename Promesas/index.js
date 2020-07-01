const numeroMenorQueCinco = new Promise ((resolve, reject)=>{
    const RANDOM_NUMBER = Math.floor(Math.random()*10)
    setTimeout(
        ()=>{
            if(RANDOM_NUMBER > 5){
                resolve(RANDOM_NUMBER)
            }
            else if(RANDOM_NUMBER < 5){
                reject(new Error(`El numero ${RANDOM_NUMBER} es menor a 5`))
            }
        }, 1000
    )
})
numeroMenorQueCinco
    .then(resolve => console.log(resolve))
    .catch(error =>console.log(error))

function login(recibedEmail, recibedPassword){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let email = 'danysalame18@gmail.com'
            let password = 'danysalame'
            if(recibedEmail == email && recibedPassword == password){
                resolve(
                    {
                        mensaje:'Bienvenido usuario', 
                        loggedIn: true
                    }
                );
            }
            else{
                reject(new Error('El email o password esta mal'))
            }
        }, 1000);
    });
}
let user = login('danysalame18@gmail.com', 'danysalame')
    .then((response)=> console.log(response.mensaje, response.loggedIn))
    .catch((error)=> console.log(error))