import React from "react";
import "./Work.css";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import image1 from "./projectElements/ascii_game.png";
import image2 from "./projectElements/fat16.png";
import image3 from "./projectElements/bot_battles.png";
import image4 from "./projectElements/quick_help.png";
import image5 from "./projectElements/mobile_game.png";
import image6 from "./projectElements/bot_battles.png";

const GButton = styled.button`
  background-color: transparent;
  border: none;
  color: lightgray;
  text-align: right;
  display: inline-flex;
  font-family: 'Comfortaa', cursive;
  text-transform: uppercase;
  &:hover{
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
  color: lightgray;
  text-align: right;
  display: inline-flex;
  font-family: 'Comfortaa', cursive;
  text-transform: uppercase;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
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
    const leafArray = [image1, image2, image3, image4, image5, image6];
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    if(isMobile || number % 2 === 1) {
        return (
            <div className="ProjectPreview">
                <div className="project-preview-child project-image-container sm">
                    <VisitProject href={link}>
                        <img className="ProjectImage" src={leafArray[number-1]} alt="A screen of the project"/>
                    </VisitProject>
                    <p><span>Visit the website</span></p>
                </div>
                <div className="project-preview-child ProjectDescription sm">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{desc}</p>
                    <GithubButton source={source}/>
                </div>
            </div>);
    }
    return (
        <div className="ProjectPreview">
            <div className="project-preview-child ProjectDescription sm" style={{textAlign: "right"}}>
                <h3 style={{textAlign: "right"}}>{title}</h3>
                <h4 style={{textAlign: "right"}}>{subtitle}</h4>
                <p style={{textAlign: "right"}}>{desc}</p>
                <GithubButton source={source}/>
            </div>
            <div className="project-preview-child project-image-container sm">
                <VisitProject href={link}>
                    <img className="ProjectImage" src={leafArray[number-1]} alt="A screen of the project"/>
                </VisitProject>
                <p><span>Visit the website</span></p>
            </div>
        </div>);
}

export default ProjectPreview;