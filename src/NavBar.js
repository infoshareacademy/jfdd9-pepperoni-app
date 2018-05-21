import React from 'react'
import logo from "./logo.png"
import './App.css'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { withUser } from './User'



const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderBottom: 'solid 1px rgba(53, 53, 53, 0.83)'
}

const menuElementStyle = {
  margin: '10px',
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: 'Quattrocento, serif',
  cursor: 'pointer',
}
const formButton = {
  height: '0.5rem',
  width: '50%',
  backgroundColor: 'rgb(75, 80, 98)',
  border: 'none',
  color: '#fff',
  fontWeight: 'bolder',
  fontSize: '0.9rem',
  marginTop: '0.5rem',
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderRadius: '5px',
  marginBottom: '1rem',
}

class NavBar extends React.Component {
  render() {
    return (
        <div style={menuStyle}>
          <Link to="/"><img className="logo" src={logo} alt="GangBook logo"/></Link>
          <Link to="/" style={menuElementStyle}>Home</Link>
          <Link to="/myprofile" style={menuElementStyle}>My Profile</Link>
          {(this.props.location.pathname.includes('profile') || this.props.location.pathname.includes('order') || this.props.location.pathname.includes('gangsters-for-tag')) && <p style={menuElementStyle} onClick={() => this.props.history.goBack()}>
            Go back
          </p>}
          <p>
            logged in as: {this.props.user.email} <button style={formButton} onClick={this.props.signOut}>Sign out</button>
          </p>
        </div>
    )
  }
}

export default withUser(withRouter(NavBar))