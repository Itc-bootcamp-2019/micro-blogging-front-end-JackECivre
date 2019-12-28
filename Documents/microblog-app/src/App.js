import React from 'react';
// import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from "./components/menu"
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/home";
import Profile from "./pages/profile";


function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Home" >
              <Home />
            </Route>
          </Router>
        </header>
      </div>
    </div>
  );
}

export default App;