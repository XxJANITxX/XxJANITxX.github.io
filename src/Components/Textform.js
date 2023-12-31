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
    // Introducing hook to our functional component (video 7)
    const [text, setText] = useState("");

    // Handling onclick and onchange event (video 7)
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };
    
    // Added this feature in ( video 9 )
    const handleClearClick = () => {
        let btnArr = document.getElementsByClassName("btn");
        Array.from(btnArr).forEach(element => {
            element.classList.remove('btn-primary');
            element.classList.add('btn-danger');
        })
        props.showAlert('Text Cleared', 'danger');
        setText("");
    }

    // Added this feature in video 9
    const handleCopy = () => {
        // let copyText = document.getElementById('myBox')
        // copyText.select();
        // copyText.setSelectionRange(0, 99999);
        // document.execCommand('copy');
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };


    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
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

                <div className="container">
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                        Convert to upper case
                    </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
                        Convert to lower case
                    </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                        Clear
                    </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
                        Copy
                    </button>

                </div>
            </div>

            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{ text.split(/\s+/).filter((element)=>{ return element.length !== 0 }).length} Word and {text.length} character</p>
                <p>This content will take {Math.round(0.008 * text.split(" ").length)} time to read</p>
                <h3> Preview </h3>
                <p>{text.length > 0 ? text:"Nothing to display"}</p>
            </div>
        </>
    );
}
