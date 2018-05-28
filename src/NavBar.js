import React from 'react'
import logo from "./logo.png"
import './App.css'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { withUser } from './contexts/User'



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


class NavBar extends React.Component {
  render() {
    return (
        <div style={menuStyle}>
          <Link to="/"><img className="logo" src={logo} alt="GangBook logo"/></Link>
          {(this.props.location.pathname.includes('profile') || this.props.location.pathname.includes('order') || this.props.location.pathname.includes('gangsters-for-tag')) && <p style={menuElementStyle} onClick={() => this.props.history.goBack()}>
            Go back
          </p>}
          <Link to="/myprofile" style={menuElementStyle}>My Profile</Link>
          <Link to="/myorder" style={menuElementStyle}>My Jobs/Orders</Link>
          <a style={menuElementStyle} onClick={this.props.signOut}>Sign out</a>
        </div>
    )
  }
}

export default withUser(withRouter(NavBar))