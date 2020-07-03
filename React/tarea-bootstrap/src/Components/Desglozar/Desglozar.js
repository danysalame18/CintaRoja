import React, { useState, useEffect } from 'react'
// import axios from 'axios';

function Desglozar(props) {
    // const [api, setApi] = useState('');
    // const [num, setNum] = useState('');

    // const getApi = ()=>{
    //     axios.get(`https://swapi.dev/api/people/${num}`)
    //         .then((response)=>{
    //             let data = response.data
    //             console.log(data)
    //             setApi(data)
    //         })
    //         .catch((error)=>{console.log(error)})
    // }
    return (
        <div>
            <button type="button" className="btn btn-warning" onClick={(event)=>{setNum(event.target.value)}}>Desglozar Info</button>
            <ul className="list-group container col-sm-6">
                <li className="list-group-item">{api}</li>
                <li className="list-group-item">{api}</li>
                <li className="list-group-item">{api}</li>
                <li className="list-group-item">{api}</li>
            </ul>
        </div>
    )
}

export default Desglozar
