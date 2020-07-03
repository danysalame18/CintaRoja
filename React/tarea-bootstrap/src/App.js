import React from 'react';
import './App.css';
import SWApi from './Components/SWApi/SWApi';
import 'bootstrap/dist/css/bootstrap.css';
import LosProps from './Components/Props/LosProps';
import Imagen from './Components/Imagen/Imagen';


function App() {
  return (
    <div className="App">
      <SWApi />
      <LosProps 
      nombre      = 'Dany'
      apellido    = 'Salame'
      edad        = '30 años'
      nombre2     = 'Dessy'
      apellido2   = 'Hemsani'
      edad2       = '27 años'
      nombre3      = 'Rafael'
      apellido3   = 'Salame'
      edad3       = '8 años'
      // Data = {[
      //   {nombre: 'dany', apellido: 'salame', edad: '30 años'},
      //   {nombre: 'dessy', apellido: 'salame', edad: '30 años'},
      // ]}
      />
      <Imagen />
    </div>
  );
}

export default App;

// Una pagina que muestre datos de una API 
//  usar el state
// Estilizar con bootstrap
// Crear 3 componentes estilizados con bootstrap que
//  se llamen en el componente principal
// Uno de los componentes debe recibir props (editado) 