// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app'; // Commented out as it is unused
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Commented out as it is unused
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWX2HH-fjSol95EO11B2HAgYYYXjMnyHM",
  authDomain: "urbanvoice-3e3e3.firebaseapp.com",
  projectId: "urbanvoice-3e3e3",
  storageBucket: "urbanvoice-3e3e3.firebasestorage.app",
  messagingSenderId: "646373024645",
  appId: "1:646373024645:web:38ce92b5ca5e30d5235aec",
  measurementId: "G-M8CLVVYBZQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = firebase.analytics(); // Commented out as it is unused
const provider = new GoogleAuthProvider();// Example for Google Sign-In
export { provider};

const auth = getAuth(app);
export { auth  }; 

export const db = getFirestore(app);

