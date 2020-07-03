import React from 'react'

function LosProps(props) {
    // let Data = [{nombre: props.nombre, apellido: props.apellido, edad: props.edad}];
    return (
        <div>
            <table className="table table-dark container col-sm-6">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.edad}</td>
          </tr>
          <tr>
            <td>{props.nombre2}</td>
            <td>{props.apellido2}</td>
            <td>{props.edad2}</td>
          </tr>
          
          <tr>
            <td>{props.nombre3}</td>
            <td>{props.apellido3}</td>
            <td>{props.edad3}</td>
          </tr>
          {/* {Data.map((props, index) => {
              return (
                <tr key={props.id}>
                  <td>{props.nombre}</td>
                  <td>{props.apellido}</td>
                  <td>{props.edad}</td>
                </tr>
              );
            })} */}
        </tbody>
      </table>
        </div>
    )
}

export default LosProps
