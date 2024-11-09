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
            <h3>Voice your opinion and concerns to make your city a better place for everyone</h3>

            <div className="buttons">
                <div className="buttons left">
                    Learn More
                </div>
                <div className="buttons right">
                    Report!
                </div>
            </div>

        </div>

        <div className="toDo">
            <h1>What You Can Do...</h1>
            <div className="con">

                <div className="con1">

                <div className="text">

                    <div className="text a">
                    Report Issue
                    </div>

                    <div className="text b">
                    Easily report problems in your neighborhood, from potholes to broken streetlights.
                    </div>

                    <div className="text c">
                    Help improve your community by speaking up!
                    </div>

                </div>
                </div>

                <div className="con1">

                    <div className="text">

                        <div className="text a">
                        Track Progress
                        </div>

                        <div className="text b">
                        Follow the status of reported issues and see how your city is addressing them.
                        </div>

                        <div className="text c">
                        Stay informed about the changes happening around you!
                        </div>

                    </div>
                </div>


            </div>
        </div>

        <footer className="footer">
        <p>&copy; 2024 UrbanVoice. All rights reserved.</p>
      </footer>

   </div>

    )

}



export default CoverPage;