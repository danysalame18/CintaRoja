import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Buscador(){
    const [gif, setGif] = useState('');
    const [toFind, setToFind] = useState('football');
    
    useEffect(()=>{
        console.log('Hubo un cambio')
        getGif()
    }, [toFind])
    
    const API_KEY = 'aUBNWyA8ruTMmCgwK489Obt3s0DoKVXm'

    const getGif = ()=>{
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${toFind}&limit=5`)
            .then((response)=>{
                let r = response.data.data[0].images.downsized_large.url
                console.log(r)
                setGif(r)
            })
            .catch((error)=>{console.log(error)})
    }
        return (
            <div>
                <input placeholder="Busca un gif" onChange={(event)=>{setToFind(event.target.value)}} />
                {/* <button onClick={getGif}>Buscar</button> */}
                <img src={gif} alt="" />
            </div>
        )  
}

export default Buscador
