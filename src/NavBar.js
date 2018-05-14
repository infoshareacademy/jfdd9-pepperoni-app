import React from 'react'
import logo from "./logo.png"
import './App.css'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'


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
          <Link to="/" style={menuElementStyle}>Home</Link>
          {(this.props.location.pathname.includes('profile') || this.props.location.pathname.includes('order') || this.props.location.pathname.includes('gangsters-for-tag')) && <p style={menuElementStyle} onClick={() => this.props.history.goBack()}>
            Go back
          </p>}
        </div>
    )
  }
}

export default withRouter(NavBar)