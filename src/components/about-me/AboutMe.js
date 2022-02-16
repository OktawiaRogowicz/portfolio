import React from "react";
import portrait from "./portrait.jpeg"
import "./AboutMe.css";
import Navbar from "../Navbar/Navbar";

const AboutMe = (props) => {

    return(
        <div className="section">
            <h1>About me</h1>
            <h2>Hi!</h2>
            <div className="section-container">
                <div className="section-sub sm">
                    <p>
                        Since February 2022, I have a BS in Computer Science from Technical University of Lodz. In my thesis I aimed to learn more about neural networks and inspiration came quickly - I decided to take upon a challenge and recreate Quick, Draw! made by Google using technologies I have not used before. Turns out I really enjoyed React and, once again, the process of designing a website - and I decided to try and change from back-end to front-end developer.
                    </p>
                    <p>
                        Privately I draw since I was young - I even once thought it will become my career! I love to cook and last year completed a challenge of testing out one hundred new recipes. I’m a big fan of board games, books, and indie music.
                    </p>
                </div>
                <div className="section-sub s2 sm">
                    <img className="circular-image" src={portrait}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;