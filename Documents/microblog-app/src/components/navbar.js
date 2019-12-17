import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "../pages/home";
import Profile from "../pages/profile";
import '../App.css';


const Navbar = () => {
    return (
        <Router>
            <div>
                <Link id="home" to="/Home">Home</Link>
                <Link id="profile" to="/Profile">Profile</Link>
                <br />
            </div>
            <Route path="/Home" component={Home}>
                <Home />
            </Route>
            <Route path="/Profile" component={Profile}>
                <Profile />
            </Route>
        </Router>
    )
}
export default Navbar;