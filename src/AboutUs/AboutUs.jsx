import React from 'react';
import './AboutUs.css';
import '../App.css';
import { Link} from 'react-router-dom';
import logo from '../img/logo.svg';

const AboutUs = () => {
  return (
    <div className="about-page">
        <div className="header">

            <div className="left">
                <img src={logo} alt="" />
                <h1>  UrbanVoice </h1>
            </div>

            <div className="right">
                
            < Link to="/" style={{ color: "white", textDecoration: "none" }}><h3>Home</h3></Link>
            < Link to="/contact" style={{ color: "white", textDecoration: "none" }}><h3>Contact</h3></Link>

            
            </div>
        </div>

      

      <div className="main">
        <div className="title">About UrbanVoice</div>

        <div className="content">
            {/* <div className="text"> */}

                <h4>UrbanVoice is a platform dedicated to empowering citizens to actively participate in shaping their urban environment. We believe that every resident has valuable insights and ideas that can contribute to making our cities more livable, sustainable, and inclusive.
                </h4>
            {/* </div> */}

          <h2>Our Mission</h2>
         
          <h4>Our mission is to bridge the gap between city residents and local authorities, creating a collaborative ecosystem where community voices are heard, and positive changes are implemented efficiently.
          </h4>

          <h2>How It Works</h2>
          
          <ol className="steps">
            <li>Report Issues: Easily submit reports about local problems that need attention.</li>
            <li>Suggest Improvements: Share your ideas for enhancing your neighborhood or city.</li>
            <li>Track Progress: Follow the status of reported issues and see how they're being addressed.</li>
            <li>Community Engagement: Participate in discussions and polls about local matters.</li>
          </ol>

          <h2>Join Us</h2>

          <h4>Be part of the change in your community. Your voice matters, and together, we can create better urban spaces for everyone.
          </h4>
        </div>

        <div className="button-wrapper">
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>
    </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 UrbanVoice. All rights reserved.</p>
        </div>
      </footer>
    </div>


  );
};

export default AboutUs;