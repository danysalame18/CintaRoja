import React from 'react';

function Controles(props){
    return(
    <div className= "controles">
        <button onClick={props.aumentar}>Agregar</button>
        <button onClick={props.disminuir}>Disminuir</button>
    </div>
    );
}

export default Controles;