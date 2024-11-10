import React, { useState, useEffect } from "react";
import './Profile.css';
import logo from '../img/Profile.svg';
import { auth} from '../login/firebase.js'; 
import {  onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser); 
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, []);
  return (
    <div className="Profile">
        <div className="header">
            <h1>Profile Page</h1>
            <div className="right">
                
                < Link to="/" style={{ color: "white", textDecoration: "none" }}><h3>Home</h3></Link>
                < Link to="/contact" style={{ color: "white", textDecoration: "none" }}><h3>Contact</h3></Link>
        
                
                </div>
        </div>
        <div className="left">
            <div className="content">
                <img src={user?.photoURL || logo} alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer" }} onError={(e) => e.target.src = logo} />
                <div className="user-info">
                <h2>{user?.displayName || "User"}</h2>
                <h3>{user?.email || "No email available"}</h3>
                </div>
            </div>
        </div>


    </div>

        



  );
};

export default Profile;