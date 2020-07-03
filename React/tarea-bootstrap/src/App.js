import React/*, { useState } */ from 'react';
import './App.css';
import SWApi from './Components/SWApi/SWApi';
// import Desglozar from './Components/Desglozar/Desglozar'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  // const [desg, setDesg] = useState(0)
  return (
    <div className="App">
      <SWApi />
      {/* <Desglozar 
      Desglozar num ={()=> setDesg(response.data.name)}
      /> */}
    </div>
  );
}

export default App;

// Una pagina que muestre datos de una API (Puede ser PokeApi, Swapi, 
//    rick and morty o la que quieras), usar el state
// Estilizar con bootstrap
// Crear 3 componentes estilizados con bootstrap que se llamen en el 
//    componente principal
// Uno de los componentes debe recibir props (editado) 