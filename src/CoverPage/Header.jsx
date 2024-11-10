// src/components/Header.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
import LoginButtonComponent from '../login/LoginButtonComponent';
import { AuthContext } from '../login/authprovider';

function Header() {
    const { user } = useContext(AuthContext);
    
    return (
        <div className="header">
            <div className="left">
                <img src={logo} alt="UrbanVoice Logo" />
                <Link to="/CoverPage" style={{ textDecoration: "none", color: "inherit" }}>
                <h1>UrbanVoice</h1>
            </Link>
            </div>
            <div className="right">
                <Link to="/aboutus" style={{ color: "var(--darkblue)", textDecoration: "none" }}>
                    <h3>About</h3>
                </Link>
                <Link to="/form/report-form" style={{ color: "var(--darkblue)", textDecoration: "none" }}>
                    <h3>Report</h3>
                </Link>
                <LoginButtonComponent />
            </div>
        </div>
    );
}

export default Header;
