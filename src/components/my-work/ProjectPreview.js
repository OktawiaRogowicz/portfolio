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
                <img className="ProjectImage sm" src={picture} alt="A screen of the project"/>
                {/*<div className="ProjectImage"><img src={picture} alt="Logo"/></div>*/}
                <div className="ProjectDescription sm">
                    <h3>Quick, help!</h3>
                    <h4>Quick, draw! wannabe</h4>
                    <p>After some experience in neural network, I wanted to prepare a bigger project. The aim of the
                        project was to recreate Google's online game. </p>
                </div>
            </div>);
    }
    return (
        <div className="ProjectPreview">
            <div className="ProjectDescription sm">
                <h3>Quick, help!</h3>
                <h4>Quick, draw!</h4>
                <p>After some experience in neural network, I wanted to prepare a bigger project. The aim of the
                    project was to recreate Google's online game. </p>
            </div>
            <img className="ProjectImage sm" src={picture} alt="A screen of the project"/>
        </div>);
}

export default ProjectPreview;