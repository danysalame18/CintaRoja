import React, { useState } from 'react';

import Count from './Count';
import Controles from './Controles'

import './App.css';

function App() {
  const [count, setCount] = useState(0) //Hook recibe como parametro un estado
  return (
    <div className="">
      <Count num={count} /> {/* Aca empieza el contador desde el prop */}
      <Controles 
        aumentar= { ()=> setCount(count + 1) }
        disminuir= { ()=> setCount(count - 1) }
      /> {/* Con estas funciones agregas y quitas */}
      <inout value = {count} />
    </div> 
  );
}

export default App;
