import React, { useState } from 'react'

const OtroComp = (props) => {
    const [persona] = useState('Pedrito')
    console.log(persona)
    console.log(props)
    return (
        <div>
            <h1>Hola {props.nombre}!!</h1>
        </div>
    )
}

export default OtroComp
