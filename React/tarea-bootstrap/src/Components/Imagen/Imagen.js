import React from 'react'
import img from './imagen.jpeg'
import './imagen.css'

function Imagen() {
    return (
        <div>
            <img src={img} className="rounded mx-auto d-block" alt="" />
        </div>
    )
}

export default Imagen
