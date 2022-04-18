import React from "react";
import "./Welcome.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: var(--color2);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;
  color: var(--color3)
  
  p {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;

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
    
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: 760px) {
      font-size: 1rem;
    }
  }
`

const Welcome = () => {

    return(
        <Container>
            <div id="welcome" className="section" style={{display: "flex"}}>
                <div style={{margin: "auto"}}>
                    <p>My name is...</p>
                    <h2>Oktawia Rogowicz</h2>
                    <h1>and I'm a software developer</h1>
                    <a className="scroll" href="#">Read more</a>
                </div>
            </div>
        </Container>
    );
}

export default Welcome;