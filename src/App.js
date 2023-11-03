import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import ModeButton from './Components/ModeButton';

// Imported Router, Routes and Route (video 16)
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";



function App() {

    // Dark mode for complete website (video 12)
    const [mode, setMode] = useState('light');
    const [textMode, setTextMdoe] = useState('dark');

    // Exercise 2 (Adding colorMode hooks)
    const [darkMode, setDarkMode] = useState(null);
    const [lightMode, setLightMode] = useState(null);

    // Creating toggleMode function which will be passed as a parameter in props (video 12)
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            setTextMdoe('light')
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            showAlert('Dark mode has been Enabled', 'success');

            // Setting dark mode to not null (Exercise 2)
            setDarkMode({
                text: 'Dark',
                color: 'white',
            });
            setLightMode(null);
            // Changing Title dynamically (Video 15)
            document.title = "TextUtils - Dark Mode";

        } else {
            setMode('light');
            setTextMdoe('dark');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert('Light mode has been Enabled', 'success');

            // Setting Light Mode Object to not null (Exercise 2)
            setLightMode({
                text: 'Light',
                color: 'black'
            });

            // Changing Title dynamically (Video 15)
            document.title = "TextUtils - Light Mode";
            setDarkMode(null);
        }
    }

    // Creating alert for state (video 13)
    const [alert, setAlert] = useState(null);

    // Creating a function to handle alert (video 13)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    return (
        <>
            {/* Added Router space (video 16) */}
            <Router>
                {/* Passing prop variables (video 6) title and about */}
                {/* Created mode and toggleMode props (video 12) */}
                <Navbar title="Text Utils" about="About US" mode={mode} textMode={textMode} toggleMode={toggleMode} />

                {/* Adding new component to it (video 13) */}
                <Alert alert={alert} />

                {/* Added buttons for different dark mode (Exercise 2)*/}
                <div className="container flex">
                    <ModeButton mode={darkMode} bgColor='#2A272A' />
                    <ModeButton mode={darkMode} bgColor='#412728' />
                    <ModeButton mode={darkMode} bgColor='#303030' />
                    <ModeButton mode={darkMode} bgColor='#170000' />
                </div>

                {/* Adding buttons for different light mode (Exercise 2)*/}
                <div className="container">
                    <ModeButton mode={lightMode} bgColor='#FFE8F7' />
                    <ModeButton mode={lightMode} bgColor='#FFE694' />
                    <ModeButton mode={lightMode} bgColor='#FFDFCA' />
                    <ModeButton mode={lightMode} bgColor='#99E7E9' />
                </div>

                <div className="container my-3">
                    {/* Added Routes to About us and form (video 16) */}
                    <Routes>
                        {/* Added route with elements (video 16) */}
                        <Route exact path="/about" element={<About mode={mode} textMode={textMode}/>} />
                        <Route exact path="/" element={<Textform heading="Enter the text to analyze" showAlert={showAlert} />} />
                    </Routes>

                    {/* <Textform heading="Enter the text to analyze" showAlert={showAlert} /> */}
                </div>
            </Router>
        </>
    );
}

export default App;
