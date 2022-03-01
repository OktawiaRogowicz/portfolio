import React from "react";
import "./Work.css";
import ProjectPreview from "./ProjectPreview";
import projectElements from "./projectElements/projectsElements";

const OneYearPreview = (props) => {

    return(
        <div>
            <div className="Timeline" >
                <p><span>{props.year}</span></p>
            </div>
            <div>
                {projectElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    if(element.year === props.year)
                    return (
                        <ProjectPreview
                            key={element.id}
                            id={element.id}
                            date={element.date}
                            title={element.title}
                            subtitle={element.subtitle}
                            description={element.description}
                            year={element.year}
                            icon={element.icon}
                            source={element.source}
                            link={element.link}
                            dateClassName="date"
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default OneYearPreview;