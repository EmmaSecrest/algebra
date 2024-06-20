import React, { useState } from "react";
import logo from './images/logo_no_background.png';
import './App.css';
import Equations from './componets/Equation/Equations';
import Operations from './componets/Operations/Operation';
import Solution from "./componets/Solution/Solution";

function App() {
  const [equation,setEquation] = useState('')
  const [isSolutionsButton,setSolutionsButton] = useState(false)

  //todo: if I keep it with them just typing the equation I will have to do some replacements

  
  
  return (
    <div className="App">
      <header className="App-header">
       <nav>
          <img src= {logo} alt ="logo" id ="logo"/>
       </nav>
       <body>
          <Equations setEquation ={setEquation} setSolutionsButton ={setSolutionsButton} isSolutionsButton = {isSolutionsButton}/>
          {/* <Operations/> */}

          <Solution isSolutionsButton = {isSolutionsButton}/>
       </body>

      </header>
    </div>
  );
}

export default App;
