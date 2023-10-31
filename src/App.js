import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {

    // Dark mode for complete website (video 12)
    const [mode, setMode] = useState('light');
    const [textMode, setTextMdoe] = useState('dark');

    // Creating toggleMode function which will be passed as a parameter in props
    const toggleMode = () => {
        if(mode==='light'){
            setMode('dark');
            setTextMdoe('light')
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }else{
            setMode('light');
            setTextMdoe('dark');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }


    return (
        <>
            {/* Passing prop variables (video 6) */}
            {/* Created mode and toggleMode props (video 12) */}
            <Navbar title="Text Utils" about="About US" mode={mode} textMode={textMode} toggleMode={toggleMode} />
            
            <div className="container my-3">
                <Textform heading="Enter the text to analyze" />
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
