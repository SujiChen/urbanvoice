import React, { useState, useEffect } from "react";
import './Profile.css';
import logo from '../img/Profile.svg';
import Logo from '../img/logo.svg';
import { auth} from '../login/firebase.js'; 
import {  onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("Personal");
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser); 
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, []);

      const renderTabContent = () => {
        if (activeTab === "Personal") {
            return (
                <div className="body">
                    <h3>Personal Information</h3>
                    {/* Add personal information details here */}
                </div>
            );
        } else if (activeTab === "Activity") {
            return (
                <div>
                    <h3>Activity Log</h3>
                    {/* Add activity details here */}
                </div>
            );
        }
    };
  return (
    <div className="Profile">
        <div className="header">

            <div className="headerleft">
                <img src={Logo} alt="" />
                <h1>UrbanVoice</h1>
            </div>
            <div className="right">
                
                < Link to="/" style={{ color: "white", textDecoration: "none" }}><h3>Home</h3></Link>
                < Link to="/aboutus" style={{ color: "white", textDecoration: "none" }}><h3>About</h3></Link>
                < Link to="/contact" style={{ color: "white", textDecoration: "none" }}><h3>Contact</h3></Link>
        
                
            </div>

        </div>

        <h1>Your Profile</h1>

<div className="main">
        <div className="left">
            <div className="content">
                <img src={user?.photoURL || logo} alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer" }} onError={(e) => e.target.src = logo} />
                <div className="user-info">
                <h2>{user?.displayName || "User"}</h2>
                <h3>{user?.email || "No email available"}</h3>
                <h3>Number of Reports: 4</h3>
                </div>
            </div>
        </div>
        <div className="body">
            <div className="tab">
            <h4 
                onClick={() => setActiveTab("Personal")}
                    style={{ cursor: "pointer", color: activeTab === "Personal" ? "blue" : "black" }}
                    >
                    Personal
                    </h4>
                    <h4 
                    onClick={() => setActiveTab("Activity")}
                    style={{ cursor: "pointer", color: activeTab === "Activity" ? "blue" : "black" }}
                    >
                    Activity
                    </h4>
                </div>
                <div className="tab-content">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    </div>

 

        



  );
};

export default Profile;