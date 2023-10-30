// This component is created to describe state, hook and handling events (video 7)

// Importing state from react
import React, {useState} from "react";


export default function Textform(props) {
    
    // Introducing hook to our functional component
    const [text, setText] = useState('Enter text here');

    // Handling onclick and onchange event
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
    <div>
      
      <div className="mb-3">
        
        <label htmlFor="myVox" className="form-label">
          <h1>{props.heading} - {text}</h1>
        </label>

        {/* Adding onchange event handler and displaying updated text */}
        <textarea className="form-control" id="myBox" onChange={handleOnChange} rows={10} value={text} />
      
      </div>
      
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
   
    </div>
  );
}
