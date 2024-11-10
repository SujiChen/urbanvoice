import React from 'react';
import './LearnMore.css';
import '../App.css';
import { Link} from 'react-router-dom';
import logo from '../img/logo.svg';
import { CheckCircleIcon } from 'lucide-react';

function LearnMore(){
    return (
        <div className="learnmore-page">


            <div className="header">
    
                <div className="left">
                    <img src={logo} alt="" />
                    <h1>  UrbanVoice </h1>
                </div>
    
                <div className="right">
                    
                    
                < Link to="/" style={{ color: "var(--darkblue)", textDecoration: "none" }}><h3>Home</h3></Link>
                < Link to="/aboutus" style={{ color: "var(--darkblue)", textDecoration: "none" }}><h3>About</h3></Link>

                < Link to="/contact" style={{ color: "var(--darkblue)", textDecoration: "none" }}><h3>Contact</h3></Link>
    
                </div>

            </div>



            <h1 className="title">Learn More About UrbanVoice</h1>

            <main className="main-content">

            <div className="card-grid">

            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <CheckCircleIcon className="icon" />
                        How It Works
                    </div>
                </div>

                <div className="card-content">
                    <ol className="steps-list">
                        <li>Sign up for a free UrbanVoice account</li>
                        <li>Report issues or suggest improvements in your area</li>
                        <li>Upvote and comment on existing reports</li>
                        <li>Track the progress of reported issues</li>
                        <li>Engage with your community through our forum</li>
                    </ol>
                </div>
            </div>


            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                    <CheckCircleIcon className="icon" />
                    Benefits
                    </div>
                </div>
                <div className="card-content">
                    <ul className="benefits-list">
                        <li>Direct line to local authorities</li>
                        <li>Increased transparency in urban development</li>
                        <li>Community-driven problem solving</li>
                        <li>Real-time updates on local issues</li>
                        <li>Opportunity to shape your city's future</li>
                    </ul>
                </div>
            </div>
            </div>


            <div className="call-to-action">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-text">Join UrbanVoice today and start contributing to positive change in your community.</p>
            {/* <button className=''>Sign Up Now</button> */}
            </div>
            <div className="back-home">
                <Link to="/">
                    <button>Back to Home</button>
                </Link>
            </div>
        </main>

        <footer className="footer">
            <div className="footer-container">
            <p>&copy; 2024 UrbanVoice. All rights reserved.</p>
            </div>
        </footer>

    
      </div>
    )    

}

export default LearnMore;