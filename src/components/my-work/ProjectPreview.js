import React from "react";
import "./Work.css";
import styled, {keyframes} from "styled-components";
import {useMediaQuery} from 'react-responsive';
import image1 from "./projectElements/ascii_game.png";
import image2 from "./projectElements/fat16.png";
import image3 from "./projectElements/bot_battles.png";
import image4 from "./projectElements/quick_help.png";
import image5 from "./projectElements/mobile_game.png";
import image6 from "./projectElements/bot_battles.png";
import image7 from "./projectElements/chat-app-CSS-illustration.png";
import image8 from "./projectElements/ip-address-tracker.png";
import image9 from "./projectElements/sunnyside-agency-landing-page.png";
import "animate.css";

const GButton = styled.button`
  background-color: transparent;
  border: none;
  color: lightgray;
  text-align: right;
  display: inline-flex;
  font-family: 'Comfortaa', cursive;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

`

const GithubButton = (props) => {
    const link = props.source;
    return (
        <a href={link} style={{textDecoration: "none"}}>
            <GButton>
                See source code on GitHub
                {/*<i className="fa-brands fa-git" style={{fontSize: "20px", marginLeft: "10px"}}/>*/}
            </GButton>
        </a>
    )
}

const VisitProject = styled.a`
  background-color: transparent;
  border: none;
  color: black;
  text-align: right;
  display: inline-block;
  font-family: 'Comfortaa', cursive;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    
    p {
      opacity: 1;
      transform: translateY(0);
      animation: bounce 0.8s 0.08s;
    }
  }
  
  p {
    opacity: 0;
    color: white;
    background-color: black;
    border-radius: 5px;
    padding: 5px;
    width: fit-content;
    margin: 0.5rem auto 0 auto;
    text-transform: none;
    text-decoration: none;
    text-underline: none;
    transform: translateY(-1rem);
    transition: 0.1s all linear;

    @media only screen and (max-width: 768px) {
      opacity: 1;

      background-color: transparent;
      color: lightgray;
      text-transform: uppercase;
    }
  }

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-width: 150px;
    max-height: 300px;
    object-fit: scale-down;

    @media only screen and (max-width: 768px) {
      max-width: 300px;
      flex-grow: 1;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }
  }
`

const Container = styled.div`
  margin-top: 5vh;
  margin-bottom: 10vh;
  display: inline-flex;
  margin-left: 2rem;

  @media only screen and (max-width: 768px) {
    display: inline-block;
    text-align: left;
  }
`

const Subcontainer = styled.div`
  vertical-align: middle;
  display: inline-block;
  width: 50%;
  text-align: center;
  flex-grow: 1;

  p, h3, h4 {
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const ProjectPreview = (props) => {
    const number = props.id;
    const title = props.title;
    const subtitle = props.subtitle;
    const desc = props.description;
    const icon = props.icon;
    const source = props.source;
    const link = props.link;
    const leafArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    const isMobile = useMediaQuery({query: `(max-width: 768px)`});

    return (
        <Container style={{order: "$(number)"}}>
            <Subcontainer
                className="project-image-container sm"
                style={isMobile || number % 2 == 1 ? {order: "1"} : {order: "2"}}
            >
                <VisitProject href={link}>
                    <img src={leafArray[number - 1]} alt="A screen of the project"/>
                    <p><span>Visit the website</span></p>
                </VisitProject>

            </Subcontainer>
            <Subcontainer
                className="ProjectDescription sm"
                style={isMobile || number % 2 == 1 ? {order: "2"} : {order: "1"}}
            >
                <h3 style={isMobile || number % 2 == 1 ? {} : {textAlign: "right"}}>{title}</h3>
                <h4 style={isMobile || number % 2 == 1 ? {} : {textAlign: "right"}}>{subtitle}</h4>
                <p style={isMobile || number % 2 == 1 ? {} : {textAlign: "right"}}>{desc}</p>
                <GithubButton source={source}/>
            </Subcontainer>
        </Container>);
}

export default ProjectPreview;