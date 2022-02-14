import portrait from './components/about-me/portrait.jpeg'
import './App.css';
import Timeline from "./components/my-work/Timeline";
import OneYearPreview from "./components/my-work/OneYear";
import AboutMe from "./components/about-me/AboutMe";

function App() {
    const year1 = 2021;

    return (
        <div className="App">
            {/*<AboutMe/>*/}
            <OneYearPreview year={year1}/>
        </div>
    );
}

export default App;
