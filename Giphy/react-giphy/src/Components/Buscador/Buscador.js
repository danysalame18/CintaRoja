import React, { useState } from 'react'
import axios from 'axios';

function Buscador(){
    const [gif, setGif] = useState('');
    const [toFind, setFind] = useState('football');
    const API_KEY = 'aUBNWyA8ruTMmCgwK489Obt3s0DoKVXm'
    const getGif = ()=>{
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${toFind}&limit=5`)
            .then((response)=>{
                let r = response.data.data[0].images.fixed_width.url
                console.log(r)
                setGif(r)
            })
            .catch((error)=>{console.log(error)})
    }
        return (
            <div>
                <input placeholder="Busca un gif" />
                <button onClick={getGif}>Buscar</button>
                <img src={gif} alt="" />
            </div>
        )  
}

export default Buscador
