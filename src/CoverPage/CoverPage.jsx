import React, { useState, useEffect, useContext } from "react";
import './CoverPage.css';
import '../App.css';
import logo from '../img/logo.svg';
import LoginButtonComponent from '../login/LoginButtonComponent.jsx';
import { auth, provider } from '../login/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../login/authprovider'; 



function CoverPage(){
    const { currentUser } = useContext(AuthContext);
    return(
   <div className="coverpage">
        <div className="header">

            <div className="left">
                <img src={logo} alt="" />
                <h1>  UrbanVoice </h1>
            </div>
          
            <div className="right">
                <h3>about</h3>
                <LoginButtonComponent />
                <h3>contact</h3>
            </div>
        </div>

        <div className="heroSection">
            <h2>Make Your City Better </h2>
            Voice your opinion and concerns to make your city a better place for everyone

            <div className="buttons">
                <div className="buttons left">
                    Learn More
                </div>
                <div className="buttons right">
                    Report!
                </div>
            </div>

        </div>

   </div>

    )

}



export default CoverPage;