import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/FunctionalComponent';
import Welcome from './Components/ClassComponent';

function App() {
  return (
    <div className="App">
    <Greet name = "Prateek"/>
    <Greet name ="jai">
      <h1>Props children as parameter</h1>
    </Greet>
    <Welcome name ="jai"/>
    <Welcome name ="Prateek">
      <button>Props children</button>
    </Welcome>
    </div>
  );
}

export default App;
