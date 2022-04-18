import React from "react";
import "./Welcome.css";
import styled from "styled-components";
import "./skills.scss";

const Container = styled.div`
  width: 100%;
  background: var(--color2);
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;
  color: var(--color3);
  
  p {
    color: var(--color3);
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
    z-index: 1;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
    
    @media only screen and (max-width: 760px) {
      font-size: 1rem;
    }
  }
  
  h2 {
    font-size: 4.5rem;
    margin: 0.625rem;
    color: var(--color3);
    z-index: 1;

    @media only screen and (max-width: 768px) {
      font-size: 3.2rem;
    }
    
    @media only screen and (max-width: 760px) {
      font-size: 2rem;
    }
  }
  
  h1 {
    font-size: 2rem;
    margin: 1rem;
    color: var(--color3);
    z-index: 1;
    
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: 760px) {
      font-size: 1rem;
    }
  }
`

const Welcome = () => {

    const skills = ["devicon-python-plain",
        "devicon-react-original",
        "devicon-css3-plain",
        "devicon-html5-plain",
        "devicon-sass-original",
        "devicon-c-plain",
        "devicon-java-plain",
        "devicon-javascript-plain",
        "devicon-nodejs-plain",
        "devicon-mysql-plain",
        "devicon-oracle-original",
        "devicon-spring-plain",
        "devicon-tensorflow-original",
        "devicon-vuejs-plain",
    ];

    return(
        <Container>
            <div id="welcome" className="section" style={{display: "flex"}}>
                <div style={{margin: "auto"}}>
                    <p>My name is</p>
                    <h2>Oktawia Rogowicz</h2>
                    <h1>and I'm a software developer</h1>

                    <ul className="skills">
                        {skills.map(function(skill, i){
                            return <li><i className={skill} key={i} style={{fontSize: "2rem"}}/></li>
                        })}
                    </ul>

                    <a className="scroll" href="#">Read more</a>
                </div>
            </div>
        </Container>
    );
}

export default Welcome;