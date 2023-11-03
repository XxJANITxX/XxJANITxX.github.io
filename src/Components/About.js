// This component is created for video 10

// import React, {useState} from "react";

export default function About(props) {

    const styleObject = {
        backgroundColor:props.mode==='dark'?'black':'white',
        color:props.textMode
    }
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'1px solid black'
    // });

    // const [buttonName, setButtonName] = useState("Enable dark mode");

    // const darkModeEnable = (event) =>{

    //     if(myStyle.color === "white"){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid black'
    //         });
    //         setButtonName("Enable light mode");
    //     }else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         });
    //         setButtonName("Enable dark mode");
    //     }
    // }

    return (
        <div className="container" style={styleObject}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the
                            first item's accordion body.
                        </div>
                    </div>
                </div>
                
            </div>

            {/* <div className="container">
                <button type="button" className="btn btn-primary" onClick={darkModeEnable}>{buttonName}</button>
            </div> */}
        </div>
    );
}
