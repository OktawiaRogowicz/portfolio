import React from "react";
import "./Work.css";
import ProjectPreview from "./ProjectPreview";
import projectElements from "./projectElements/projectsElements";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const OneYearPreview = (props) => {

    return(
        <div>
            <div className="Timeline" >
                <p><span>{props.year}</span></p>
            </div>
            <ProjectsContainer>
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
                            title={element.title}
                            subtitle={element.subtitle}
                            description={element.description}
                            year={element.year}
                            source={element.source}
                            link={element.link}
                        />
                    );
                })}
            </ProjectsContainer>
        </div>
    );
}

export default OneYearPreview;