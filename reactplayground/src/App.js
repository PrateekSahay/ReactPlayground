import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/FunctionalComponent';
import Welcome from './Components/ClassComponent';

function App() {
  return (
    <div className="App">
    <Greet />
    <Welcome />
    </div>
  );
}

export default App;
