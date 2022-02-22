import React from "react";
import "./Work.css";
import picture from "./collecting3.png";
import github from "./github.svg";
import styled from "styled-components";

const GButton = styled.button`
  background-color: transparent;
  border: none;
  color: lightgray;
  text-align: right;
  display: inline-flex;
`

const GithubButton = () => {
    return (
        <GButton>
            See source code on GitHub
            <i className="fa-brands fa-github-square" style={{fontSize: "20px", marginLeft: "10px"}}/>
        </GButton>
    )
}

const ProjectPreview = (props) => {
    const number = props.number;
    const title = props.title;
    const subtitle = props.subtitle;
    const desc = props.description;

    if(number % 2 === 1) {
        return (
            <div className="ProjectPreview">
                <img className="ProjectImage sm" src={picture} alt="A screen of the project"/>
                {/*<div className="ProjectImage"><img src={picture} alt="Logo"/></div>*/}
                <div className="ProjectDescription sm">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{desc}</p>
                    <GithubButton/>
                </div>
            </div>);
    }
    return (
        <div className="ProjectPreview">
            <div className="ProjectDescription sm">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{desc}</p>
                <GithubButton/>
            </div>
            <img className="ProjectImage sm" src={picture} alt="A screen of the project"/>
        </div>);
}

export default ProjectPreview;