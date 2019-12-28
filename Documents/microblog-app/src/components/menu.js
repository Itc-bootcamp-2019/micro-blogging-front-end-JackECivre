import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';


const Navbar = () => {
    return (
        <div>
            <Link id="home" to="/Home">Home</Link>
            <Link id="profile" to="/Profile">Profile</Link>
            <br />
        </div>
    )
}
export default Navbar;