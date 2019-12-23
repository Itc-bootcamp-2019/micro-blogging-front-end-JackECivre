import React from 'react';
// import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from "./components/menu"


function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <Navbar id="Navbar" />
        </header>
      </div>
    </div>
  );
}

export default App;