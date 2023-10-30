import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      {/* Passing prop variables (video 6) */}
      <Navbar title="Text Utils" about="About US"/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
