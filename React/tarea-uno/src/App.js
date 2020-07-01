import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import OtroComp from './OtroComp'
import Frutas from './Frutas'

function App() {
  return (
    <div className="App">
      <Home />
      <OtroComp nombre="Daniel" />
      <OtroComp nombre="Salame" />
      <Frutas frutas={['Fresa', 'Sandia', 'Naranja']} />
    </div>
  );
}

export default App;
