import './App.css';
import AboutMe from "./components/about-me/AboutMe";
import MyWork from "./components/my-work/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/footer/Footer";
import DiamondNav from "./components/Navbar/diamond-nav";
import {useEffect, useState} from "react";

function App() {

    // useEffect(() => {
    //     const doSomething = (event) => {
    //         const sections = document.querySelectorAll('.scroll-section');
    //         const reveals = document.querySelectorAll('.reveal');
    //
    //         for (let i = 0; i < sections.length; i++) {
    //             const windowHeight = window.innerHeight;
    //             const elementTop = sections[i].getBoundingClientRect().top;
    //             const elementVisible = 150;
    //             console.log("height: ", windowHeight, " top: ", elementTop);
    //
    //             if (elementTop < windowHeight - elementVisible) {
    //                 reveals[i].classList.add("active");
    //                 console.log("active for section ", i);
    //                 console.log(reveals[i].classList);
    //             } else {
    //                 if(reveals[i])
    //                     reveals[i].classList.remove("active");
    //             }
    //         }
    //
    //     };
    //
    //     window.addEventListener("scroll", doSomething,{ capture: true }) ;
    //     return () => {
    //         window.removeEventListener("scroll", doSomething);
    //     };
    // }, []);

    return (
        <div>
            <div className="App" style={{backgroundColor: "${color}"}}>
                <div id="welcome" className="scroll-section">
                    <Navbar/>
                    <Welcome/>
                </div>
                <div id="aboutme" className="scroll-section">
                    <AboutMe/>
                </div>
                <div id="projects" className="scroll-section">
                    <MyWork/>
                </div>
                <div id="contact" className="scroll-section">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
