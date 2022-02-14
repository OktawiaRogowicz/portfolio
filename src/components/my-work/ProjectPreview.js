import React from "react";
import "./Work.css";
import picture from "./collecting3.png";

const ProjectPreview = (props) => {
    const number = props.number;
    const title = props.title;
    const subtitle = props.title;
    const desc = props.description;

    if(number % 2 === 1) {
        return (
            <div className="ProjectPreview">
                <div className="ProjectImage"><img src={picture} alt="Logo"/></div>
                <div className="ProjectDescription">
                    <h1>Quick, help! - Quick, Draw! wannabe</h1>
                    <h2>A project I've prepared for my Computer Science thesis</h2>
                    <p>After some experience in neural network, I wanted to prepare a bigger project. The aim of the
                        project was to recreate Google's online game. </p>
                </div>
            </div>);
    }
    return (
        <div className="ProjectPreview">
            <div className="ProjectDescription">
                <h1>Quick, help! - Quick, Draw! wannabe</h1>
                <h2>A project I've prepared for my Computer Science thesis</h2>
                <p>After some experience in neural network, I wanted to prepare a bigger project. The aim of the
                    project was to recreate Google's online game. </p>
            </div>
            <div className="ProjectImage"><img src={picture} alt="Logo"/></div>
        </div>);
}

export default ProjectPreview;