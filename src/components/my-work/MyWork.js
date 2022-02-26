import React from "react";
import OneYearPreview from "./OneYearPreview";
import "./Work.css";

const MyWork = (props) => {

    return(
        <div className="section" id="projects" style={{backgroundColor: "white"}}>
            <h1>My work</h1>
            <h2>A selection of projects I've done</h2>
            <p>lorem ipsum</p>
            <OneYearPreview year="2021"/>
            <OneYearPreview year="2020"/>
            <OneYearPreview year="2019"/>
        </div>
    );
}

export default MyWork;