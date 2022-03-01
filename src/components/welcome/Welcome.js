import React from "react";
import "./Welcome.css";

const Welcome = () => {

    return(
        <div className="welcome">
            <div id="welcome" className="section">
                <p>My name is</p>
                <h2>Oktawia Rogowicz</h2>
                <h1>and I'm a software developer</h1>
                <a className="scroll" href="#">Read more</a>
            </div>
        </div>
    );
}

export default Welcome;