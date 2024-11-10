import React from 'react';
import './CommunityForum.css';
import '../App.css';
import { Link} from 'react-router-dom';
import logo from '../img/logo.svg';
import { CheckCircleIcon } from 'lucide-react';
// import { Input } from "../../src/components/ui/input";
import OneLineInput from './InputLine';

function CommunityForum(){
    return (
        <div className="communityforum-page">


            <div className="header">
    
                <div className="left">
                    <img src={logo} alt="" />
                    <h1>  UrbanVoice </h1>
                </div>
    
                <div className="right">
                    
                    
                < Link to="/" style={{ color: "white", textDecoration: "none" }}><h3>Home</h3></Link>
                < Link to="/aboutus" style={{ color: "white", textDecoration: "none" }}><h3>About</h3></Link>

                < Link to="/contact" style={{ color: "white", textDecoration: "none" }}><h3>Contact</h3></Link>
    
                </div>

            </div>

            <div className="main-content">
                <h1 className="main-title">Community Forum</h1>

                <div className="search-bar">
                    <OneLineInput/>
                </div>

                <div className="new-discussion-button">
                    <button size="lg">Start a New Discussion</button>
                </div>

            </div>



            <footer className="footer">
            <div className="footer-container">
            <p>&copy; 2024 UrbanVoice. All rights reserved.</p>
            </div>
        </footer>

    
      </div>
    )    

}

export default CommunityForum;