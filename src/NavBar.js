import React from 'react'
import logo from "./logo.png"
import './App.css'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img className="logo" src={logo}/>
        <Link to="/">Home</Link>
      </React.Fragment>
    )
  }
}

export default NavBar