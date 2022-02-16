import portrait from './components/about-me/portrait.jpeg'
import './App.css';
import Timeline from "./components/my-work/Timeline";
import OneYearPreview from "./components/my-work/OneYearPreview";
import AboutMe from "./components/about-me/AboutMe";
import MyWork from "./components/my-work/MyWork";
import Navbar from "./components/Navbar/Navbar";

function App() {
    const year1 = 2021;

    return (
        <div>
            <Navbar/>
            <div className="App">
                <AboutMe/>
                <MyWork/>
            </div>
        </div>
    );
}

export default App;
