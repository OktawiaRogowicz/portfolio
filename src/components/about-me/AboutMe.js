import React from "react";
import portrait from "./portrait.jpeg"
import "./AboutMe.css";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 25px;
  min-width: 50px;
  min-height: 50px;
  font-size: 10px;
  font-family: 'Comfortaa', cursive;
  text-transform: uppercase;
  color: white;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  vertical-align: middle;
  flex-grow: 1;
`

const ContactMe = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
`

const AboutMe = (props) => {

    return(
        <div id="aboutme" className="about">
            <div className="section">
                <h1>About me</h1>
                <h2>Hi!</h2>
                <div className="section-container">
                    <div className="section-sub s2 sm">
                        <img className="circular-image" src={portrait}/>
                    </div>
                    <div className="section-sub sm">
                        <p>
                            Since February 2022, I have a <span className="bold-white">BS</span> in <span className="bold-white">Computer Science</span> from Technical University of Lodz. In my thesis I aimed to learn more about neural networks and inspiration came quickly - I decided to take upon a challenge and recreate Quick, Draw! made by Google using technologies I have not used before. Turns out I really enjoyed <span className="blue">React</span> and, once again, the process of designing a website - and I decided to try and change from back-end to <span className="blue">front-end</span> developer.
                        </p>
                        <p>
                            Privately I draw since I was young - I even once thought it will become my career! I love to cook and last year completed a challenge of testing out one hundred new recipes. I’m a big fan of board games, books, and indie music.
                        </p>
                        <ContactMe>
                            <GButton><i className="fa-brands fa-linkedin fa-bounce" style={{fontSize: "32px", marginRight: "10px"}}/></GButton>
                            <GButton><i className="fa-brands fa-github-square fa-bounce" style={{fontSize: "32px", marginRight: "10px"}}/></GButton>
                            <GButton><i className="fa-solid fa-square-envelope fa-bounce" style={{fontSize: "32px", marginRight: "10px"}}/>oktawia.rogowicz.50@gmail.com</GButton>
                        </ContactMe>
                    </div>
                </div>
            </div>
            <div className="gradient3"/>
        </div>
    );
}

export default AboutMe;