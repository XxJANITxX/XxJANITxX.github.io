// Create a navbar component (video 5)
import React from 'react'
// Importing prop-types (video 6)
import PropTypes from 'prop-types'


// Adding props object in Navbar component (video 6)
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            {/* Using props obj to add parameters passed (video 6)*/}
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">{props.about}</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
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
    title:'Set title here',
    aboutText:'About text here'
}