// import React, { useState, useEffect } from "react";
// import { auth, provider } from "./firebase"; // Adjust the path as necessary
// import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

// const LoginButtonComponent = () => {
//   const [user, setUser] = useState(null);

//   // Handle login with Google
//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       console.log("User signed in successfully");
//     } catch (error) {
//       console.error("Error during sign-in:", error.message);
//     }
//   };

//   // Track authentication state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       {!user ? (
//         <button onClick={handleGoogleLogin}>Sign in with Google</button>
//       ) : (
//         <div>
//           <h2>Welcome, {user.displayName}!</h2>
//           {/* <img src={} alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px" }} /> */}
//           {/* <img src={user.photoURL} alt="Profile" style={{ borderRadius: "50%", width: "50px", height: "50px" }} /> */}
//           {/* Add other profile details here if needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginButtonComponent;
