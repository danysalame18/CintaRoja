import React from 'react'

function Frutas(props) {

    return (
        <div>
            <ul>
            {props.frutas.map((fruta) => {
                return <li key={fruta}>{fruta}</li>
            })}
            </ul>   
        </div>
    )
}

export default Frutas
