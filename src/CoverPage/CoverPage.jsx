import React from 'react';
import './CoverPage.css';
import '../App.css';
import logo from '../img/logo.svg';



function CoverPage(){
    return(
   <div className="coverpage">
        <div className="header">

            <div className="left">
                <img src={logo} alt="" />
                <h1>  UrbanVoice </h1>
            </div>
          
            <div className="right">
                <h3>about</h3>
                <h3>login</h3>
                <h3>contact</h3>
            </div>
        </div>

        <div className="heroSection">
            <h2>Make Your City Better </h2>
            Voice your opinion and concerns to make your city a better place for everyone

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
                        bal
                    </div>

                    <div className="text c">
                        bal bal
                    </div>

                </div>
                </div>

                <div className="con1">

                    <div className="text">

                        <div className="text a">
                            Report Issue
                        </div>

                        <div className="text b">
                            bal
                        </div>

                        <div className="text c">
                            bal bal
                        </div>

                    </div>
                </div>


            </div>
        </div>

   </div>

    )

}

export default CoverPage;