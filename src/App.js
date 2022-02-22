import './App.css';
import AboutMe from "./components/about-me/AboutMe";
import MyWork from "./components/my-work/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/footer/Footer";

function App() {
    const year1 = 2021;

    return (
        <div>
            <Navbar/>
            <div className="App">
                <Welcome/>
                <AboutMe/>
                <MyWork/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
