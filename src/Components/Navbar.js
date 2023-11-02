// Create a navbar component (video 5)
import React from 'react'
// Importing prop-types (video 6)
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


// Adding props object in Navbar component (video 6)
export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* Using props obj to add parameters passed (video 6)*/}
                {/* Added Link tag instead of anchor tag (video 16) */}
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Added Link tag instead of anchor tag (video 16) */}
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* Added Link tag instead of anchor tag (video 16) */}
                            <Link className="nav-link active" to="/about">{props.about}</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.textMode}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleMode}
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable dark mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Defining Proptypes (video 6)

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

// Defining default props Values (video 6)
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}