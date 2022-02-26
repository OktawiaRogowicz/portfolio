import './App.css';
import AboutMe from "./components/about-me/AboutMe";
import MyWork from "./components/my-work/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/footer/Footer";
import DiamondNav from "./components/Navbar/diamond-nav";
import {useEffect, useState} from "react";

function App() {

    useEffect(() => {
        const doSomething = (event) => {
            const sections = document.querySelectorAll('scroll-section');
            const nav = document.querySelectorAll('navItem');

            let current = '';
            sections.forEach( section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            } )

        };

        window.addEventListener("scroll", doSomething,{ capture: true }) ;
        return () => {
            window.removeEventListener("scroll", doSomething);
        };
    }, []);

    return (
        <div>
            <div className="App" style={{backgroundColor: "${color}"}}>
                <div className="scroll-section">
                    <Navbar/>
                    <Welcome/>
                </div>
                <div className="scroll-section">
                    <AboutMe/>
                </div>
                <div className="scroll-section">
                    <MyWork/>
                </div>
                <div className="scroll-section">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
