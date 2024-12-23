//import React, { useState, useEffect, useContext } from "react";
import "./CoverPage.css";
import "../App.css";
import logo from "../img/logo.svg";
import LoginButtonComponent from "../login/LoginButtonComponent.jsx";
// import { auth, provider } from '../login/firebase.js'; // Commented out as they are unused
// import { onAuthStateChanged } from 'firebase/auth'; // Commented out as they are unused
//import { AuthContext } from '../login/authprovider';
import { MegaphoneIcon, ClipboardListIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
// import Header from './Header'; // Commented out as it is unused
import ReactTypingEffect from "react-typing-effect";
// import { useContext } from 'react'; // Add this import to resolve the no-undef error
// const user = useContext(UserContext); // Commented out as it is unused

function CoverPage() {
  // const { user } = useContext(AuthContext);
  return (
    <>
      <div className="coverpage">
        <div className="header">
          <div className="left">
            <img src={logo} alt="" />
            <h1> UrbanVoice </h1>
          </div>

          <div className="right">
            <Link
              to="/aboutus"
              style={{ color: "var(--darkblue)", textDecoration: "none" }}
            >
              <h3>About</h3>
            </Link>

            <h3>Contact</h3>
            <LoginButtonComponent />
          </div>
        </div>

        <div className="heroSection">
          <ReactTypingEffect
            text={["Make Your City Better"]}
            speed={100}
            eraseSpeed={50}
            className="heroHeading"
          />
          <h3>
            Voice your opinion and concerns to make your city a better place for
            everyone
          </h3>
          <div className="buttons">
            <Link to="/learnmore" style={{ textDecoration: "none" }}>
              <div className="buttons left">Learn More</div>
            </Link>
            <Link to="form/report-form" style={{ textDecoration: "none" }}>
              <div className="buttons right">Be heard</div>
            </Link>
          </div>
        </div>
        <div className="toDo">
          <h1>What You Can Do...</h1>
          <div className="con">
            <div className="con1">
              <div className="text">
                <div className="text a">
                  <MegaphoneIcon size={32} color="#0369a1" strokeWidth={1.5} />
                  Report Issue
                </div>
                <div className="text b">
                  Easily report problems in your neighborhood, from potholes to
                  broken streetlights.
                </div>
                <div className="text c">
                  Help improve your community by speaking up!
                </div>
              </div>
            </div>
            <div className="con1">
              <div className="text">
                <div className="text a">
                  <ClipboardListIcon
                    size={32}
                    color="#0369a1"
                    strokeWidth={1.5}
                  />
                  Track Progress
                </div>
                <div className="text b">
                  Follow the status of reported issues and see how your city is
                  addressing them.
                </div>
                <div className="text c">
                  Stay informed about the changes happening around you!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="commfor">
          <h2 className="title">Community Forum</h2>
          <div className="card">
            <div className="cardHeader">
              <UsersIcon size={32} color="#0369a1" strokeWidth={1.5} />
              <div className="subject">Join the Conversation</div>
            </div>
            <h2>
              Connect with your neighbors, discuss local issues, and share ideas
              for improving your community.
            </h2>
            <div className="discus">
              <h3>Latest Discussions</h3>
              <div className="item">
                <div className="list">
                  <li>New bike lanes on Main Street</li>
                  <li>Community garden proposal</li>
                  <li>Upcoming town hall meeting</li>
                </div>
              </div>
            </div>
            <Link to="/communityforum" style={{ textDecoration: "none" }}>
              <button>Enter Forum</button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 UrbanVoice. All rights reserved.</p>
      </footer>
    </>
  );
}

export default CoverPage;
