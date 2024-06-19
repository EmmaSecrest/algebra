import React, { useState } from "react";
import logo from './images/logo_no_background.png';
import './App.css';
import Equations from './componets/Equation/Equations';
import Operations from './componets/Operations/Operation';

function App() {
  const [equation,setEquation] = useState('')
  
  
  return (
    <div className="App">
      <header className="App-header">
       <nav>
          <img src= {logo} alt ="logo" id ="logo"/>
       </nav>
       <body>
          <Equations setEquation ={setEquation} />
          {/* <Operations/> */}
       </body>

      </header>
    </div>
  );
}

export default App;
