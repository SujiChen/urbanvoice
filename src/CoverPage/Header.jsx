// src/components/Header.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
import LoginButtonComponent from '../login/LoginButtonComponent';
import { AuthContext } from '../login/authprovider';
import './Header.css';

function Header() {
    const { user } = useContext(AuthContext);
    
    return (
        <div className="header">

            <div className="left">
                <img src={logo} alt="" />
                <h1>  UrbanVoice </h1>
            </div>

            <div className="right">
                
            < Link to="/" style={{ color: "var(--darkblue)", textDecoration: "none" }}><h3>Home</h3></Link>

            < Link to="/aboutus" style={{ color: "var(--darkblue)", textDecoration: "none" }}><h3>About</h3></Link>
                
                <LoginButtonComponent />
            </div>
        </div>
    );
}

export default Header;
