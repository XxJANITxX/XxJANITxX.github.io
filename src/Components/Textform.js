// This component is created to describe state, hook and handling events (video 7)
/*
  * (video 8)This component is also added with some new features like 
  * lowercase conversion
  * Word Count, characters Count
  * Time to read
*/ 

// Importing state from react
import React, { useState } from "react";

export default function Textform(props) {
  // Introducing hook to our functional component
  const [text, setText] = useState("");

  // Handling onclick and onchange event
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myVox" className="form-label">
            <h1>
              {props.heading} - {text}
            </h1>
          </label>

          {/* Adding onchange event handler and displaying updated text */}
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            rows={10}
            value={text}
            placeholder="Enter your text here"
          />
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lower case
        </button>
      </div>

      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Word and {text.length} character</p>
        <p>This content will take {Math.round(0.008 * text.split(" ").length)} time to read</p>
        <h3> Preview </h3>
        <p>{text}</p>
      </div>
    </>
  );
}
