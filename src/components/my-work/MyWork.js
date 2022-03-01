import React from "react";
import OneYearPreview from "./OneYearPreview";
import "./Work.css";

const MyWork = (props) => {

    return(
        <div className="section reveal" id="projects" style={{backgroundColor: "white"}}>
            <h1>My work</h1>
            <h2>A selection of projects I've done</h2>
            <div className="container-t">
                <div className="all-timelines">
                    <OneYearPreview year="2022"/>
                    <OneYearPreview year="2021"/>
                    <OneYearPreview year="2020"/>
                    <OneYearPreview year="2019"/>
                </div>
            </div>
        </div>
    );
}

export default MyWork;