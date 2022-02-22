import React from "react";
import "./Work.css";
import ProjectPreview from "./ProjectPreview";
import projectElements from "./projectsElements";

const OneYearPreview = (props) => {

    return(
        <div>
            <div className="Timeline" >
                <p>{props.year}</p>
            </div>
            <div>
                {projectElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";
                    let number = element.id % 2;

                    if(element.year === props.year)
                    return (
                        <ProjectPreview
                            key={element.key}
                            number={number}
                            date={element.date}
                            title={element.title}
                            subtitle={element.subtitle}
                            description={element.description}
                            year={element.year}
                            dateClassName="date"
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default OneYearPreview;