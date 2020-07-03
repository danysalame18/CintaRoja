import React, { useState, useEffect } from 'react'
import axios from 'axios';

function SWApi() {
    const [api, setApi] = useState('');
    const [num, setNum] = useState('');

    useEffect(()=>{
        getApi()
    })

    const getApi = ()=>{
        axios.get(`https://swapi.dev/api/people/${num}`)
            .then((response)=>{
                let data = response.data.name
                console.log(data)
                setApi(data)
            })
            .catch((error)=>{console.log(error)})
    }
    return (
        <div className="input-group mb-3 container">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Escoge un personaje de StarWars</span>
                <input placeholder="Pon un numero" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(event)=>{setNum(event.target.value)}}></input>
                    <div className="input-group-append">
                        <span className="input-group-text">{api}</span>
                    </div>
            </div>     
        </div>
    )
}

export default SWApi
