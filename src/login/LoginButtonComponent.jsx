import React, { useState, useEffect } from "react";
//import '../CoverPage/CoverPage.css' 
import '../App.css';
import logo from '../img/logo.svg';
import { auth, provider } from '../login/firebase.js'; // Adjust the path as necessary
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

const LoginButtonComponent = () => {
  const [user, setUser] = useState(null);
  // Handle login with Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };


   // Handle logout
   const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  // Track authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser); 
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
        {user ? (
            <div>
            <img src={user.photoURL || logo} alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
            {/* <img src={user.photoURL} alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px" }} /> */}
            {/* Add other profile details here if needed */}
            {/* <h3>{user ? (user.displayName ? user.displayName : "No name available") : "No user logged in"}</h3> */}
            <button onClick={handleLogout}>Logout</button>
            </div>
        ):(
            <h3 onClick={handleGoogleLogin}>login</h3>
        ) 
        
        }
    </div>
  );

  
};

export default LoginButtonComponent;