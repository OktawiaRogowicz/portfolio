import React from "react";
//import portrait from "./portrait.jpeg"
import portrait from "./port.png"
import "./AboutMe.css";
import Navbar from "../Navbar/Navbar";
import styled, {keyframes} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const borderAnimation = keyframes`
  from {
    box-shadow:
            0 0 0 0.6rem hsl(0, 0%, 18%),
            0 0 0 2rem hsl(0, 0%, 8%);
  }
  to {
    box-shadow:
            0 0 0 0.8rem hsl(0, 0%, 16%),
            0 0 0 2.5rem hsl(0, 0%, 6%);
  }
`

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
  display: block;
  text-align: center;
`

const DescriptionParent = styled.div`
  display: flex;
`

const DescriptionChild = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  
  img {
    border-radius: 50%;
    width: 20em;
    height: 20em;
    box-shadow:
            0 0 0 1rem hsl(0, 0%, 20%),
            0 0 0 2.5rem hsl(0, 0%, 10%);
    margin-right: 2rem;
    position: relative;
    animation: ${borderAnimation} 4s both ease-in-out infinite alternate-reverse;
  }

  :not(:first-child) {
    
  }
`

const moveBubbles = (x, y, deg, height) => keyframes`
  from {
    transform: translate(${x}, ${y}) rotate(${deg}) translateX(0); 
  }
  to {
    transform: translate(${x}, ${y}) rotate(${deg}) translateX(${height});
  }
`

const Bubble = styled.div`
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background-color: rgb(255, 255, 255, 0.2);
  z-index: 2;
  animation:
          ${props => moveBubbles(
              props.x, props.y, props.deg, props.height
          )} 3s ease-in-out infinite alternate-reverse;
`

const AboutMe = (props) => {

    return(
        <div id="aboutme" className="about">
            <div className="gradient1"/>
            <div className="section reveal">
                <h1>About me</h1>
                <h2>Hi!</h2>
                <DescriptionParent>
                    <DescriptionChild id="image">
                        <Bubble
                            size={"2rem"} bottom={"10%"}
                            x={"-50%"} y={"-50%"} deg={"50deg"} heiht={"3rem"}/>
                        <Bubble
                            size={"1.5rem"} bottom={"5%"} left={"20%"}
                            x={"20%"} y={"30%"} deg={"120deg"} heiht={"3rem"}/>
                        <img className="circular-image" src={portrait}/>
                    </DescriptionChild>
                    <DescriptionChild>
                        <p>
                            Since February 2022, I have a <span className="bold-white">BS</span> in <span className="bold-white">Computer Science</span> from Technical University of Lodz. In my thesis I aimed to learn more about neural networks and inspiration came quickly - I decided to take upon a challenge and recreate Quick, Draw! made by Google using technologies I have not used before. Turns out I really enjoyed <span className="blue">React</span> and, once again, the process of designing a website - and I decided to try and change from back-end to <span className="blue">front-end</span> developer.
                        </p>
                        <p>
                            Privately I draw since I was young - I even once thought it will become my career! I love to cook and last year completed a challenge of testing out one hundred new recipes. I’m a big fan of board games, books, and indie music.
                        </p>
                        <ContactMe>
                            <GButton><i className="fa-brands fa-linkedin-in" style={{fontSize: "20px", marginRight: "10px"}}/>Oktawia Rogowicz</GButton>
                            <GButton><i className="fa-brands fa-git" style={{fontSize: "20px", marginRight: "10px"}}/>OktawiaRogowicz</GButton>
                            <GButton><i className="fa-solid fa-at" style={{fontSize: "20px", marginRight: "10px"}} />oktawia.rogowicz.50@gmail.com</GButton>
                        </ContactMe>
                    </DescriptionChild>
                </DescriptionParent>
            </div>
            <div className="gradient3"/>
        </div>
    );
}

export default AboutMe;