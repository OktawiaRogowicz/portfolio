import React from "react";
import "./Work.css";
import Timeline from "./Timeline";
import ProjectPreview from "./ProjectPreview";

const OneYearPreview = (props) => {

    return(<div>
        <Timeline year={props.year}/>
        <ProjectPreview number="1"/>
        <ProjectPreview number="2"/>
    </div>);
}

export default OneYearPreview;