import React, {useState, useEffect} from 'react'

function EffectExample() {
    const [cuenta, setCuenta] = useState(0);
    useEffect(()=>{
        document.title = `Se dieron ${cuenta} clicks`
    })
    return (
        <div>
            <p>Diste click { cuenta } veces</p>
            <button className="btn btn-danger" onClick ={()=>{
                setCuenta(cuenta + 1)
            }}>
                Cuenta tus clicks
            </button>
        </div>
    )
}

export default EffectExample
